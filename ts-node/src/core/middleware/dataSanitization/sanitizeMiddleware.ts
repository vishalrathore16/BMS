import { Request, Response, NextFunction } from 'express';
import { ZodSchema } from 'zod';

export const sanitizeMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const sanitizeInput = (input: any) => {
        if (input == null) {
            return input;
        }

        if (typeof input === 'string') {
            return input.replace(/<\/?[^>]+(>|$)/g, "");
        } else if (typeof input === 'object') {
            Object.keys(input).forEach(key => {
                input[key] = sanitizeInput(input[key]);
            });
        }
        return input;
    }

    req.body = sanitizeInput(req.body);
    req.query = sanitizeInput(req.query);
    req.params = sanitizeInput(req.params);

    next();
}

// Validation Middleware
export const validateMiddleware = (schema: ZodSchema) => {
  // console.log("Inside valldateMiddleware")
  return (req: Request, res: Response, next: NextFunction) => {
    // Validate the request body against the provided Zod schema
    const validationResult = schema.safeParse(req.body);

    if (!validationResult.success) {
      // Respond with a 400 status code and the validation errors
      return res.status(400).json({
        code: "BAD_REQUEST", // Enum or constant for standardized error codes
        message: "Invalid input data",
        errors: validationResult.error.errors.map((error: { path: any; message: any; }) => ({
          path: error.path,
          message: error.message,
        })),
      });
    }

    // Update req.body with validated data for type safety
    req.body = validationResult.data;

    next(); // Move to the next middleware
  };
};





import { Request, Response, NextFunction } from 'express';
import {z } from 'zod';
import { ResponseCodes } from '../../../enums/responseCodes';
import { ObjectSchema } from 'joi';

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
export const validateMiddleware = (schema: z.ZodSchema) => {
  return (req: Request, res: Response, next: NextFunction): void => {
      const validationResult = schema.safeParse(req.body);
      
      if (!validationResult.success) {
          res.status(400).json({
              code: ResponseCodes.BAD_REQUEST,
              message: "Invalid input data",
              errors: validationResult.error.errors,
          });
          return;
      }
      
      next(); 
    }
    }

export const tokenMiddleware = (schema: ObjectSchema) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error } = schema.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    next();
  };
};







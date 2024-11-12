
import { z } from 'zod';
import { AuthErrors } from '../../../enums/errorMessages';
import Joi from 'joi';
import { join } from 'path';

export const loginSchema = z.object({
  email: z.string().email(AuthErrors.InvalidEmail),
  password: z.string().min(8,AuthErrors.InvalidPassword),
});

export const changePasswordSchema = z.object({
  email: z.string().email(AuthErrors.InvalidEmail),
  oldPassword: z.string().min(8,AuthErrors.InvalidPassword),
  newPassword: z.string().min(8,AuthErrors.InvalidPassword)
});

export const registerSchema = z.object({
  email: z.string().email(AuthErrors.InvalidEmail),
  password: z.string().min(8,AuthErrors.InvalidPassword),
})



export const refreshTokenSchema = Joi.object({
  refreshToken: Joi.string().required().messages({
    'any.required': 'Refresh token is required',
    'string.empty': 'Refresh token cannot be empty',
  }),
});



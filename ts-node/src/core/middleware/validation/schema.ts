
import { z } from 'zod';
import { AuthErrors } from '../../../enums/errorMessages';

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



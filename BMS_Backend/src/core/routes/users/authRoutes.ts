import { Router } from 'express';
import  Controller  from '../../controllers/userController';
import {sanitizeMiddleware,validateMiddleware}from '../../middleware/dataSanitization/sanitizeMiddleware';
import { loginSchema, changePasswordSchema, registerSchema } from "../../middleware/validation/schema";
const userrouter = Router();

userrouter.post('/changePassword',sanitizeMiddleware,validateMiddleware(changePasswordSchema),Controller.changePassword)
userrouter.post('/login',sanitizeMiddleware, validateMiddleware(loginSchema),Controller.login);
userrouter.post('/register',sanitizeMiddleware,validateMiddleware(registerSchema),Controller.register);
export default userrouter;



import { Router } from 'express';
import  Controller  from '../../controllers/userController';
import {sanitizeMiddleware,validateMiddleware,tokenMiddleware}from '../../middleware/dataSanitization/sanitizeMiddleware';
import { loginSchema, changePasswordSchema, registerSchema , refreshTokenSchema } from "../../middleware/validation/schema";


const userrouter = Router();

userrouter.post('/register',sanitizeMiddleware,validateMiddleware(registerSchema),Controller.register);
userrouter.post('/login',sanitizeMiddleware, validateMiddleware(loginSchema),Controller.login);
userrouter.post('/changePassword',sanitizeMiddleware,validateMiddleware(changePasswordSchema),Controller.changePassword);
userrouter.post('/refresh-token',tokenMiddleware(refreshTokenSchema),Controller.refreshToken);


export default userrouter;

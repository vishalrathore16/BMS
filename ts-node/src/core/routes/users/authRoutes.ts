import { Router } from 'express';
import {loginController}  from '../../controllers/userController';
import {sanitizeMiddleware,validateMiddleware}from '../../middleware/dataSanitization/sanitizeMiddleware';
import { loginSchema } from "../../middleware/validation/loginSchema";
import { changePassword } from '../../controllers/userController';

const userrouter = Router();

userrouter.post('./',sanitizeMiddleware,validateMiddleware(loginSchema),changePassword)
userrouter.post('/login',sanitizeMiddleware, validateMiddleware(loginSchema),loginController);

export default userrouter;



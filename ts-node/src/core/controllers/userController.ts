import { Request, Response } from 'express';
import { loginUser } from '../services/authService';

export const loginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(401).json({ message: errorMessage });
  }
};


export const changePassword = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const { token, user } = await loginUser(email, password);
    res.status(200).json({ message: "Login successful", token, user });
  } catch (error) {
    const errorMessage = (error as Error).message;
    res.status(401).json({ message: errorMessage });
  }
};

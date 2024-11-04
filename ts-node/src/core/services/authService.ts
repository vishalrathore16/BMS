
import jwt from 'jsonwebtoken';
import { UserModel } from '../models/userModel';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export const loginUser = async (email: string, password: string) => {
  const user = await UserModel.findByEmail(email);
  if (!user) {
    throw new Error("Invalid email or password");
  }


  // Generate JWT
  const token = jwt.sign(
    { userId: user.id, role: user.role },
    JWT_SECRET,
    { expiresIn: '1h' }
  );

  return { token, user };
};
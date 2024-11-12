import jwt from 'jsonwebtoken';
const jwtSecret = process.env.JWT_SECRET!;
import { v4 as uuidv4 } from 'uuid';

abstract class AuthUtils{
    public generateToken(payload: object, expiresIn: number): string {
        return jwt.sign(payload, jwtSecret, { expiresIn });
      }

      verifyToken(token: string): any {
        return jwt.verify(token, jwtSecret);
      }
    
      protected generateUUID(): string {
        return uuidv4();
      }
}

export class Auth extends AuthUtils { }
export default Auth;
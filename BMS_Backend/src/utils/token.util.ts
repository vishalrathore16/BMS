import jwt from 'jsonwebtoken';

export const JWT_SECRET = 'your_access_token_secret';
export const JWT_REFRESH_SECRET = 'your_refresh_token_secret';

interface TokenPayload {
  userId: number;
  role: string;
  tenantId?: number;
}

// Generate Access Token (expires in 15 minutes)
export const generateAccessToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
};

// Generate Refresh Token (expires in 7 days)
export const generateRefreshToken = (payload: TokenPayload): string => {
  return jwt.sign(payload, JWT_REFRESH_SECRET, { expiresIn: '7d' });
};

// Verify Access Token
export const verifyAccessToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
};

// Verify Refresh Token
export const verifyRefreshToken = (token: string): TokenPayload | null => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET) as TokenPayload;
  } catch (error) {
    return null;
  }
};

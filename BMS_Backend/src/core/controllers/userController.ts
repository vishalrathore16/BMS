import { Request, Response } from 'express';
import  Services  from '../services/authService'
import { handleResponse } from '../../utils/error';
import { UserMessages, ValidationMessages}  from '../../enums/responseMessages';
import { ResponseCodes } from '../../enums/responseCodes';
import { ErrorMessages } from '../../enums/responseMessages';
import { generateAccessToken, verifyRefreshToken } from '../../utils/token.util';

class Controller {

    public  async register(req: Request, res: Response) {
        try {
            const result = await Services.register(req);
            res.status(200).json(handleResponse(undefined,UserMessages.RegisterSuccessfully,ResponseCodes.OK));
        } catch (error: unknown) {
            if (error instanceof Error){
                if (error.message === UserMessages.UserNotFound) {
                    res.status(404).json(handleResponse(null, UserMessages.UserNotFound, ResponseCodes.NOT_FOUND));
                } else if (error.message === ValidationMessages.InvalidCredentials) {
                    res.status(401).json(handleResponse(null, ValidationMessages.InvalidCredentials, ResponseCodes.UNAUTHORIZED));
                } else {
                    res.status(500).json(handleResponse(null, ErrorMessages.InternalServerError, ResponseCodes.INTERNAL_SERVER_ERROR));
                }
            } else {
                res.status(500).json(handleResponse(null, ErrorMessages.InternalServerError, ResponseCodes.INTERNAL_SERVER_ERROR));
            }
        }
    }

    public async login(req: Request, res: Response) {
        try {
          const { user, accessToken, refreshToken } = await Services.login(req);
          res.status(200).json(
            handleResponse(
              { user, accessToken, refreshToken },
              UserMessages.LoginSuccessful,
              ResponseCodes.OK
            )
          );
        } catch (error: unknown) {
          if (error instanceof Error) {
            if (error.message === UserMessages.UserNotFound) {
              res.status(404).json(handleResponse(null, UserMessages.UserNotFound, ResponseCodes.NOT_FOUND));
            } else if (error.message === ValidationMessages.InvalidCredentials) {
              res.status(401).json(handleResponse(null, ValidationMessages.InvalidCredentials, ResponseCodes.UNAUTHORIZED));
            } else {
              res.status(500).json(handleResponse(null, ErrorMessages.InternalServerError, ResponseCodes.INTERNAL_SERVER_ERROR));
            }
          } else {
            res.status(500).json(handleResponse(null, ErrorMessages.UnknownError, ResponseCodes.INTERNAL_SERVER_ERROR));
          }
        }
      }
    

    public async changePassword(req: Request, res: Response) {
        try {
            await Services.changePassword(req);
            res.status(200).json(handleResponse(undefined,UserMessages.PasswordChangedSuccessfully,ResponseCodes.OK));
        } catch (error: unknown) {   
            if (error instanceof Error){
                res.status(400).json(handleResponse(null,error.message, ResponseCodes.BAD_REQUEST));
            } else {
                res.status(500).json(handleResponse(null,ErrorMessages.UnknownError,ResponseCodes.INTERNAL_SERVER_ERROR));
            }         
        }
    }


    public async refreshToken(req: Request, res: Response) {
        const { refreshToken } = req.body;
    
        if (!refreshToken) {
          return res.status(400).json({ message: 'Refresh token is required' });
        }
    
        try {
          const decoded = verifyRefreshToken(refreshToken);
          if (!decoded) {
            return res.status(401).json({ message: 'Invalid refresh token' });
          }
    
          // Generate new Access Token
          const newAccessToken = generateAccessToken({
            userId: decoded.userId,
            role: decoded.role,
          });
    
          return res.status(200).json({ accessToken: newAccessToken });
        } catch (error) {
          return res.status(500).json({ message: 'Internal Server Error' });
        }
      }
    }


export default new Controller();

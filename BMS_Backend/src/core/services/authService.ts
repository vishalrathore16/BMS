import { ValidationMessages } from '../../enums/responseMessages';
import { Request } from "express";
import { ErrorMessages } from "../../enums/responseMessages";
import { UserFactory } from "../../core/factories/userFactory";

class Services {
    public async register(req: Request) {
        const {email, password, role } = req.body;
        const db = (req as any).knex;

        if(!email  || !password || !role) {
            throw new Error(ValidationMessages.AllFieldsRequired);
        }
        try{
            const userFactory = new UserFactory(db);
            return await userFactory.register(email,password,role);
        }catch  (error:any) {
            console.error('Error during register:', error);
            if (error instanceof Error){
                throw new  Error(error.message);
            }
            throw new Error(error.message);
        }


    }

    public async login(req: Request) {
        const { email, password } = req.body;
        const db = (req as any).knex;

        if (!email || !password) {
            throw new Error(ValidationMessages.EmailAndPasswordRequired);
        }

        try {
            const userFactory = new UserFactory(db);
            const result = await userFactory.login(email, password);
            return result; // Make sure to return the result to the client
        } catch (error: any) {
            console.error('Error during login:', error);
            if (error instanceof Error) {
                throw new Error(error.message);
            }
            throw new Error(ErrorMessages.UnknownError);
        }
    }

    public async changePassword(req: Request) {
        const { email, oldPassword, newPassword } = req.body;
        const db = (req as any).knex;

        if (!email || !oldPassword || !newPassword) {
            throw new Error(ValidationMessages.AllFieldsRequired);
        }
        try {
            const userFactory = new UserFactory(db);
            return await userFactory.updateAdminPassword(email, oldPassword, newPassword);
        } catch (error: unknown) {
            throw new Error(ErrorMessages.InternalServerError)
        }
    };


}

export default new Services;

import { Request } from "express";
import { ValidationMessages } from '../../enums/responseMessages';
import { ErrorMessages } from "../../enums/responseMessages";
import { UserFactory } from "../../core/factories/userFactory";
import { generateAccessToken, generateRefreshToken } from '../../utils/token.util';

class Services {

    public async register(req: Request) {
        const { first_name, last_name, email, password } = req.body;
        const db = (req as any).knex;

        if (!first_name || !last_name || !email || !password) {
            throw new Error(ValidationMessages.AllFieldsRequired);
        }
        try {
            const userFactory = new UserFactory(db);
            return await userFactory.register(first_name, last_name, email, password);
        } catch (error: any) {
            console.error('Error during register:', error);
            if (error instanceof Error) {
                throw new Error(error.message);
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
            const user = await userFactory.login(email, password);

            // Generate Tokens
            const payload = { userId: user.id, role: user.role, tenantId: user.tenant_id };
            const accessToken = generateAccessToken(payload);
            const refreshToken = generateRefreshToken(payload);

            return { user, accessToken, refreshToken }; // Return both tokens
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
    }

}

export default new Services;






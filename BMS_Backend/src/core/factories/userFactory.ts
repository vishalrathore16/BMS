import { Knex } from 'knex';
import { UserMessages } from '../../enums/responseMessages';
import userModel from '../models/userModel';

export class UserFactory {
    private userModel: userModel

    constructor(db: Knex) {
        this.userModel = new userModel(db);
    }

    public  async register(email: string, password: string, role: string): Promise<any> {
        try {
            const user = await this.userModel.create(email,password,role);
            if(!user){
                throw  new Error(UserMessages.UserNotFound);
            }
            return user;
        } catch (error) {
            console.error('registration failed:', error);
            throw  error;
        }
    }


    public async login(email: string, password: string) {
        try {
            const user = await this.userModel.findByEmail(email, password);
            if (!user) {
                throw new Error(UserMessages.UserNotFound);
            }
            return user; 
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    }

    public async createAdmin(email: string, password: string, role:string) {
        return await this.userModel.create(email, password , role);
    }

    public async updateAdminPassword(email: string, oldPassword: string, newPassword: string) {
        return await this.userModel.updatePassword(email, oldPassword, newPassword);
    }
}

export default UserFactory;






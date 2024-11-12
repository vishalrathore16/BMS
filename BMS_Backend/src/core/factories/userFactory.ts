import { Knex } from 'knex';
import { UserMessages } from '../../enums/responseMessages';
import userModel from '../models/userModel';

export class UserFactory {
    
    private userModel: userModel

    constructor(db: Knex) {
        this.userModel = new userModel(db);
    }

    public  async register( first_name: string, last_name: string, email: string, password: string, ): Promise<any> {
        try {
            const user = await this.userModel.create(first_name, last_name, email, password);
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

    public async createAdmin(first_name:string, last_name:string, email: string, password: string) {
        return await this.userModel.create(first_name, last_name, email, password);
    }

    public async updateAdminPassword(email: string, oldPassword: string, newPassword: string) {
        return await this.userModel.updatePassword(email, oldPassword, newPassword);
    }
}

export default UserFactory;






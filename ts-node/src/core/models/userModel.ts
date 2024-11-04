import { KnexInstanceWithDB } from '../../config/knex.config';

export interface User {
    id: number;
    email: string;
    password: string;
    role: string;
}

export const UserModel = {
    // Fetch a user by email
    async findByEmail(email: string): Promise<User | undefined> {
        const user = await KnexInstanceWithDB<User>('users').where({ email }).first();
        return user;
    },
};

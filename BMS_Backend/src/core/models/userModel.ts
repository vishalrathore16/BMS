import { Knex } from 'knex';
import bcrypt from 'bcrypt';

class UserModel {
    private db: Knex;

    constructor(db: Knex) {
        this.db = db;
    }

    public async findByEmail(email: string, password: string) {
        try {
            const user = await this.db('users').where({ email }).first();
            if (!user) {
                throw new Error("No user found with this email");
            }

            // Compare hashed password
            const isPasswordMatch = bcrypt.compare(password, user.password);
            if (!isPasswordMatch) {
                throw new Error("Invalid credentials");
            }
            return user;
        } catch (error) {
            console.error("Error finding user by email:", error);
            throw error;
        }
    }

    public async create(email: string, password: string, role: string) {
        const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password before storing it
        return this.db('users').insert({ email, password: hashedPassword });
    }

    public async updatePassword(email: string, oldPassword: string, newPassword: string) {
        const user = await this.db('users').where({ email }).first();
        if (!user) {
            throw new Error("User not found");
        }

        // Compare old password
        const isOldPasswordMatch = bcrypt.compare(oldPassword, user.password);
        if (!isOldPasswordMatch) {
            throw new Error("Old password is incorrect");
        }

        const hashedNewPassword = bcrypt.hashSync(newPassword, 10);
        return this.db('users').where({ email }).update({ password: hashedNewPassword });
    }
}

export default UserModel;

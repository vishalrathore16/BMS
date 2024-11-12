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
          const isPasswordMatch = bcrypt.compareSync(password, user.password);
          if (!isPasswordMatch) {
            throw new Error("Invalid credentials");
          }
          return {
            id: user.id,
            email: user.email,
            role: user.role, // Include role in the returned object
            tenant_id: user.tenant_id,
          };
        } catch (error) {
          console.error("Error finding user by email:", error);
          throw error;
        }
      }
    

    public async create(first_name:string, last_name:string, email: string, password: string) {
        const hashedPassword = bcrypt.hashSync(password, 10); // Hash the password before storing it
        return this.db('users').insert({first_name, last_name, email, password: hashedPassword });
    }

    public async updatePassword(email: string, oldPassword: string, newPassword: string) {
        const user = await this.db('users').where({ email }).first();
        if (!user) {  // Check if user exists
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




  
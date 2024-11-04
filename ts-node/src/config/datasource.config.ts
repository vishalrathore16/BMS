import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export function loadEnvironment(path: string, mode: string): { KNEX: any } {
    return {
        KNEX: {
            DB_HOST: process.env.DB_HOST || 'localhost',
            DB_USER: process.env.DB_USER || 'root',
            DB_PASSWORD: process.env.DB_PASSWORD || '1234',
            DB_PORT: process.env.DB_PORT || '3306',
            DB_NAME: process.env.DB_NAME || 'bookingDB',
        }
    };
}

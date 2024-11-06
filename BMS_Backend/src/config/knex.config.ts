import { Knex , knex} from 'knex';
import { loadEnvironment } from './datasource.config';

const { KNEX } = loadEnvironment(process.cwd(), "dist");

const knexWithDB: Knex.Config = {
    client: 'mysql2',
    connection: {
        host: KNEX.DB_HOST,
        user: KNEX.DB_USER,
        password: KNEX.DB_PASSWORD,
        database: KNEX.DB_NAME,
        port: Number(KNEX.DB_PORT),
    },
    pool: { min: 2, max: 10 },

    
};

export { knexWithDB };

// Initialize Knex instance here if needed elsewhere in the app
const KnexInstanceWithDB = knex(knexWithDB);
export { KnexInstanceWithDB };

export async function initializeDatabases() {
    try {
        await KnexInstanceWithDB.raw('SELECT 1');
        console.log('Connection to MySQL server established');
    } catch (error) {
        console.error('Error connecting to MySQL server:', error);
        process.exit(1);
    }
}

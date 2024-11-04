import { clearScreenDown } from 'readline';
import { knexWithDB } from '../config/knex.config';

const config = {
    ...knexWithDB,
    migrations: {
        directory: './migrations', // Ensure this path is correct
        tableName: 'knex_migrations',
    },
    seeds: {
        directory: './seeds',clearScreenDown
    },

    
};

export default config; // Use `export default` for Knex to recognize it









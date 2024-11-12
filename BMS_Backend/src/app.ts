import express  from 'express';
import { initializeDatabases, knexWithDB,KnexInstanceWithDB } from './config/knex.config';
import userrouter from './core/routes/users/authRoutes';
import bodyParser from 'body-parser';

const createApp = async (): Promise<any> => {
    const app = express();

    app.use((req, res, next) => {
        (req as any).knex = KnexInstanceWithDB; 
        next();
    });

    app.use(express.json());
    app.use(bodyParser.json());

    app.use('/api', userrouter);  

    return app;
}

const createServer = async () => {
    try {
        const app = await createApp();
        const port = process.env.PORT || 3000;

        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    }
    catch (error) {
        console.error('Failed to start server : ', error);
    }
};

// Initialize the database
initializeDatabases();
 
// create the Server
createServer();




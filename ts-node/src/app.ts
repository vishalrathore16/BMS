import express , {Request , Response , NextFunction} from 'express';
import { initializeDatabases } from './config/knex.config';
import userrouter from './core/routes/users/authRoutes';
// require('module-alias/register');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(express.json());

// Initialize the database
initializeDatabases();
 
// User routes
app.use('/api', userrouter);  

app.use((req: Request, res: Response, next: NextFunction) => {
    const error = new Error("Not Found") as { status?: number };
    error.status = 404; // Set the status to 404 for not found errors
    next(error);
});

// Error Handling Middleware
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: { status?: number; message: string }, req: Request, res: Response, next: NextFunction) => {
    const status = err.status || 500; // Default to 500 if status is not set
    res.status(status).json( {
        status , 
        message: err.message
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});




import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import goalRoutes from './routes/goalRoutes.js';
import userRoutes from './routes/userRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';
import colors from 'colors';
import { connectDB } from './config/db.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cors({
    origin: process.env.CLIENT_URL || '*' // set CLIENT_URL in env for production, don't use '*' for locked-down prod
}));

app.use('/api/goals', goalRoutes);
app.use('/api/users', userRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.green);

    connectDB();
});

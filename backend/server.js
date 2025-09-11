import express from 'express';
import dotenv from 'dotenv';
import goalRoutes from './routes/goalRoutes.js';
import errorHandler from './middleware/errorMiddleware.js';

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/goals', goalRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

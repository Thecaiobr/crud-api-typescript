import express from 'express';
import userRoutes from './routes/user.routes';
import { errorHandler } from './middlewares/errorHandler';
import { connectDB } from '../prisma/client';

const app = express();

app.use(express.json());
app.use('/users', userRoutes);
app.use(errorHandler);

export default app;
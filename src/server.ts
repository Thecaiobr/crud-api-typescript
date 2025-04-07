import app from './app';
import { PrismaClient } from '@prisma/client';
import { connectDB } from '../prisma/client';

// const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});

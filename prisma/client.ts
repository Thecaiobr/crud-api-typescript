// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export default prisma;

import { PrismaClient } from '@prisma/client';

// Evita instâncias múltiplas do Prisma Client em desenvolvimento (Hot Reload)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Conexão explícita (opcional, apenas se necessário)
export async function connectDB() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to MongoDB via Prisma');
  } catch (error) {
    console.error('❌ Connection error:', error);
    process.exit(1);
  }
}

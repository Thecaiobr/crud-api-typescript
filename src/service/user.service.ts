import { PrismaClient } from "@prisma/client";
import { userSchema } from "../validations/user.schema";

const prisma = new PrismaClient();

// Contém a lógica de negócio (ex: criar, buscar, atualizar usuários).
// Usa o Prisma Client para interagir com o banco de dados.
// Isola a lógica do banco de dados dos controllers, facilitando testes e reuso.

export class UserService {
    async createUser(data: unknown){
        const validateData = userSchema.parse(data);
        return prisma.user.create({ data: validateData})
    }

    async getUsers(){
        return prisma.user.findMany();
    }

    async getUserById(id: string){
        return prisma.user.findUnique({ where: { id } });
    }

    async updateUser(id: string, data: unknown){
        const validateData = userSchema.parse(data);
        return prisma.user.update({ where: { id }, data: validateData });
    }

    async deleteUser(id: string){
        return prisma.user.delete({ where: {id} });
    }
}
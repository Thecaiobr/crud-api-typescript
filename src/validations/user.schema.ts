import { z } from 'zod';

//definir e validar a estrutura de dados esperada para um usuário
export const userSchema = z.object({
    name: z.string().min(3, "Name is required"),
    email: z.string().email("Invalid email format"),
    phoneNumber: z.string().min(10, "Phone number is required"),
    gender: z.enum(['Male', 'Female'])
});

//Gera automaticamente um tipo TypeScript baseado no schema do Zod.
//USER INPUT ESPERADO:
// type UserInput = {
//     name: string;
//     email: string;
//     phoneNumber: string;
//     gender: 'Male' | 'Female' | 'Other';
//   };
export type UserInput = z.infer<typeof userSchema>;
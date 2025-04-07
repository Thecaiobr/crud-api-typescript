import e, { Request, Response } from "express";
import { UserService } from "../service/user.service";

//controller é responsável por receber as requisições do usuário
// Recebe as requisições HTTP (req, res) e delega a lógica para os services.
// Trata erros básicos (ex: validações, usuário não encontrado).
// Retorna respostas HTTP (ex: 201 Created, 404 Not Found).

const userService = new UserService();

export const createUser = async (req: Request, res: Response) => {
    try{
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({ message: "Error creating user", error });
        throw new Error("Error creating user"); 
    }
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Error fetching users", error });
        throw new Error("Error fetching users");
    }
}
export const getUserById = async (req: Request, res: Response) => {
    try {
      const user = await userService.getUserById(req.params.id);
      if (!user) return res.status(404).json({ error: 'User not found' });
      res.json(user);
    } catch (error) {
      res.status(500).json({ message: "Error fetching user", error });
    }
  };
  
  export const updateUser = async (req: Request, res: Response) => {
    try {
      const updatedUser = await userService.updateUser(req.params.id, req.body);
      res.json(updatedUser);
    } catch (error) {
      res.status(400).json({ message: "Error updating user", error });
    }
  };

export const deleteUser = async (req: Request, res: Response) => {
    try {
        await userService.deleteUser(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ message: "Error deleting user", error });
        throw new Error("Error deleting user"); 
    }
}



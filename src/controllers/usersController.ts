import { Request, Response } from "express";
import { UsersService } from "../services/userService";

export class UsersController {
  async createUser(req: Request, res: Response) {
    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({ erro: 'Nome e email são obrigatórios' });
    }

    await new UsersService().createUser(name, email);

    return res.status(201).json({ Mensagem: 'Usuário criado com sucesso' });
  }
}
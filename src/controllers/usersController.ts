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

  async getUserById(req: Request, res: Response) {
    const { id } = req.params;

    if (!id) {
      return res.status(400).json({ erro: 'ID do usuário é obrigatório' });
    }

    const user = await new UsersService().getUserById(Number(id));

    if (!user) {
      return res.status(404).json({ erro: 'Usuário não encontrado' });
    }

    return res.status(201).json({ Mensagem: 'Usuário encontrado com sucesso', user });
  }
}
import { Request, Response } from "express";
import { TransactionsService } from "../services/transactionService";

export class TransactionsController {
  async createTransaction(req: Request, res: Response) {
    const { from_user, to_user, valor } = req.body;

    await new TransactionsService().createTransaction(from_user, to_user, valor);

    return res.status(201).json({ Mensagem: 'Transferência realizada com sucesso' });
  }
}
import { TransactionsModel } from "../models/transactionsModel";
import { UsersModel } from "../models/usersModel";

export class TransactionsService {
    async createTransaction(from_user: number, to_user: number, valor: number) {
        if (valor <= 0) {
            return({ error: 'Não é possível transferir valor menor ou igual a zero' });
        }
        
        const payer = await new UsersModel().getUserById(from_user);

        if (payer.saldo >= valor) {
            await new UsersModel().updateUsersBalance(from_user, to_user, valor);
        } else {
            return({ error: 'Saldo insuficiente para realizar a transação' });
        }

        let status: string = 'SUCESS';
        const transaction = await new TransactionsModel().createTransaction(from_user, to_user, valor, status);

        return transaction;
    }
};
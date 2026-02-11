import { pool } from "../config/pool";

export class TransactionsModel {
    async createTransaction(from_user: number, to_user: number, valor: number, status: string) {
        await pool.query(
            `INSERT INTO transactions (from_user, to_user, valor, status, created_at) 
             VALUES ($1, $2, $3, $4, $5) RETURNING *`,
            [from_user, to_user, valor, status, new Date()]
        );

        return;
    };

}
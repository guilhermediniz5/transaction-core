import { pool } from "../config/pool";

export class UsersModel {
    async createUser(name: string, email: string) {
        await pool.query(
            `INSERT INTO users (nome, email, saldo) 
             VALUES ($1, $2, $3) RETURNING *`,
            [name, email, 50]
        );

        return;
    };

    async getUserById(id: number) {
        const user = await pool.query(
            `SELECT * 
             FROM users
             WHERE id = $1`,
             [id]
        );

        return user.rows[0];
    };

    async updateUsersBalance(from_user: number, to_user: number, valor: number) {
                await pool.query(
            `UPDATE users 
             SET saldo = saldo - $2
             WHERE id = $1 RETURNING *`,
            [from_user, valor]
        );

        await pool.query(
            `UPDATE users 
             SET saldo = saldo + $2
             WHERE id = $1 RETURNING *`,
            [to_user, valor]
        );

    }
};


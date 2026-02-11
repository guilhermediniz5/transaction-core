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
};


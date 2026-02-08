import { pool } from "../config/pool";

export async function createUser(name: string, email: string) {
    await pool.query(
        'INSERT INTO users (nome, email, saldo) VALUES ($1, $2, $3) RETURNING *',
        [name, email, 50]
    );

    return;
};
import { createUser } from "../models/usersModel";

export class UsersService {
    async createUser(name: string, email: string) {
        await createUser(name, email);
        return;
    }
};
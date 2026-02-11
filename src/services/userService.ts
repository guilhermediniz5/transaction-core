import { UsersModel } from "../models/usersModel";

export class UsersService {
    async createUser(name: string, email: string) {
        await new UsersModel().createUser(name, email);
        return;
    }

    async getUserById(id: number) {
        const user = await new UsersModel().getUserById(id);
        return user;
    }
};
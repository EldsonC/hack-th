import { Users } from "../entities/users";
import { AppDataSource } from "../database";

interface UserRequest {
    username: string;
    password: string;
}

export class CreateUserService {
    async createUser({
        username,
        password
    }:UserRequest): Promise<Users | Error> {
        const repository = AppDataSource.getRepository(Users);
        if (await repository.findOneBy({username: username})) {
            return new Error("User Already Exists!")
        }

        const users = repository.create({
            username,
            password
        })

        await repository.save(users)
        return users
    }
}
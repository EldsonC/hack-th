"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const users_1 = require("../entities/users");
const database_1 = require("../database");
class CreateUserService {
    async createUser({ username, password }) {
        const repository = database_1.AppDataSource.getRepository(users_1.Users);
        if (await repository.findOneBy({ username: username })) {
            return new Error("User Already Exists!");
        }
        const users = repository.create({
            username,
            password
        });
        await repository.save(users);
        return users;
    }
}
exports.CreateUserService = CreateUserService;

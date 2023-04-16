"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserService = void 0;
const users_1 = require("../entities/users");
const database_1 = require("../database");
class CreateUserService {
    createUser({ username, password }) {
        return __awaiter(this, void 0, void 0, function* () {
            const repository = database_1.AppDataSource.getRepository(users_1.Users);
            if (yield repository.findOneBy({ username: username })) {
                return new Error("User Already Exists!");
            }
            const users = repository.create({
                username,
                password
            });
            yield repository.save(users);
            return users;
        });
    }
}
exports.CreateUserService = CreateUserService;

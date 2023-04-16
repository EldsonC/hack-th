"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const CreateUser_1 = require("../services/CreateUser");
class CreateUserController {
    async create(req, res) {
        const { username, password } = req.body;
        const user = new CreateUser_1.CreateUserService();
        await user.createUser({
            username: username,
            password: password
        }).then(() => {
            console.log("==== | USER GET | ====");
            res.send("==== | USER GET | ====")
        })
            .catch((err) => {
            console.log("==== | USER NOT GET | ====");
            res.send("==== | USER NOT GET | ====")
        });
    }
}
exports.CreateUserController = CreateUserController;

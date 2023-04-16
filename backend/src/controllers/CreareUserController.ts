import { Request, Response } from "express"
import { CreateUserService } from "../services/CreateUser";

export class CreateUserController {
    async create(req: Request, res: Response) {
        const {
            username,
            password
        } = req.body

        const user = new CreateUserService();

        await user.createUser({
            username: username,
            password: password
        }).then(() => {
            console.log("==== | USER GET | ====")
        })
        .catch((err) => {
            console.log("==== | USER NOT GET | ====")
        })
    }
}
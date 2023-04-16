import { CreateUserController } from "../controllers/CreareUserController";

import Router from "express"

const router = Router()

router.post("/getdata", new CreateUserController().create)

export { router }
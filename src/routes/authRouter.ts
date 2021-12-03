import { Router } from "express"
import { AuthController } from "../controllers/authController"

const router = Router()
const controller = new AuthController()

router.post("/register", controller.register)

export {router as authRouter}
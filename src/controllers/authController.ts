import { Request, Response } from "express";
import { IUser } from "../types/user";
import { UserModel } from "../models/user";

export class AuthController {

    async register(req: Request, res: Response): Promise<void> {

        try {
            const body: IUser = req.body as IUser
            const user = new UserModel({
                UserName: body.UserName,
                Email: body.Email,
                FirstName: body.FirstName,
                LastName: body.LastName,
                Password: body.Password,
                Confirmed: false
            })

            await user.save()

            res.status(225).json(user)

        } catch (error) {
            console.log(error)
        }

    }

}
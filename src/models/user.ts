import { model, Schema } from "mongoose";
import { IUser } from "../types/user";

const userSchem: Schema = new Schema<IUser>(
    {
        UserName: {
            type: Schema.Types.String,
            required: true
        },
        Email: {
            type: Schema.Types.String,
            required: true
        },
        FirstName: {
            type: Schema.Types.String,
            required: true
        },
        LastName: {
            type: Schema.Types.String,
            required: true
        },
        Password: {
            type: Schema.Types.String,
            required: true
        },
        Confirmed:{
            type: Schema.Types.Boolean,
            required: true,
            default: false
        },
        Photo: {
            type: Schema.Types.String,
            required: false,
        },
        LastActivity: {
            type: Schema.Types.Number,
            required: false
        }
    },
    {timestamps: true}
)

const userModel = model<IUser>("Users", userSchem)

export { userModel as UserModel }
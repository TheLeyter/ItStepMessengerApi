import { Document, SchemaTimestampsConfig } from "mongoose";

export interface IUser extends Document, SchemaTimestampsConfig {
    UserName: string
    Email: string
    FirstName: string
    LastName: string
    Password: string
    Confirmed: boolean
    Photo?: string
    LastActivity?: number
}
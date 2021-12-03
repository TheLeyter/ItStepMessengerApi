import express, { Express } from "express"
import mongoose from "mongoose"
import { AuthController } from "./controllers/authController"
import { authRouter } from "./routes/authRouter"

const app: Express = express()

const port = 5001

app.use(express.json())
app.use("/account", authRouter)

async function main() {
    try {
        await mongoose.connect("mongodb+srv://Admin:qwerty12345@messengerdb.zi6v6.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        app.listen(port, () => console.log(`Server started on ${port}`))
    } catch (error) {
        console.log(error)
    }

}

main()
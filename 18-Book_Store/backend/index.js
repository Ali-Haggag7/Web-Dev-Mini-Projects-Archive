import express, { request } from "express"
import { PORT, mongoDBURL } from "./config.js"
import cors from 'cors'
import mongoose from "mongoose"
import { Book } from "./models/bookModel.js"
import bookRoute from "./routes/bookRoute.js"

const app = express()

//middleware for parsing request body
app.use(express.json())

//middleware for handling CORS POLICY
app.use(cors())
// app.use(
//     cors({
//         origin: 'http://localhost:3000',
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// )

app.get('/', (req, res) => {
    console.log(req)
    return res.status(234).send("Welcome To MERN Stack Tutorial")
})

app.use('/books', bookRoute)

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`)
})

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log("App connected to database")
    })
    .catch((error) => {
        console.log(error)
    })
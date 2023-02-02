import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
// import { createBrowserRouter } from 'react-router-dom';
import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

// const corsOptions = {
//     origin: 'http://localhost:3000',
//     credentials: true,            //access-control-allow-credentials:true
//     optionSuccessStatus: 200
// }

// app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true })); //without it - cookies are not stored in Cookies/browser

app.use("/api/auth", authRoutes) //if I got to localhost:8801/api/posts and endopint in postRoutes ("/").
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

// app.get("/test", (req, res) => {
//     res.json("It works!")
// })
//browser sent req hey, server, on an /test bring what you have.
//all such routes will be sepated into different files in folder routes.

const PORT = process.env.PORT || 8801 //we use it, in case we deploy project

app.listen(PORT, () => {
    console.log(`Connected! Server started on PORT ${PORT}`)
})
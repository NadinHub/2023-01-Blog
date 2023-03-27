import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import multer from "multer"

import authRoutes from "./routes/auth.js"
import userRoutes from "./routes/users.js"
import postRoutes from "./routes/posts.js"

const app = express()

// We have different PORT for api and client, to solve CORS error we nee to use this:
const corsOptions = {
    origin: 'http://localhost:3001', //or it can be '*' //Origin from which we want the request to come
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: true, credentials: true })); //without it - cookies are not stored in Cookies/browser

app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)//if I got to localhost:8801/api/posts and endopint in postRoutes ("/").

//browser sent req hey, server, on an /test bring what you have.
//all such routes will be sepated into different files in folder routes.
//Uploading files from WRITE page
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now()+file.originalname)
    }
  })

const upload = multer({ storage }); //alternative: const upload = multer({ dest: './uploads/' });

app.post('/api/upload', upload.single('file'), function (req, res) {
    const file = req.file
    res.status(200).json(file.filename)
})
// req.file is the `file` file
// req.body will hold the text fields, if there were any
//'file' in Write.jsx is the same 'file here



const PORT = process.env.PORT || 8801 //we use it, in case we deploy project

app.listen(PORT, () => {
    console.log(`Connected! Server started on PORT ${PORT}`)
})
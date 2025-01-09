import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// import file 
// import troute from "./routes/text.route.js"
import router from "./routes/diary.route.js"






//routes declaration
// app.use('/api',troute)
app.use('/api',router)


// http://localhost:2200/api/pass


export { app }
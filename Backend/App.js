import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from 'cors';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { errorHandler } from "../Backend/middleWare/error.js";
import { authRouter } from "./Routers/AuthRouters.js"
import { userRouter } from "./Routers/UserRouters.js"
import { jobTypeRouter } from "./Routers/JobsTypeRouters.js";
import { jobsRouter } from "./Routers/JobsRouters.js";

const app = express();
dotenv.config();

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json({ limit: '5mb' }))
app.use(bodyParser.urlencoded({ limit: "5mb", extended: true }))
app.use(cookieParser())



// router
// app.get('/', (req, res) => {
//     res.send('hello from js')
// })
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', jobTypeRouter)
app.use('/api', jobsRouter)

// error middleware
app.use(errorHandler)



mongoose.connect(process.env.DATABASE).then(() => {
    console.log("connected to MongoDB")
}).catch((error) => {
    console.log(error)
})


const port = 8000 || 9000

app.listen(port, () => {
    console.log(`port running on port ${port}`)
})
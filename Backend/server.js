import 'dotenv/config'
import express from 'express'
import connectDB from './config/db.js';
import router from './routes/authRoute.js';
import cors from 'cors'
import errorController from './controller/error.controller.js';
import cookieParser from 'cookie-parser';
const app = express();
app.use(cors({
    origin:'http://localhost:5173',
    credentials:true
}))
app.use(cookieParser());
app.use(express.json())
app.use(express.urlencoded({extended:true}))
connectDB()
app.use('/api/v1/auth',router)
app.get("/",(req,res)=>{
    res.send("server is running")
})
const PORT_NO = 5000;
app.use(errorController)
app.listen(PORT_NO,()=>{
    console.log(`server is running in ${PORT_NO}`);
})
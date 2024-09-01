import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';

const app = express()

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);


const startAndconnectDB = async()=>{
    app.listen(4000, ()=>{
        console.log("Server started")
    })

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    }catch(err){
        console.log("Err in DB connection" , err)
    }
}

startAndconnectDB()
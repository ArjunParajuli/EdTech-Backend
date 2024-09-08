import express from 'express';
import 'dotenv/config';
import mongoose from 'mongoose';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import adminMiddleware from './middlewares/adminMiddleware.js';

const app = express()

app.use(express.json());
app.use("/admin", adminMiddleware, adminRouter);
app.use("/user", userRouter);

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode;
    res.status(statuscode).json({
        message: err.message
    })
})


const startAndconnectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
        app.listen(4000, ()=>{
            console.log("Server started")
        })
    }catch(err){
        console.log("Err in DB connection" , err)
    }
}

startAndconnectDB()
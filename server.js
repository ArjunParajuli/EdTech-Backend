import express from 'express';
import 'dotenv/config';
import adminRouter from './routes/adminRoutes.js';
import userRouter from './routes/userRoutes.js';
import courseRouter from './routes/courseRoutes.js';
import dbConnect from './db/index.js';

const app = express()

app.use(express.json());
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/course", courseRouter);

app.use((err, req, res, next)=>{
    const statuscode = err.statuscode || 500;
    console.log("In global catch! ", err.message)
    res.status(statuscode).json({
        msg: err.message || "An unexpected error occurred."
    })
})


const startAndconnectDB = async()=>{
    try{
        await dbConnect();
        app.listen(process.env.PORT || 4000, ()=>{
            console.log("Server started")
        })
    }catch(err){
        console.log("Err starting the server!" , err)
    }
}

startAndconnectDB()
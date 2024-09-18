import mongoose from 'mongoose';


const dbConnect = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB");
    }catch(err){
        console.log("Error connecting to DB", err.message)
    }
}

export default dbConnect
import mongoose from "mongoose";
import Admin from "../models/admin.js";


const adminSignUp = async(req, res) =>{
    const {username, password} = req.body;
    try{
        const admin = req.body;
        const createdAdmin = await Admin.create(admin);
        res.statusCode(200).json(createdAdmin)
    }catch(err){
        res.statusCode(401).json({msg: "Error occ!"})
    }
    
}

const adminGetAllCourses = async(req, res) =>{
  
}

const adminCreateCourse = async(req, res) =>{
    
}

export { adminSignUp, adminGetAllCourses, adminCreateCourse }
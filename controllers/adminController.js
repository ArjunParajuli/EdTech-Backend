import mongoose from "mongoose";
import Admin from "../models/admin.js";
import Course from "../models/course.js";


const adminSignUp = async(req, res) =>{
    const {username, password} = req.body;
    try{
        const foundAdmin = await Admin.findOne({username, password});
        if(foundAdmin){
            res.status(200).json(foundAdmin)
        }else{
            const error = new Error("Admin Not Found!");
            next(error)
        }
    }catch(err){
        res.status(401).json({msg: "Error occ!"})
    }  
}

const adminGetAllCourses = async(req, res) =>{
  
}

const adminCreateCourse = async(req, res) =>{
    try{
        // const {title, description, price, imageLink} = req.body;
        const course = await Course.create(req.body)
        res.status(201).json({msg: "Course Created!", courseId: course._id});
    }catch(err){
        res.status(500).json({msg: "Err occ!"})
    }
}

export { adminSignUp, adminGetAllCourses, adminCreateCourse }
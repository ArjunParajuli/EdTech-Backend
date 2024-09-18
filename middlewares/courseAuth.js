import User from "../models/user.js";
import Course from "../models/course.js";

export const courseAuth = async(req, res, next) =>{
    try{
        const userEmail = req.user.email;
        const user = await User.findOne({email: userEmail});
        // console.log(user);

        const { courseId } = req.params;
        const course = await Course.findById(courseId);
        // console.log(course)
        if(!course){
            const err = new Error("Course not found!");
            next(err);
        }  

        if(!user._id.equals(course.createdBy)){
            throw new Error("Not authorized to access!");
        }

        next();
    }catch(err){
        console.log("Auth catch")
        res.status(400).json({msg: err.message})
    }
}
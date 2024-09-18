import Course from "../models/course.js";
import User from "../models/user.js";


const purchaseCourse = async(req, res) =>{
    try{
        const {courseId} = req.params;

        const course = await Course.findById(courseId);
        console.log(course)

        if(!course){
            const err = new Error("Course not found!");
            next(err);
        }  

        const purchasingUser = await User.findOne({email: req.user.email});
        console.log(purchasingUser) 

        purchasingUser.purchasedCourses.push(courseId);
        await purchasingUser.save();

        course.enrolledUsers.push(purchasingUser._id);
        await course.save();

        res.status(204).json({msg: "Course Purchased!"})
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

const createCourse = async(req, res) =>{
    try{
        const ownerEmail = req.user.email;
        const courseOwner = await User.findOne({email: ownerEmail})
        // console.log(courseOwner)
        const newCourse = {...req.body}
        newCourse.createdBy = courseOwner._id;

        const savedCourse = await Course.create(newCourse);
        // console.log(savedCourse)

        courseOwner.createdCourses.push(savedCourse._id);
        await courseOwner.save();

        res.status(201).json(savedCourse)
    }catch(err){
        console.log("Err", err.message);
        res.status(400).json({msg: err.message})
    }
}

const updateCourse = async(req, res) =>{
    try{
        const {courseId} = req.params;
        const updatedCourse = await Course.findByIdAndUpdate(courseId, req.body);

        if (!updatedCourse) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.status(200).json(updatedCourse);

    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

const deleteCourse = async(req, res) =>{
    try{
        const {courseId} = req.params;
        const deletingCourse = await Course.findByIdAndDelete(courseId);

        if (!deletingCourse) {
            return res.status(404).json({ msg: "Course not found" });
        }

        res.status(200).json({msg: "Course Deleted", deletingCourse});

    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

const getAllCourses = async(req, res) =>{
    try{
        const courses = await Course.find();
        res.status(200).json(courses)
    }catch(err){
        res.status(400).json({msg: err.message})
    }
}

export {purchaseCourse, createCourse, updateCourse, deleteCourse, getAllCourses}
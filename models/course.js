import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String
})

const Course = mongoose.model("course", courseSchema)
export default Course
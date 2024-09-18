import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    enrolledUsers:[{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }]
  }, { timestamps: true });

const Course = mongoose.model("course", courseSchema)
export default Course
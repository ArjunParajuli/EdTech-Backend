import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    username: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    // Add other fields as needed
  }, { timestamps: true });

const Admin = mongoose.model("admin", adminSchema)
export default Admin;
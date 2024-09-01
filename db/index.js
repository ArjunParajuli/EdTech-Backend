import mongoose from 'mongoose';
const {Schema} = mongoose;

mongoose.connect(process.env.MONGO_URI)

const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    enrolledCourses: [{
        type: Schema.Types.ObjectId,
        ref: 'Course'
    }],
    isAdmin: {
        type: Boolean,
        default: false
    },
}, { timestamps: true });

const adminSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'superadmin'],
        default: 'admin',
    },
}, { timestamps: true });

const courseSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    instructor: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    content: [{
        type: String,
    }],
    studentsEnrolled: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
}, { timestamps: true });

// Models
const User = mongoose.model('User', userSchema);
const Admin = mongoose.model('Admin', adminSchema);
const Course = mongoose.model('Course', courseSchema);

export {User, Admin, Course}
import express from 'express';
const router = express.Router();
import { adminSignUp, adminGetAllCourses, adminCreateCourse  } from '../controllers/adminController.js';

router.post("/signup", adminSignUp);
router.get("/courses", adminGetAllCourses);
router.post("/courses", adminCreateCourse);

export default router
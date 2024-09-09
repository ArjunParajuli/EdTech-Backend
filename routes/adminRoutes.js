import express from 'express';
const router = express.Router();
import { adminSignUp, adminGetAllCourses, adminCreateCourse  } from '../controllers/adminController.js';
import adminMiddleware from '../middlewares/adminMiddleware.js';

router.post("/signin", adminSignUp);
router.get("/courses", adminMiddleware, adminGetAllCourses);
router.post("/courses", adminMiddleware, adminCreateCourse);

export default router
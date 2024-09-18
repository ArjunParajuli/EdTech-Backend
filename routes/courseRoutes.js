import express from 'express';
const router = express.Router();
import { createCourse, deleteCourse, getAllCourses, purchaseCourse, updateCourse } from '../controllers/courseController.js';
import authenticateUser from '../middlewares/authenticateUser.js';
import { courseAuth } from '../middlewares/courseAuth.js';

router.get("/purchaseCourse/:courseId", authenticateUser, purchaseCourse)
router.post("/createCourse", authenticateUser, createCourse)
router.patch("/updateCourse/:courseId", authenticateUser, courseAuth, updateCourse)
router.delete("/deleteCourse/:courseId", authenticateUser, courseAuth, deleteCourse)
router.get("/allCourses", getAllCourses);

export default router;
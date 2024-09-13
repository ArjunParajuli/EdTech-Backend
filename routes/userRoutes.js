import express from 'express';
const router = express.Router();

import { userSignUp, userSignIn } from '../controllers/userController.js';
import authenticateUser from '../middlewares/authenticateUser.js';

router.post('/signup', userSignUp, userSignIn)
router.post('/signin', authenticateUser, userSignIn)
export default router
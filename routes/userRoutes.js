import express from 'express';
const router = express.Router();

import { userSignUp, userSignIn } from '../controllers/userController.js';

router.post('/signup', userSignUp)
router.post('/signin', userSignIn)
export default router
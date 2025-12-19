import express from 'express'
import { loginController, registerController, authorization, getUserProfile } from '../controller/auth.controller.js';
const router = express.Router();
router.post('/register',registerController)
router.post('/login',loginController)
router.get('/admin/:id', authorization, getUserProfile);
export default router
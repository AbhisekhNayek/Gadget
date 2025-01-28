import express from 'express';
import { login } from '../controllers/login.controller.js';

const router = express.Router();

// Route to authenticate and get the JWT token
router.post('/login', login);

export default router;

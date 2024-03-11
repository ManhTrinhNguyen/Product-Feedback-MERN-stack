import express from 'express'
import cors from 'cors'
import 'dotenv/config'

import productFeedbackRouter from './Router/ProductFeedback/productFeedback.router.js';
import userRouter from './Router/User/user.router.js';

const app = express();



app.use(cors({
  origin: 'http://localhost:8000'
}));
app.use(express.json())

// Feedback Router
app.use('/', productFeedbackRouter);

// User Router
app.use('/user', userRouter);

export default app
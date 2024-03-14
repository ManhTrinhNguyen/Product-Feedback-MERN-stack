import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import helmet from 'helmet';

import productFeedbackRouter from './Router/ProductFeedback/productFeedback.router.js';
import userRouter from './Router/User/user.router.js';
import commentRouter from './Router/Comment/comment.router.js';
import repliesRouter from './Router/Replies/replies.router.js';

const app = express();

// use Helmet
app.use(helmet())

app.use(cors({
  origin: 'http://localhost:8000'
}));
app.use(express.json())

// User Router
app.use('/user', userRouter);

// Feedback Router
app.use('/', productFeedbackRouter);

// Comment Router
app.use('/', commentRouter);

// Replies Router 
app.use('/', repliesRouter);


export default app
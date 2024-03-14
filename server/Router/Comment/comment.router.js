import express from 'express'
import { httpCreateNewComment, httpDeleteNewComment } from './comment.controller.js';
import verifyToken from '../../Middlewares/verifyToken.js';

const commentRouter = express.Router();

commentRouter.post('/feedback/:feedbackId/comments', verifyToken, httpCreateNewComment);
commentRouter.delete('/feedback/:feedbackId/comments/:commentId', verifyToken, httpDeleteNewComment);

export default commentRouter;
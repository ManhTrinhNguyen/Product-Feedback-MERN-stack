import express from 'express'
import { httpCreateNewComment, httpDeleteNewComment } from './comment.controller.js';

const commentRouter = express.Router();

commentRouter.post('/feedback/:feedbackId/comments', httpCreateNewComment);
commentRouter.delete('/feedback/:feedbackId/comments/:commentId', httpDeleteNewComment);

export default commentRouter;
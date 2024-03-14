import express from 'express'
import { httpCreateNewReplies, httpDeleteReplies } from './replies.controller.js';
import verifyToken from '../../Middlewares/verifyToken.js';

const repliesRouter = express.Router();

repliesRouter.post('/feedback/:feedbackId/comments/:commentId/replies', verifyToken, httpCreateNewReplies);
repliesRouter.delete('/feedback/:feedbackId/comments/:commentId/replies/:repliesId', verifyToken, httpDeleteReplies)

export default repliesRouter;
import express from 'express'
import { httpCreateNewReplies, httpDeleteReplies } from './replies.controller.js';

const repliesRouter = express.Router();

repliesRouter.post('/feedback/:feedbackId/comments/:commentId/replies', httpCreateNewReplies);
repliesRouter.delete('/feedback/:feedbackId/comments/:commentId/replies/:repliesId', httpDeleteReplies)

export default repliesRouter
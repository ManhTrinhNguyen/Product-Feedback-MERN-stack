import express from 'express'
import { httpReplies } from './replies.controller.js';

const repliesRouter = express.Router();

repliesRouter.post('/feedback/:feedbackId/comments/:commentId/replies', httpReplies);

export default repliesRouter
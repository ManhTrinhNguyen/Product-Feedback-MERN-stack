import express from 'express'
import { httpCreateNewComment } from './comment.controller.js';

const commentRouter = express.Router();

commentRouter.post('/feedback/comment/:id', httpCreateNewComment)

export default commentRouter
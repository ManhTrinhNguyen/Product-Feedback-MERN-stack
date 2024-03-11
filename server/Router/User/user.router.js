import express from 'express'
import { httpSignUp, httpSignIn } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', httpSignUp);
userRouter.post('/signin', httpSignIn);


export default userRouter
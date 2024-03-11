import express from 'express'
import { httpSignIn } from './user.controller.js'

const userRouter = express.Router()

userRouter.post('/signup', httpSignIn)

export default userRouter
import express from 'express'
import { httpGetAllFeedBack } from './productFeedback.controller.js'

const productFeedbackRouter = express.Router()

productFeedbackRouter.get('/feedback', httpGetAllFeedBack)

export default productFeedbackRouter
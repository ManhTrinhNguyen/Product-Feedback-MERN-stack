import express from 'express'
import { httpGetAllFeedBack, httpCreateNewFeedback } from './productFeedback.controller.js'

const productFeedbackRouter = express.Router()

productFeedbackRouter.get('/feedback', httpGetAllFeedBack)
productFeedbackRouter.post('/feedback', httpCreateNewFeedback)

export default productFeedbackRouter
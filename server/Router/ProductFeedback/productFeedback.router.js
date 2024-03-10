import express from 'express'
import { httpGetAllFeedBack, httpCreateNewFeedback, httpUpdateFeedback, httpDeleteFeedback } from './productFeedback.controller.js'

const productFeedbackRouter = express.Router()

productFeedbackRouter.get('/feedback', httpGetAllFeedBack)
productFeedbackRouter.post('/feedback', httpCreateNewFeedback)
productFeedbackRouter.patch('/feedback/:id', httpUpdateFeedback)
productFeedbackRouter.delete('/feedback/:id', httpDeleteFeedback)

export default productFeedbackRouter
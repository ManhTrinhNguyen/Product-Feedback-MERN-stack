import express from 'express'
import { httpGetAllFeedBack, httpCreateNewFeedback, httpUpdateFeedback, httpDeleteFeedback } from './productFeedback.controller.js'
import verifyToken from '../../Middlewares/verifyToken.js'

const productFeedbackRouter = express.Router()

productFeedbackRouter.get('/feedback', httpGetAllFeedBack)
productFeedbackRouter.post('/feedback', verifyToken, httpCreateNewFeedback)
productFeedbackRouter.patch('/feedback/:id', httpUpdateFeedback)
productFeedbackRouter.delete('/feedback/:id', httpDeleteFeedback)




export default productFeedbackRouter
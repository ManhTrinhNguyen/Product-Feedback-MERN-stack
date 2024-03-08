import express from 'express'
import productFeedbackRouter from './Router/ProductFeedback/productFeedback.router.js';

const app = express();

app.use('/', productFeedbackRouter)

export default app
import express from 'express'
import cors from 'cors'

import productFeedbackRouter from './Router/ProductFeedback/productFeedback.router.js';

const app = express();

app.use(cors({
  origin: 'http://localhost:8000'
}));
app.use(express.json())

app.use('/', productFeedbackRouter)

export default app
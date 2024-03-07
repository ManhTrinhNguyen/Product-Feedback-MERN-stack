import http from 'http'
import app from './app.js';
import mongoose from 'mongoose';
import { ProductFeedback } from './Models/product-feedback-schema.js';

const PORT = 8000;

const MONGO_URL = 'mongodb+srv://product-feedback:Manhtrinh511998!@cluster0.4vqke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'

const server = http.createServer(app)

mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready')
});

mongoose.connection.on('error', err => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);

  server.listen(PORT, () => {
    console.log('Server listen on PORT: ' + PORT);
  })
}
startServer()




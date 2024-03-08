import { ProductFeedback } from "./productFeedbackSchema.js";
import data from '../data.json' assert {type: 'json'}

export default async function loadProductFeedbackToDB() {
  const productFeedBackArray = data.productRequests
  try {
    // Assuming 'data' contains an array of product feedback objects
    for (const feedback of productFeedBackArray) {
      // Update or insert product feedback document
      await ProductFeedback.updateOne(
        { id: feedback.id },
        feedback,
        { upsert: true }
      );
    }
    console.log('Product feedback data loaded successfully.');
  } catch (error) {
    console.error('Error loading product feedback data:', error);
  }
}

// Get all feedback

export async function getAllFeedback() {
  return await ProductFeedback.find({})
}

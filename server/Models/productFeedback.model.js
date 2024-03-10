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

// Create new Feedback 
export async function createNewFeedback(feedback) {
  const allFeedbackArray = await getAllFeedback()
  if (!allFeedbackArray) return;

  const allFeedbackLenght = allFeedbackArray.length

  // Assigan newFeedback

  const newFeedback = Object.assign(feedback, {
    status: 'suggestion',
    upvotes: 0
  });

  await ProductFeedback.findOneAndUpdate({
    id: allFeedbackLenght + 1
  }, newFeedback, {
    upsert: true
  })
}


// Find and update feedback 
export async function updateFeedback(id, feedbackUpdate) {
  await ProductFeedback.updateOne({
    id: id
  }, feedbackUpdate, {
    upsert: true
  })
};
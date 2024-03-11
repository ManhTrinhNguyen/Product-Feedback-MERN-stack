import { ProductFeedback } from "../productFeedbackModel/productFeedbackSchema.js";

export async function findProductFeedback(id) {
  await ProductFeedback.find(id)
}



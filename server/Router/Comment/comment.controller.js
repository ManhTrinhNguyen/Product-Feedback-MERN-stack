import { ProductFeedback } from "../../Models/productFeedbackModel/productFeedbackSchema.js";

export async function httpCreateNewComment(req, res) {
  const id = req.params.id 
  const { content } = req.body;

  const feedback = await ProductFeedback.findById(id)
  
  if (!feedback) {
    return res.status(400).json({
      error: 'There is no feedback found!'
    })
  }

  const newComment = {
    content,
    user: {}
  }

  feedback.comments.push(newComment);

  await feedback.save();

  res.status(201).json({ message: 'Comment added successfully', feedback });
}
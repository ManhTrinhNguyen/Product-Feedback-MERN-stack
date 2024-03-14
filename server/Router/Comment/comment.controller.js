import { ProductFeedback } from "../../Models/productFeedbackModel/productFeedbackSchema.js";

export async function httpCreateNewComment(req, res) {
  const id = req.params.feedbackId
  const { content } = req.body;

  const feedback = await ProductFeedback.findById(id)

  if (!feedback) {
    return res.status(400).json({
      error: 'Feedback not found!'
    })
  }

  const newCommentId = feedback.comments.length + 1
  const newComment = {
    content,
    id: newCommentId
  }

  if (!newComment.content) {
    return res.status(400).json({
      error: 'Need Content to add!'
    })
  }

  feedback.comments.push(newComment);

  await feedback.save();

  res.status(201).json({ message: 'Comment added successfully', feedback });
}


export async function httpDeleteNewComment(req, res) {
  const { commentId, feedbackId } = req.params;

  const feedback = await ProductFeedback.findById(feedbackId);

  if (!feedback) {
    return res.status(400).json({
      error: 'Feedback not found!'
    })
  };

  const index = feedback.comments.findIndex(comment => comment.id === Number(commentId));

  // If the comment is not found, return a 404 error
  if (index === -1) {
    return res.status(404).json({ error: 'Comment not found' });
  }       

  // Remove the comment from the post's comments array
  feedback.comments.splice(index, 1);

  await feedback.save();

  res.status(201).json({ message: 'Deleted successfully'});
}
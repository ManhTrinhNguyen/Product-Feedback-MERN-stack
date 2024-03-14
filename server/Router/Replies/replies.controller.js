import { ProductFeedback } from "../../Models/productFeedbackModel/productFeedbackSchema.js"

// Add Reply
export async function httpCreateNewReplies(req, res) {
  const { feedbackId, commentId } = req.params;
  const { content } = req.body;

  const feedback = await ProductFeedback.findById(feedbackId);

  if (!feedback) {
    return res.status(400).json({
      error: 'No Feedback Found!'
    })
  };
  const comment = feedback.comments.find(comment => comment.id === Number(commentId))

  if (!comment) {
    return res.status(400).json({
      error: 'No Comment Found!'
    })
  }

  const newReply = {
    content,
  };

  comment.replies.push(newReply)

  await feedback.save();

  res.status(201).json(newReply)
}

// Delete Reply
export async function httpDeleteReplies(req, res) {
  const { feedbackId, commentId, repliesId } = req.params;

  const feedback = await ProductFeedback.findById(feedbackId);

  if (!feedback) {
    return res.status(400).json({
      error: 'No Feedback Found!'
    })
  };

  const comment = feedback.comments.find(comment => comment.id === Number(commentId))

  if (!comment) {
    return res.status(400).json({
      error: 'No Comment Found!'
    })
  };

  const index = comment.replies.findIndex(reply => reply._id === repliesId);

  // Remove the comment from the post's comments array
  comment.replies.splice(index, 1);

  await feedback.save()

  res.status(200).json({
    message : 'Successfully delete replies'
  })
}
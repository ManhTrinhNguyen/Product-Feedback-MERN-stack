import { ProductFeedback } from "../../Models/productFeedbackModel/productFeedbackSchema.js"

export async function httpReplies(req, res) {
  const { feedbackId, commentId } = req.params;
  const { content } = req.body;

  const feedback = await ProductFeedback.findById(feedbackId);

  console.log(feedback)

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
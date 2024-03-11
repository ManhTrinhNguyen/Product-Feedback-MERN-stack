import { getAllFeedback, createNewFeedback, updateFeedback, deleteFeedback } from "../../Models/productFeedbackModel/productFeedback.model.js";

export async function httpGetAllFeedBack(req, res) {
  res.status(200).json(await getAllFeedback())
}

export async function httpCreateNewFeedback(req, res) {
  const feedback = req.body
  
  if (!feedback.title && !feedback.category && !feedback.description) {
    return res.status(400).json({
      error: 'Missing property required!'
    })
  };
  
  await createNewFeedback(feedback)
  return res.status(201).json(feedback)
};

export async function httpUpdateFeedback(req, res) {
  const feedbackId = Number(req.params.id)
  const feedbackUpdate = req.body 

  const updated = await updateFeedback(feedbackId, feedbackUpdate)

  res.status(200).json(updated)
}

export async function httpDeleteFeedback(req, res) {
  const feedbackId = Number(req.params.id)

  const deleted = await deleteFeedback(feedbackId)

  res.status(200).json(deleted)
}



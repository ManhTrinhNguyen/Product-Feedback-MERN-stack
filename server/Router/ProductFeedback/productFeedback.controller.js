import { getAllFeedback, createNewFeedback } from "../../Models/productFeedback.model.js";

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
}
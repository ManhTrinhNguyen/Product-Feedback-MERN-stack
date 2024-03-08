import { getAllFeedback } from "../../Models/productFeedback.model.js";

export async function httpGetAllFeedBack(req, res) {
  res.status(200).json(await getAllFeedback())
}
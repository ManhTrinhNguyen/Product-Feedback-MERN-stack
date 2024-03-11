import mongoose, { Schema } from "mongoose";

export const commentSchema = new Schema({
  id: Number,
  content: String,
  user: {
    image: String,
    name: String,
    username: String
  },
  replies: [
    {
      content: String,
      replyingTo: String,
      user: {
        image: String,
        name: String,
        username: String
      }
    }
  ]
})

export const productFeedbackSchema = new Schema({
  id: {
    type: Number, 
    required: true
  },
  title: {
    type: String, 
    required: true
  },
  category: {
    type: String,
    required: true
  },
  upvotes: {
    type: Number,
    required: true 
  },
  status: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  comments: [commentSchema]
})


export const ProductFeedback = mongoose.model('ProductFeedback', productFeedbackSchema)
export const Comment = mongoose.model('comment', commentSchema)
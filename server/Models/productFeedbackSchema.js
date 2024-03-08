import mongoose, { Schema } from "mongoose";

// {
//   "id": 1,
//   "title": "Add tags for solutions",
//   "category": "enhancement",
//   "upvotes": 112,
//   "status": "suggestion",
//   "description": "Easier to search for solutions based on a specific stack.",
//   "comments": [
//     {
//       "id": 1,
//       "content": "Awesome idea! Trying to find framework-specific projects within the hubs can be tedious",
//       "user": {
//         "image": "./assets/user-images/image-suzanne.jpg",
//         "name": "Suzanne Chang",
//         "username": "upbeat1811"
//       }
//     },


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
    type: String, 
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
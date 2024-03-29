import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: String,
  name: String
});

export const User = mongoose.model('User', userSchema)

import { User } from "../../Models/user/userSchema.js";
import bcrypt from 'bcrypt'

export async function httpSignIn(req, res) {
  const { username, password } = req.body;
  console.log(password)
  const existingUser = await User.findOne({ username });
  if (existingUser) {
    res.status(400).json({
      error: 'User already exists'
    })
  };

  // Hash the password 
  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({ username, password: hashedPassword });
  await newUser.save()
  res.status(201).json({ message: 'User created successfully' });
}
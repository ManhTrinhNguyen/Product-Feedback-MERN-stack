import { User } from "../../Models/user/userSchema.js";
import bcrypt from 'bcrypt'
import jwt from "jsonwebtoken";

export async function httpSignUp(req, res) {
  const { username, password } = req.body;
 
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

export async function httpSignIn(req, res) {
  const { username, password } = req.body;
  const secretKey = process.env.JWT_SECRET_KEY;

  const existingUser = await User.findOne({ username });
  if (!existingUser) {
    res.status(400).json({
      error: 'There is no user on this username'
    });
  }

  // Check if password correct 
  const isPasswordValid = await bcrypt.compare(password, existingUser.password)
  if (!isPasswordValid) {
    return res.status(401).json({
      error: 'Invalid password'
    })
  };

  const token = jwt.sign({ userId: existingUser._id }, secretKey, { expiresIn: '1h' });
  res.status(200).json({ token })
}

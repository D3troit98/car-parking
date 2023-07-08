import { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";
import { MongoError } from "mongodb";
import { v4 as uuidv4 } from 'uuid';
import { genSaltSync, hashSync } from "bcrypt-ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { fullName, email, password } = req.body;

      await db.connectDB();

      // Check if user already exists
      const existingUser = await User.findOne({ email:email.toLowerCase() });
      if (existingUser) {
        return res.status(200).json({ message: "User already exists" });
      }
    

      // Hash the password
      const salt = genSaltSync(10);
      const hashedPassword = hashSync(password.toLowerCase(),salt);

      // Create a new user
      const newUser = new User({
        _id: uuidv4(),
        _type: "user",
        userName: fullName,
        image: "https://gravatar.com/avatar/01630e133cbafea0e93bcbcbf8e14e8b?d=mm&r=pg&s=200",
        email: email,
        password: hashedPassword,
      });

      // Save the user to the database
      await newUser.save();

      return res.status(200).json({ user: newUser });
    } catch (error) {
      if (error instanceof MongoError) {
        // Handle MongoDB related errors
        return res.status(500).json({ error: "MongoDB error" });
      } else {
        // Handle other errors
        console.log(error);
        return res.status(500).json({ error: error || "Server error" });
      }
    }
  } else {
    return res.status(405).end(); // Method Not Allowed
  }
}

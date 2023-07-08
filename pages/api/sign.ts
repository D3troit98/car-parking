import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";
import { MongoError } from "mongodb";
import { compareSync } from "bcrypt-ts";
import { genSaltSync, hashSync } from "bcrypt-ts";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const { email, password } = req.body;

      await db.connectDB();

      const existingUser = await User.findOne({ email:email.toLowerCase() });

      // Check if user exists
      if (!existingUser) {
        return res.status(200).json({ message: "Invalid email" });
      }

      // Check if password matches
      const salt = genSaltSync(10);
const hash = hashSync(password.toLowerCase(), salt);
console.log("hash",hash)
console.log("existing",existingUser.password)

      const isPasswordMatch =compareSync(password.toLowerCase(), existingUser.password);
    
      if (!isPasswordMatch) {
        return res.status(200).json({ message: "Invalid password" });
      }

      // console.log("User exists", existingUser);
      existingUser.loggedIn = (existingUser.loggedIn || 0) + 1;
      await existingUser.save();

      return res.status(200).json({ user: existingUser });
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

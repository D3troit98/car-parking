import type { NextApiRequest, NextApiResponse } from "next";
import { MongoError } from "mongodb";
import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";
const ITEMS_PER_PAGE = 4; // 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
        const user = req.body;
        const { _id } = user;
        await db.connectDB();
    
  const existingUser = await User.findOne({ _id });

  if (existingUser) {
    console.log("User exists", existingUser);
    existingUser.loggedIn = (existingUser.loggedIn || 0) + 1;
    await existingUser.save();
  } else {
    console.log("user does not exist")
    const newUser = new User(user);
    await newUser.save();
  }

  res.status(200).json("Login success");
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
   

  }
  if (req.method === "GET") {
    try {
      await db.connectDB();

      const { page } = req.query;
      const pageNumber = parseInt(page as string) || 1;
      const skip = (pageNumber - 1) * ITEMS_PER_PAGE;

      const totalUsersCount = await User.countDocuments();
      const totalPages = Math.ceil(totalUsersCount / ITEMS_PER_PAGE);

      const users = await User.find().skip(skip).limit(ITEMS_PER_PAGE);

      res.status(200).json({ users, totalPages });
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
  }
}

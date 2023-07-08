import type { NextApiRequest, NextApiResponse } from "next";

import db from "@/utils/dbConnection";
import User from "@/utils/models/userSchema";
import { MongoError } from "mongodb";

const ITEMS_PER_PAGE = 4; // 
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
){

     if (req.method === "DELETE") {
        const { id } = req.query;
      console.log(id)
        try {
          await db.connectDB();
    
          await User.findByIdAndDelete(id);
          res.status(200).json({ message: "User deleted successfully" });
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
        res.status(405).json({ error: "Method not allowed" });
      }
}


// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/utils/dbConnection";
import type { NextApiRequest, NextApiResponse } from "next";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import User from "@/utils/models/userSchema";
import { MongoError } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      await db.connectDB();
   
      const user = await User.findById(id)
     
      const parkingHistories = await ParkingHistory.find(
        { email: user.email },
        { checkedoff: 1 }
      );

      let hasReservation = false;
      for (const history of parkingHistories) {
        if (!history.checkedoff) {
          hasReservation = true;
          break;
        }
      }

      res.status(200).json({ hasReservation });
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

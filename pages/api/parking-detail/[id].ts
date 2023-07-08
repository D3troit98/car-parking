// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/utils/dbConnection";
import type { NextApiRequest, NextApiResponse } from "next";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import { MongoError } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const { id } = req.query;
      await db.connectDB();

      await ParkingSpot.findOne();
      const historyDetail = await ParkingHistory.findById(id).populate(
        "parkingSpot"
      );
        console.log(historyDetail)
      res.status(200).json({ parkingHistory: historyDetail });
    }catch (error) {
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

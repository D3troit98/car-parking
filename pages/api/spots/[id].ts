// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/utils/dbConnection";
import type { NextApiRequest, NextApiResponse } from "next";
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

      const parkingSpot =  await ParkingSpot.findById(id); 
      res.status(200).json({ parkingSpot: parkingSpot });
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

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import { MongoError } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {    
    try {
      await db.connectDB();
      
      const parkingSpots = await ParkingSpot.find()
        .select("available");

      let availableCount = 0;
      let occupiedCount = 0;

      for (const spot of parkingSpots) {
        if (spot.available) {
          availableCount++;
        } else {
          occupiedCount++;
        }
      }

      const occupancyData = [availableCount, occupiedCount];
      const labels = ["Available", "Occupied"];
      
      res.status(200).json({ occupancyData, labels });
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

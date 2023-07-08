// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import {MongoError} from 'mongodb'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await db.connectDB();

      const parkingSpot = await ParkingSpot.findOne({ available: true })
        .select("-image")
        .sort({ updatedAt: -1 });

      if (!parkingSpot) {
        return res.status(200).json({ message: "No available parking spot found" });
      }
      res.status(200).json({ parkingSpot });
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

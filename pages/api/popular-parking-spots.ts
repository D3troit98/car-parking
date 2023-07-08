// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoError } from "mongodb";
import db from "@/utils/dbConnection";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") { 
    try {
        await db.connectDB();
        const popularSpots = await ParkingHistory.aggregate([
          {
            $group: {
              _id: "$parkingSpot",
              count: { $sum: 1 },
            },
          },
          {
            $sort: { count: -1 },
          },
          {
            $limit: 5, // Adjust the limit as needed
          },
        ]);
    
        const parkingSpotIds = popularSpots.map((spot:any) => spot._id);
        const counts = popularSpots.map((spot) => spot.count);
        const parkingSpots = await ParkingSpot.find({
          _id: { $in: parkingSpotIds },
        }).select("name");
        const parkingSpotNames = parkingSpots.map((spot) => spot.name);
    
        res.status(200).json({ parkingSpots: parkingSpotNames, counts });
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

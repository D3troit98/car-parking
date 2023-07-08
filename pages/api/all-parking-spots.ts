// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import { MongoError } from "mongodb";
export const config = {
  api: {
    bodyParser: {
      sizeLimit: '4mb' // Set desired value here
    }
  }
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {   
    try {
        await db.connectDB();

         // Pagination parameters
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 3;
      const skip = (page - 1) * limit;
        // Retrieve paginated parking spots
      const parkingSpots = await ParkingSpot.find()
      .skip(skip)
      .limit(limit);

      // Calculate the total number of parking spots
      const totalParkingSpots = await ParkingSpot.countDocuments();

       // Calculate the total number of pages
       const totalPages = Math.ceil(totalParkingSpots / limit);
    res.status(200).json({ parkingSpots,totalPages});
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

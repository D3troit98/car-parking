// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import { MongoError } from "mongodb";

const ITEMS_PER_PAGE = 4; // Set the desired number of items per page

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      await db.connectDB();
      const page = req.query.page ? Number(req.query.page) : 1;
      const skip = (page - 1) * ITEMS_PER_PAGE;
      const parkingSpot = await ParkingSpot.findOne()
      const parkingHistories = await ParkingHistory.find()
      .populate({
        path: "parkingSpot",
        select: "-image", // Exclude the 'image' field
      })
        .skip(skip)
        .limit(ITEMS_PER_PAGE);

      res.status(200).json({ parkingHistories });
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

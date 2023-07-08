// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import { MongoError } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      await db.connectDB();

      const parkingHistories = await ParkingHistory.find()
        .select("checkInDate checkInTime")
        .sort("timestamps");

      const checkInDates = [];
      const checkInTimes = [];

      for (const entry of parkingHistories) {
        checkInDates.push(entry.checkInDate);
        checkInTimes.push(entry.checkInTime);
      }

      res.status(200).json({ checkInDates, checkInTimes });
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

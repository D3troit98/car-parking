// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import { MongoError } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {    

    try {
        const {
            parkingId,
            selectedSpot,
            checkInDate,
            checkInTime,
            vehicleDetails,
            email,
            userName,
          } = req.body;

           // Check if the parking spot is available
console.log(req.body)
    await db.connectDB();
    const parkingSpot = await ParkingSpot.findById(parkingId);
    if (!parkingSpot || !parkingSpot.available) {
     res.status(405).json({ message: "Parking spot not available" });
    }

    const parkingHistory = new ParkingHistory({
        parkingSpot: parkingSpot,
        checkInDate,
        checkInTime,
        licensePlate: vehicleDetails,
        email,
        userName,
      });
  
      // Save the parking history record
      await parkingHistory.save();

      // Update the parking spot availability to false
      if(parkingSpot){
        parkingSpot.available = false;
        await parkingSpot.save();
      }
   
    res.status(200).json({ parkingHistory: parkingHistory });

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

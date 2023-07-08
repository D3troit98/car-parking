// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "@/utils/dbConnection";
import type { NextApiRequest, NextApiResponse } from "next";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
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
      
      // console.log(user)
      const parkingHistories = await ParkingHistory.find({ email:user.email })
        .populate({
          path: "parkingSpot",
          select: "-image", // Exclude the 'image' field
        });
        // console.log(parkingHistories)
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
  }else if(req.method === "PUT")
  {
    try {
      const {id} = req.query
     
      await db.connectDB()

      //find the parking history by ID and update the 'checkedOff' field
      const updatedParkingHistory = await ParkingHistory.findByIdAndUpdate({_id:id},
        {
          checkedoff:true
        }
          )
      
       // Find the parking spot by its ID and update the availability
       if(updatedParkingHistory)
       {
      
        const updatedParkingSpot = await ParkingSpot.findByIdAndUpdate(
          updatedParkingHistory.parkingSpot,
          { available: true },
        );
       }

      res.status(200).json({updatedParkingHistory})
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
  }else{
    res.status(405).json({error:'Method Not Allowed'})
  }
}

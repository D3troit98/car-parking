import type { NextApiRequest, NextApiResponse } from "next";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import { MongoError } from "mongodb";

export const config = {
    api: {
      bodyParser: {
        sizeLimit: '10mb' // Set desired value here
      }
    }
  };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {

      // Access the form data from req.body
      const { name, location, price,image } = req.body;

      await db.connectDB();
        // Validate the received data here if necessary

        const parkingSpotData =new ParkingSpot({
          name:name,
          available: true, // Set the initial availability as needed
          image :image,
          location : location,
          price: Number(price),
        });
  
         await parkingSpotData.save();
  
        res.status(201).json({ message:"Succesfully updated parkingSpot"  });
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
  
 else if(req.method == "GET")
  {
    try {
        await db.connectDB();
    const parkingSpots = await ParkingSpot.find({ available: true })
        .select("-image")
        .sort({ updatedAt: -1 });

       res.status(200).json({ parkingSpots });
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
  }else if (req.method === "DELETE"){
    try { 
      await db.connectDB()
      const {id} = req.query

      //find the parking spot by ID and delete it
      await ParkingSpot.findByIdAndDelete(id)
      res.status(200).json({message:"Parking spot deleted succesfuly"})
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
    res.status(405).json({error: 'Method Not Allowed'})
  }
}

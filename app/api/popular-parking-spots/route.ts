import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
export async function GET(request: Request, context: any) {
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

    const parkingSpotIds = popularSpots.map((spot) => spot._id);
    const counts = popularSpots.map((spot) => spot.count);
    const parkingSpots = await ParkingSpot.find({
      _id: { $in: parkingSpotIds },
    }).select("name");
    const parkingSpotNames = parkingSpots.map((spot) => spot.name);

    return NextResponse.json({ parkingSpots: parkingSpotNames, counts });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}

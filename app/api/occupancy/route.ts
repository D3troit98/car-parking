import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
export async function GET(request: Request, context: any) {
  try {
    await db.connectDB();
    const parkingSpots = await ParkingSpot.find();
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

    return NextResponse.json({ occupancyData, labels });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}

import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";

export async function GET() {
  try {
    await db.connectDB();
    const parkingSpot = await ParkingSpot.findOne({ available: true }).sort({
      // Add your sorting criteria here
      // For example, { date: 1 } to sort by ascending date
      updatedAt: -1,
    });
    if (!parkingSpot) {
      return NextResponse.json({ message: "No available parking spot found" });
    }

    return NextResponse.json({ parkingSpot });
  } catch (error) {
    return NextResponse.json({ error: "Server error" });
  }
}

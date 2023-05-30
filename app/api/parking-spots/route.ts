import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";

export async function GET() {
  try {
    await db.connectDB();
    const parkingSpots = await ParkingSpot.find({ available: true });

    return NextResponse.json({ parkingSpots });
  } catch (error) {
    return NextResponse.json({ error: "Server error" });
  }
}

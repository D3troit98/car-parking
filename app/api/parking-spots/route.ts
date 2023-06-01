import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";

export async function GET() {
  try {
    console.log("pppp");
    await db.connectDB();
    const parkingSpots = await ParkingSpot.find({ available: true });
    console.log("here");
    console.log(parkingSpots);
    return NextResponse.json({ parkingSpots });
  } catch (error) {
    return NextResponse.json({ error: "Server error" });
  }
}

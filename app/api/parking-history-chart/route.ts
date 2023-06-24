import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingHistory from "@/utils/models/parkingHisotySchema";
export async function GET(request: Request, context: any) {
  try {
    await db.connectDB();
    const parkingHistories = await ParkingHistory.find().sort("timestamps");
    const checkInDates = [];
    const checkInTimes = [];

    for (const entry of parkingHistories) {
      checkInDates.push(entry.checkInDate);
      checkInTimes.push(entry.checkInTime);
    }

    return NextResponse.json({ checkInDates, checkInTimes });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}

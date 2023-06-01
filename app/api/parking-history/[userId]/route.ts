import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";

import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
export async function GET(request: Request, context: any) {
  try {
    console.log(context); //{ params: { userId: 'duruakuebuka@gmail.com' } }
    const { userId } = context.params;
    await db.connectDB();
    const parkingSpots = await ParkingSpot.findOne();
    const parkingHistories = await ParkingHistory.find({
      email: userId,
    }).populate("parkingSpot");
    return NextResponse.json({ parkingHistories });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}


export async function PUT(request: Request, context: any) {
  try {
    console.log(context); //{ params: { id: 'vfhrg456454' } }
    const { userId } = context.params;

    const body = await request.json();

    await db.connectDB();
    // Find the parking history document by its ID and update the checkedOff property
    const updatedParkingHistory = await ParkingHistory.findByIdAndUpdate(
      userId,
      { checkedoff: body.checkedoff },
      { new: true }
    );
    return NextResponse.json({ updatedParkingHistory });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}

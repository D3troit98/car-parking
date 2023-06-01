import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";

import ParkingHistory from "@/utils/models/parkingHisotySchema";
import ParkingSpot from "@/utils/models/parkingSpotSchema";

export async function GET(request: Request, context: any) {
  try {
    // console.log(context); // { params: { id: 'objectid' } }
    const { id } = context.params;
    await db.connectDB();
    await ParkingSpot.findOne();
    const historyDetail = await ParkingHistory.findById(id).populate(
      "parkingSpot"
    );
    return NextResponse.json({ parkingHistory: historyDetail });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Server error" });
  }
}

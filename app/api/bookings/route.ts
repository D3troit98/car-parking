import { NextResponse } from "next/server";
import db from "@/utils/dbConnection";
import ParkingSpot from "@/utils/models/parkingSpotSchema";
import ParkingHistory from "@/utils/models/parkingHisotySchema";


export async function POST(request: Request) {
  try {
    const res = await request.json();

    const {
      parkingId,
      selectedSpot,
      checkInDate,
      checkInTime,
      vehicleDetails,
      email,
      userName,
    } = res;
    // Check if the parking spot is available

    await db.connectDB();
    const parkingSpot = await ParkingSpot.findById(parkingId);
    if (!parkingSpot || !parkingSpot.available) {
      return NextResponse.json({ message: "Parking spot not available" });
    }

    const parkingHistory = new ParkingHistory({
      parkingSpot: parkingSpot,
      checkInDate,
      checkInTime,
      licensePlate: vehicleDetails,
      email,
      userName,
    });

    // Save the parking history record
    await parkingHistory.save();

    // Update the parking spot availability to false
    parkingSpot.available = false;
    await parkingSpot.save();

    return NextResponse.json({ parkingHistory });
  } catch (error) {
    // Handle any errors that occur during the booking process
    console.log(error);
    return new Response("Method Not allowed", {
      status: 405,
    });
  }
}

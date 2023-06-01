"use client";
import BookingPage from "@/components/BookingPage";
import axios from "axios";
import { BASE_URL } from "@/utils";
import { IParkingSpot } from "@/types";
import { useEffect, useState } from "react";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

export default async function Page() {
  const [parkingSpots, setParkingSpots] = useState<IParkingSpot[]>([]);
  useEffect(() => {
    async function getParkingSpots() {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/parking-spots`);

        setParkingSpots(data?.parkingSpots);
      } catch (error) {
        // This will activate the closest `error.js` Error Boundary
        console.log(error);
        throw new Error("Failed to fetch data");
      }
    }
    getParkingSpots();
  }, []);

  return (
    <>
      <BookingPage parkingSpots={parkingSpots} />
    </>
  );
}

import BookingPage from "@/components/BookingPage";
import axios from "axios";
import { BASE_URL } from "@/utils";
import { IParkingSpot } from "@/types";
// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL

async function getParkingSpots() {
  try {
    const { data } = await axios.get(`${BASE_URL}/api/parking-spots`);
    // console.log("data", data);
    return data.parkingSpots;
  } catch (error) {
    // This will activate the closest `error.js` Error Boundary
    console.log(error);
    throw new Error("Failed to fetch data");
  }
}
export default async function Page() {
  const parkingSpots = await getParkingSpots();
  return (
    <>
      <BookingPage parkingSpots={parkingSpots} />
    </>
  );
}


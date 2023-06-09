import React, { useEffect,useState } from "react";
import Link from "next/link";
import useAuthStore from "@/store/authStore";
import { BiCheckCircle } from "react-icons/bi";
import { FiArrowLeft } from "react-icons/fi";
import Confetti from "react-confetti";
import QRCode from "react-qr-code";
import Loading from "@/components/Loading";
import moment from "moment";
import { IUser } from "@/types";
import NoUserProfileComponent from "@/components/NoUserProfileComponent";
const SuccessPage = () => {
  const bookingData = useAuthStore((state: any) => state.bookingData);
  const [filteredBookingData, setFilteredBookingData] = useState<any>(null);
  console.log(bookingData)
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
useEffect(()=>{
  
  if (bookingData) {
    // Create a shallow copy of the bookingData object
    const filteredData = { ...bookingData };
    
    // Remove the image field
    delete filteredData?.parkingHistory?.parkingSpot.image;

    // Update the state with the filtered data
    setFilteredBookingData(filteredData);
  }
},[bookingData])
  if (!userProfile) {
    return <NoUserProfileComponent />;
  }
  if (!bookingData.parkingHistory || !filteredBookingData) {
    return <Loading />; // or any loading state you prefer
  }

  return (
    <div className="py-6 md:px-6 px-3 bg-black flex flex-col items-center justify-center">
      <div className="flex items-center justify-center mb-6 gap-3">
        <div className="bg-[#FECB21] w-9 h-9 rounded-full flex items-center justify-center">
          <BiCheckCircle className="text-white text-3xl" />
        </div>
        <h1 className="text-white text-3xl font-poopins font-bold">
          Booking Successful!
        </h1>
      </div>

      {/* Display the booking details and barcode here */}

      <div className="bg-white rounded-lg p-6 mb-6">
       {filteredBookingData?.parkingHistory && <QRCode value={JSON.stringify(filteredBookingData?.parkingHistory)} />}
      </div>

      {/* Show booking details */}
      <div className="bg-white rounded-lg p-6 mb-6 text-gray-700">
        <h2 className="text-2xl font-poopins font-bold mb-4">
          Booking Details:
        </h2>
        <p className="font-poopins">
          <span className="font-bold">Parking Spot:</span>{" "}
          {filteredBookingData?.parkingHistory?.parkingSpot.name}
        </p>
        <p className="font-poopins">
          <span className="font-bold">Parking ID:</span>{" "}
          {filteredBookingData?.parkingHistory?._id}
        </p>
        <p className="font-poopins">
          <span className="font-bold">Check-in Date:</span>{" "}
          {moment(filteredBookingData?.parkingHistory?.checkInDate).format(
            "MMMM DD, YYYY"
          )}
        </p>
        <p className="font-poopins">
          <span className="font-bold">Check-in Time:</span>{" "}
          {moment(filteredBookingData?.parkingHistory?.checkInTime, "HH:mm").format(
            "hh:mm A"
          )}
        </p>
        <p className="font-poopins">
          <span className="font-bold">License Plate:</span>{" "}
          {filteredBookingData?.parkingHistory?.licensePlate}
        </p>
        <p className="font-poopins">
          <span className="font-bold">Email:</span>{" "}
          {filteredBookingData?.parkingHistory?.email}
        </p>
        <p className="font-poopins">
          <span className="font-bold">User Name:</span>{" "}
          {filteredBookingData?.parkingHistory?.userName}
        </p>
      </div>

      {/* Information message */}
      {/* <p className="text-white text-lg font-poopins mb-6">
        The booking details have been emailed to you.
      </p> */}

      {/* Add confetti animation */}
      <Confetti
        width={window.innerWidth - 100}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={300}
        gravity={0.5}
        wind={0.1}
        colors={["#FECB21"]}
      />

<Link href={`/dashboard/${userProfile?._id}`}>
        <button className="bg-[#FECB21] hover:bg-yellow-600 text-black text-lg font-poopins font-bold py-3 px-6 rounded-lg flex items-center transition-colors duration-300">
          <FiArrowLeft className="mr-2" /> Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default SuccessPage;

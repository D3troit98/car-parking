"use client";
import React, { useEffect, useState } from "react";
import { BiCar } from "react-icons/bi";
import Image from "next/image";
import {
  BsArrowRight,
  BsCalendar,
  BsClock,
  BsInfoCircle,
} from "react-icons/bs";
import { FaExclamationCircle } from "react-icons/fa";
import BookingSide from "../assets/bookingside.jpg";
import axios from "axios";
import { StaticImageData } from "next/image";
import { useRouter } from "next/navigation";
import { IParkingSpot } from "@/types";
import { NextPage } from "next";
import { IUser } from "@/types";
import { toast } from "react-toastify";
import Loading from "./Loading";
import useAuthStore from "@/store/authStore";
const BookingPage = () => {
  const [selectedSpot, setSelectedSpot] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [parkingId, setParkingId] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState("");
  const [parkingSpotImg, setParkingSpotImg] = useState<
    StaticImageData | string
  >(BookingSide);
  const [parkingSpots, setParkingSpots] = useState<IParkingSpot[]>([]);
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);
 

  const setBookingData = useAuthStore((state: any) => state.setBookingData);
  const router = useRouter();
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  useEffect(() => {
    if (!userProfile) router.push("/");
  }, [userProfile]);
  useEffect(() => {
    async function getParkingSpots() {
      try {
        const { data } = await axios.get(`/api/parking-spots`);

        setParkingSpots(data?.parkingSpots);
      } catch (error) {
        // This will activate the closest `error.js` Error Boundary
        console.log(error);
        throw new Error("Failed to fetch data");
      }
    }
    getParkingSpots();
  }, []);
  useEffect(() => {
    if (selectedSpot) {
      const selectedParkingSpot = parkingSpots.find(
        (spot) => spot.name === selectedSpot
      );
      if (selectedParkingSpot) {
        setParkingSpotImg(selectedParkingSpot.image);
        setParkingId(selectedParkingSpot._id);
      } else {
        setParkingSpotImg(BookingSide);
        setParkingId("");
      }
    } else {
      setParkingSpotImg(BookingSide);
      setParkingId("");
    }
  }, [selectedSpot, parkingSpots]);
  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();

    // Perform booking validation and API call here
    // Simulating a booking request
    setIsBookingInProgress(true);

    try {
      const bookingData = {
        parkingId,
        selectedSpot,
        checkInDate,
        checkInTime,
        vehicleDetails,
        email: userProfile.email,
        userName: userProfile.userName,
      };
      const response = await axios.post("/api/bookings", bookingData);
      // Check if the booking was successful
      if (response.status === 200) {
        // Simulating successful booking
        setBookingData(response.data);
        setIsBookingInProgress(false);

        router.push("/success"); // Redirect to the success page
      } else {
        // Handle booking failure
        // Show an error message or take appropriate action
        // console.log(response.data.message);
        toast.error(response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setIsBookingInProgress(false);
      }
    } catch (error) {
      // Handle booking failure
      // Show an error message or take appropriate action
      setIsBookingInProgress(false);
      toast.error("An error occurred during booking. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }); // Display a generic error message using toast notification
    }
  };

  if (parkingSpots?.length < 1) {
    return (
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-gray-200 p-6 rounded-lg shadow-lg text-center">
          <FaExclamationCircle className="text-[#FECB21] text-5xl mb-4" />
          <p className="text-gray-800 text-lg font-semibold mb-2">
            All parking spots have been taken.
          </p>
          <p className="text-gray-600">
            Please try again later or check back for availability.
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-gradient-to-br from-[#171717] to-[#000000]  shadow-lg p-6">
      <h2 className="text-2xl font-bold text-white font-poppins mb-4 text-center">
        Book Now
      </h2>
      <div className="flex flex-col-reverse md:flex-row gap-4 items-center">
        <form
          onSubmit={handleBooking}
          className="flex flex-col w-full md:w-1/2"
        >
          <div className="flex items-center mb-4">
            <BiCar className="text-3xl text-white mr-2" />
            <label
              htmlFor="parkingSpot"
              className="font-poppins font-bold text-white"
            >
              Select Parking Spot:
            </label>
            <select
              id="parkingSpot"
              className="ml-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={selectedSpot}
              onChange={(e) => setSelectedSpot(e.target.value)}
              required
            >
              <option value="">-- Select Spot --</option>
              {parkingSpots?.map((parkingSpot) => (
                <option key={parkingSpot._id} value={parkingSpot.name}>
                  {parkingSpot.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-center mb-4">
            <BsCalendar className="text-3xl text-white mr-2" />
            <label
              htmlFor="checkInDate"
              className="font-poppins font-bold text-white"
            >
              Check-in Date:
            </label>
            <input
              type="date"
              id="checkInDate"
              className="ml-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <BsClock className="text-3xl text-white mr-2" />
            <label
              htmlFor="checkInTime"
              className="font-poppins font-bold text-white"
            >
              Check-in Time:
            </label>
            <input
              type="time"
              id="checkInTime"
              className="ml-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={checkInTime}
              onChange={(e) => setCheckInTime(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <BsInfoCircle className="text-3xl text-white mr-2" />
            <label
              htmlFor="licensePlate"
              className="font-poppins font-bold text-white"
            >
              License Plate:
            </label>
            <input
              type="text"
              id="licensePlate"
              className="ml-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={vehicleDetails}
              onChange={(e) => setVehicleDetails(e.target.value)}
              required
            />
          </div>

          {/* Add more input fields for vehicle details and contact information as needed */}

          <button
            type="submit"
            className={`flex items-center space-x-2 text-white bg-[#FECB21] rounded-lg px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 font-poppins w-32 md:w-40 gap-2 justify-center ${
              isBookingInProgress && "opacity-50 cursor-not-allowed"
            }`}
            disabled={isBookingInProgress}
          >
            {isBookingInProgress ? "Booking..." : "Book"}
            <BsArrowRight className="text-xl" />
          </button>
        </form>
        <div className="w-full md:w-1/3 border border-gray-600">
          <Image
            src={parkingSpotImg}
            alt="bookingSide"
            className="object-cover w-full md:h-80 h-auto rounded"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};



export default BookingPage;

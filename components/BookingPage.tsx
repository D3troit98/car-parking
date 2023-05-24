"use client";
import React, { useState } from "react";
import { BiCar } from "react-icons/bi";
import Image from "next/image";
import {
  BsArrowRight,
  BsCalendar,
  BsClock,
  BsInfoCircle,
  BsFillPersonFill,
} from "react-icons/bs";
import BookingSide from "../assets/bookingside.jpg";

import { useRouter } from "next/navigation";

const BookingPage = () => {
  const [selectedSpot, setSelectedSpot] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [vehicleDetails, setVehicleDetails] = useState({
    licensePlate: "",
    make: "",
    model: "",
    color: "",
  });
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [isBookingInProgress, setIsBookingInProgress] = useState(false);
  const router = useRouter();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();

    // Perform booking validation and API call here
    // Simulating a booking request
    setIsBookingInProgress(true);

    setTimeout(() => {
      // Simulating successful booking
      setIsBookingInProgress(false);
      router.push("/success"); // Redirect to the success page
    }, 2000);
  };

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
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
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
              value={vehicleDetails.licensePlate}
              onChange={(e) =>
                setVehicleDetails((prevState) => ({
                  ...prevState,
                  licensePlate: e.target.value,
                }))
              }
              required
            />
          </div>
          <div className="flex items-center mb-4">
            <BsFillPersonFill className="text-3xl text-white mr-2" />
            <label
              htmlFor="email"
              className="font-poppins font-bold text-white"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              className="ml-2 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none"
              value={contactInfo.email}
              onChange={(e) =>
                setContactInfo((prevState) => ({
                  ...prevState,
                  email: e.target.value,
                }))
              }
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
        <div className="w-full md:w-1/3">
          <Image
            src={BookingSide}
            alt="bookingSide"
            className="object-cover w-full md:h-80 h-auto rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default BookingPage;

import React, { useState } from "react";
import Image from "next/image";

import heroImage from "../assets/s1.jpg";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaExclamationCircle,
  FaTicketAlt,
} from "react-icons/fa";
import useAuthStore from "@/store/authStore";
import { IUser } from "@/types";
import { useRouter } from "next/navigation";
const Hero = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  const router = useRouter();
  const [bookingData, setBookingData] = useState({
    location: "DISCOVER NORWICH'S CITIES",
    date: "Select your preferred date",
    time: "Choose a convenient time slot",
    spot: "Secure your parking spot today",
  });

  const handleBooking = () => {
    // Implement the logic to handle the booking here

    if (!userProfile) {
      setModalVisible(true);
    } else {
      router.push("/booking");
    }
  };

  const handleAdminLogin = () => {
    router.push("/admin"); // Replace "/admin" with the actual admin page URL
  };

  return (
    <div className="relative flex flex-col justify-center items-stretch bg-black w-full">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="object-fill h-full w-full"
          placeholder="blur"
        />
      </div>

      <div className="relative bg-gradient-to-b from-black to-transparent">
        <div className="text-white pt-20 md:pt-24 flex flex-col justify-center items-center px-11 md:px-24">
          <div className="flex flex-col">
            <p className="text-base md:text-lg font-medium leading-4 mb-1">
              Welcome to
            </p>
            <p>
              <span className="text-[#FECB21] uppercase font-extrabold text-4xl md:text-5xl leading-10 font-poopins">
                August{" "}
              </span>
              <span className="text-[#FFFFFF] uppercase font-extrabold text-4xl leading-10 md:text-5xl font-poopins">
                Car Park
              </span>
            </p>
            <p className="md:w-96 text-base mt-2 py-4">
              August Car Park is your reliable car parking reservation ticketing
              app. Say goodbye to the hassle of searching for parking spots.
              With August Car Park, you can easily find and reserve a parking
              space in advance, ensuring a stress-free parking experience.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-lg mt-10 py-6 px-6 w-full">
            <h1 className="md:text-3xl text-2xl font-bold mb-4 capitalize font-poopins text-[#FECB21]">
              Book now
            </h1>
            <div className="flex flex-col justify-center items-center gap-3 flex-wrap">
              <div className="mb-4 md:flex flex-col justify-center items-center bg-black bg-opacity-10 rounded-lg p-4 shadow-md hidden ">
                <p className="text-white uppercase font-poopins font-bold text-sm md:text-base">
                  <FaMapMarkerAlt className="mb-2 text-[#FECB21]" />
                </p>
                <p className="text-white text-lg font-semibold">
                  {bookingData.location}
                </p>
              </div>
              
              <div className="flex justify-center items-center gap-2">
                <button
                  className="bg-[#FECB21] text-black capitalize py-2 px-3 font-bold font-poopins text-sm md:text-base"
                  onClick={handleBooking}
                >
                  Book now
                </button>
                <button
                  className="bg-[#FECB21] text-black capitalize py-2 px-3 font-bold font-poopins text-sm md:text-base"
                  onClick={handleAdminLogin}
                >
                  Admin Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-10 transition-all animate-pulse opacity-100">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaExclamationCircle className="text-[#FECB21] w-6 h-6 mr-2" />
              <p className="text-center">
                You need to log in or create an account
              </p>
            </div>
            <button
              className="bg-[#FECB21] text-black py-2 px-3 mt-4 font-bold"
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

"use client";
import React, { useEffect } from "react";
import BookNow from "./BookNow";
import ReservationStatus from "./ReservationStatus";
import ParkingLot from "./ParkingLot";
import ParkingHistory from "./ParkingHistory";
import Image from "next/image";
import DashImg from "../assets/dashImg.jpg";
import { FaEnvelope } from "react-icons/fa";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { IUser } from "@/types";
import NoUserProfileComponent from "./NoUserProfileComponent";
const Dashboard = () => {
  const router = useRouter();
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  if (!userProfile) {
    return <NoUserProfileComponent />;
  }
  return (
    <div className="bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000] text-white font-poppins">
      <div className="relative bg-gradient-to-b  from-black to-transparent">
        <Image
          src={DashImg}
          className="object-cover w-full h-40 sm:h-60 md:h-80 lg:h-96 xl:h-108 bg-gradient-to-b  from-black to-transparent"
          alt="dashboard image"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold font-poopins text-white mb-2 text-center">
            Welcome
          </h1>
          <p className="text-sm md:text-base font-poopins text-white text-center">
            Manage your car parking reservations
          </p>
          <div className="mt-4">
            <FaEnvelope className="text-2xl text-white" />
          </div>
        </div>
      </div>
      <main className="py-8 px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BookNow />
          <ReservationStatus />
          <ParkingLot />
        </div>
        <ParkingHistory />
      </main>
    </div>
  );
};

export default Dashboard;

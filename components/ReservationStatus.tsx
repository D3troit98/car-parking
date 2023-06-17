import React, { useState, useEffect } from "react";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { IUser } from "@/types";
import Loading from "./Loading";
const ReservationStatus = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasReservation, setHasReservation] = useState(false);
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  useEffect(() => {
    const fetchReservationStatus = async () => {
      try {
        const { data } = await axios.get(
          `/api/reservationStatus/${userProfile.email}`
        );
        setHasReservation(data.hasReservation);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };
    fetchReservationStatus();
  }, [userProfile]);
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold font-poopins mb-4 text-black">
          Reservation Status
        </h2>
        {isLoading ? (
          <div className="flex items-center">
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></div>
            <span className="text-yellow-500">Loading...</span>
          </div>
        ) : (
          <>
            {hasReservation ? (
              <div className="flex items-center text-green-500">
                <RiCheckboxCircleFill className="text-2xl mr-2" />
                <span>You have a reserved parking</span>
              </div>
            ) : (
              <div className="flex items-center text-red-500">
                <RiCloseCircleFill className="text-2xl mr-2 font-poopins" />
                <span>No reservation found.</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ReservationStatus;

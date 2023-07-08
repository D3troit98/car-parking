import React, { useState, useEffect } from "react";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { DashBoardPageProp, IUser } from "@/types";
import Loading from "./Loading";
const ReservationStatus = ({hasReservation}:{hasReservation:boolean}) => {

 
  return (
    <div data-cy="reservation-status" className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold font-poopins mb-4 text-black">
          Reservation Status
        </h2>
        {hasReservation == null|| undefined ? (
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

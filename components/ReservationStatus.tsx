import React from "react";
import { RiCheckboxCircleFill, RiCloseCircleFill } from "react-icons/ri";

const ReservationStatus = () => {
  const hasReservation = true; // Replace with actual reservation status

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold font-poopins mb-4 text-black">
          Reservation Status
        </h2>
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
      </div>
    </div>
  );
};

export default ReservationStatus;

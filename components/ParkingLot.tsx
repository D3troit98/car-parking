import React, { useState, useEffect } from "react";
import { FaCar, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import axios from "axios";
import { IParkingSpot } from "@/types";

const ParkingLot = ({parkingSpot}:{parkingSpot:IParkingSpot|null}) => {
  
  return (
    <div data-cy="parking-spot" className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4">
      <FaCar className="text-[#FECB21] text-4xl" />
      {parkingSpot ? (
        <>
          <h2 className="text-xl font-bold font-poopins text-black">
            {parkingSpot?.name}
          </h2>
          <div className="flex items-center space-x-2">
            <FaMapMarkerAlt className="text-gray-500" />
            <p className="text-gray-800 font-poopins">{parkingSpot.location}</p>
          </div>
          <div className="flex items-center space-x-2">
            <FaClock className="text-gray-500" />
            <p className="text-gray-800 font-poopins">Available 24/7</p>
          </div>
        </>
      ) : (
        <div className="flex items-center">
          <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-gray-900 mr-2"></div>
          <span className="text-yellow-500">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ParkingLot;

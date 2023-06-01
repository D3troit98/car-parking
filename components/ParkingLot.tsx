import React from "react";
import { FaCar, FaMapMarkerAlt, FaClock } from "react-icons/fa";

const ParkingLot = () => {
  const parkingSpot = {
    name: "Sydney CBD Parking",
    address: "123 George Street, Sydney, NSW 2000",
    availability: "Available 24/7",
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center space-y-4">
      <FaCar className="text-[#FECB21] text-4xl" />
      <h2 className="text-xl font-bold font-poopins text-black">
        {parkingSpot.name}
      </h2>
      <div className="flex items-center space-x-2">
        <FaMapMarkerAlt className="text-gray-500" />
        <p className="text-gray-800 font-poopins">{parkingSpot.address}</p>
      </div>
      <div className="flex items-center space-x-2">
        <FaClock className="text-gray-500" />
        <p className="text-gray-800 font-poopins">{parkingSpot.availability}</p>
      </div>
    </div>
  );
};

export default ParkingLot;

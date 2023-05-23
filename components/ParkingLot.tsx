import React from "react";
import { BiMap } from "react-icons/bi";

const ParkingLot = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold font-poopins mb-4 text-black">
          Parking Lot
        </h2>
        <div className="flex items-center space-x-4">
          <BiMap className="text-[#FECB21] text-4xl" />
          <div>
            <h3 className="text-lg font-bold text-black font-poopins">
              Easy Park Plaza
            </h3>
            <p className="text-gray-800 font-poopins">123 Main Street, City</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParkingLot;

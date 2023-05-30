import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ParkingHistory = () => {
  const parkingHistoryData = [
    {
      date: "2023-05-01",
      location: "Parking Lot A",
      duration: "2 hours",
      cost: "$10.00",
    },
    {
      date: "2023-04-27",
      location: "Parking Garage B",
      duration: "4 hours",
      cost: "$15.00",
    },
    // Add more parking history data here...
  ];

  return (
    <div className="bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000]  rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 font-poopins">Parking History</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 font-poopins">
              <th className="px-4 py-2 rounded-tl-lg">Date</th>
              <th className="px-4 py-2">Location</th>
              <th className="px-4 py-2">Duration</th>
              <th className="px-4 py-2 rounded-tr-lg">Cost</th>
            </tr>
          </thead>
          <tbody>
            {parkingHistoryData.map((parking, index) => (
              <tr
                key={index}
                className={
                  index % 2 === 0
                    ? "bg-gray-100 hover:bg-gray-300 font-poopins text-black border-b border-gray-400"
                    : "bg-gray-100 hover:bg-gray-300 font-poopins text-black border-b border-gray-400"
                }
              >
                <td className="px-4 py-2">{parking.date}</td>
                <td className="px-4 py-2">{parking.location}</td>
                <td className="px-4 py-2">{parking.duration}</td>
                <td className="px-4 py-2">{parking.cost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4">
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md">
          <FaChevronLeft className="mr-1" />
        </button>
        <div className="flex items-center px-3 text-gray-600">
          <p className="mr-2">Page</p>
          <p className="w-10 text-center border bg-white border-gray-300 rounded-md">
            1
          </p>
        </div>
        <button className="flex items-center px-4 py-2 bg-yellow-500 text-white font-semibold rounded-md ml-2">
          <FaChevronRight className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default ParkingHistory;

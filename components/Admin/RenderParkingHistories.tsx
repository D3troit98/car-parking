import React, { useState, useEffect } from "react";
import { RiParkingFill, RiCalendarEventFill, RiTimeFill } from "react-icons/ri";
import axios from "axios";
import { IParkingHistoryData } from "@/types";
import moment from "moment";
import Link from "next/link";
import { BASE_URL } from "@/utils";
import { GrPrevious, GrNext } from "react-icons/gr";
import { toast } from "react-toastify";

// Render parking histories
const RenderParkingHistories = () => {
  const [parkingHistories, setParkingHistories] = useState<IParkingHistoryData[]>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const ITEMS_PER_PAGE = 4; // Set the desired number of items per page
const [currentPage, setCurrentPage] = useState(1);


useEffect(() => {
  const fetchParkingHistories = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/parking-histories?page=${currentPage}`);
      setParkingHistories((prevParkingHistories) => response.data.parkingHistories);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("Error fetching parking histories");
      toast.error("Error fetching parking histories", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setLoading(false);
    }
  };

  fetchParkingHistories();
}, [currentPage]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  // Render loading state
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render parking histories
  return (
    <div data-cy="parking-histories" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {parkingHistories?.map((history) => (
        <div key={history._id} className="bg-white rounded-lg shadow-md p-4 hover:scale-110 transition-all">
      
            <div className="flex items-center mb-4">
              <RiParkingFill className="text-2xl md:text-4xl mr-2 text-black" />
              <p className="text-lg font-bold text-black">{history.parkingSpot.name}</p>
            </div>
            <div className="flex items-center">
              <RiCalendarEventFill className="text-xl md:text-2xl mr-2" />
              <p className="text-gray-500">{moment(history.checkInDate).format("MMMM DD, YYYY")}</p>
            </div>
            <div className="flex items-center">
              <RiTimeFill className="text-xl md:text-2xl mr-2" />
              <p className="text-gray-500">{history.checkInTime}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500">License Plate: {history.licensePlate}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500">Serial Code: {history._id}</p>
            </div>
            <div className="flex items-center">
              <p className="text-gray-500">User: {history.userName}</p>
            </div>
          
        </div>
      ))}
      <div className="flex justify-center mt-4 items-center mx-auto">
        <button
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <GrPrevious className="text-white" />
        </button>
        <button
          onClick={handleNextPage}
          disabled={!parkingHistories || parkingHistories.length < ITEMS_PER_PAGE}
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <GrNext className="text-white stroke-white" />
        </button>
      </div>
    </div>
  );
};


export default RenderParkingHistories;

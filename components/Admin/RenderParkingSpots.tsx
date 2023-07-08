import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaParking, FaTrash } from "react-icons/fa";
import { IParkingSpot } from "@/types";
import { GrPrevious, GrNext } from "react-icons/gr";
import Link from "next/link";
import Image from "next/image";
import { BASE_URL } from "@/utils";

const RenderParkingSpots = () => {
  const [parkingSpots, setParkingSpots] = useState<IParkingSpot[]>();
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<null | string>(null);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchParkingSpots = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${BASE_URL}/api/all-parking-spots?page=${currentPage}`
        );
        setParkingSpots(response.data.parkingSpots);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching parking spots");
        setLoading(false);
      }
    };

    fetchParkingSpots();
  }, [currentPage]);


  const handleDeleteParkingSpot = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this parking spot?");
    if (confirmDelete)
    {
      try {
        await axios.delete(`/api/parking-spots/${id}`);
        setParkingSpots(parkingSpots?.filter((spot) => spot._id !== id));
      } catch (error) {
        setError("Error deleting parking spot");
      }
    }
    
  };


 // Render loading state
 if (loading) {
  return <div>Loading...</div>;
}

  // Render error state
  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render parking spots
  if (!parkingSpots?.length) {
    return <div>No parking spots available.</div>;
  }
  

  // ...

  return (
    <div data-cy="parking-spots" className="bg-black text-white flex flex-col justify-center items-center">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {parkingSpots.map((spot) => (
          <div
            key={spot._id}
            className="bg-white shadow p-4 rounded-lg flex items-center justify-between mb-4"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <Image src={spot.image} alt="Parking Spot" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full" width={500} height={500}/>
              </div>
              <div className="ml-4">
                <h3 className="font-bold text-lg text-black">{spot.name}</h3>
                <p className="text-sm text-gray-500">
                  Available: {spot.available ? "Yes" : "No"}
                </p>
                <p className="text-sm text-gray-500">{spot.location}</p>
              </div>
            </div>
            <button
              className="flex items-center text-red-500 hover:text-red-700"
              onClick={() => handleDeleteParkingSpot(spot._id)}
            >
              <FaTrash className="mr-2" />
              Delete
            </button>
          </div>
        ))}
      </div>
      <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mt-8">
        <Link href="/add-parking-spot">Add Parking Spot</Link>
      </button>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {currentPage > 1 && (
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mr-2"
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            <GrPrevious className="text-white" />
          </button>
        )}

        {currentPage < totalPages && (
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            <GrNext className="text-white stroke-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default RenderParkingSpots;

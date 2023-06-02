"use client";
import React, { useEffect, useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaSadTear,
  FaCheck,
  FaTimes,
} from "react-icons/fa";
import useAuthStore from "@/store/authStore";

import axios from "axios";
import moment from "moment";
import Link from "next/link";
import { IUser } from "@/types";
import { IParkingHistoryData } from "@/types";
import Loading from "./Loading";
const ParkingHistory = () => {
  const [parkingHistoryData, setParkingHistoryData] = useState<
    IParkingHistoryData[] | []
  >();
  const [loading, setLoading] = useState(true);
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  useEffect(() => {
    async function getParkingHistory() {
      try {
        const { data } = await axios.get(
          `/api/parking-history/${userProfile.email}`
        );
       
        setParkingHistoryData(data.parkingHistories);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
      }
    }

    if (userProfile) {
      setLoading(true);
      getParkingHistory();
    }
    setLoading(false);
  }, [userProfile]);
  if (loading) {
    return <Loading />; // or any loading state you prefer
  }
  return (
    <div className="bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000] rounded-lg p-6 shadow-md">
      <h2 className="text-2xl font-bold mb-4 font-poopins">Parking History</h2>
      <div className="overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-200 text-gray-600 font-poopins">
              <th className="px-4 py-2 rounded-tl-lg">Date</th>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Check in Time</th>
              <th className="px-4 py-2 rounded-tr-lg">CheckedOff</th>
            </tr>
          </thead>
          <tbody>
            {parkingHistoryData?.length ? (
              parkingHistoryData.map((parking, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0
                      ? "bg-gray-100 hover:bg-gray-300 font-poopins text-black border-b border-gray-400"
                      : "bg-gray-100 hover:bg-gray-300 font-poopins text-black border-b border-gray-400"
                  }
                >
                  <td className="px-4 py-2">
                    <Link href={`/parking-detail/${parking._id}`}>
                      {moment(parking.checkInDate).format("MMMM DD, YYYY")}
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link href={`/parking-detail/${parking._id}`}>
                      {parking.parkingSpot.name}
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link href={`/parking-detail/${parking._id}`}>
                      {parking.checkInTime}
                    </Link>
                  </td>
                  <td className="px-4 py-2">
                    <Link href={`/parking-detail/${parking._id}`}>
                      {parking.checkedoff ? (
                        <FaCheck className="text-green-500" />
                      ) : (
                        <FaTimes className="text-red-500" />
                      )}
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  <div className="flex items-center justify-center">
                    <p className="text-gray-500">
                      No parking history available.
                    </p>
                    <span className="ml-2">
                      <FaSadTear className="text-gray-500" />
                    </span>
                  </div>
                </td>
              </tr>
            )}
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

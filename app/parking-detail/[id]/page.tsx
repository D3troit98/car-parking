"use client";
import { useState, useEffect } from "react";
import { FaCheck, FaPrint } from "react-icons/fa";
import { IParkingHistoryData } from "@/types";
import { calculateElapsedTime } from "@/utils/dateUtils";
import axios from "axios";
import Image from "next/image";
import { usePathname } from "next/navigation";

import Loading from "@/components/Loading";
import moment from "moment";

const ParkingDetail = ({ params }: { params: { id: string } }) => {
  const [parkingData, setParkingData] = useState<IParkingHistoryData>();
  const [checkedOff, setCheckedOff] = useState(parkingData?.checkedoff);
  const [isLoading, setIsLoading] = useState(false);

  const pathname = usePathname();
  const id = pathname.match(/\/parking-detail\/(\w+)/)?.[1];

  useEffect(() => {
    const getParkingData = async () => {
      try {
        const { data } = await axios.get(`/api/parking-detail/${id}`);
        setParkingData(data.parkingHistory);
        setCheckedOff(data.parkingHistory.checkedoff);
      } catch (error) {
        console.log(error);
        throw new Error("Failed to fetch data");
      }
    };
    getParkingData();
  }, [params, id]);

  const handleCheckOff = async () => {
    try {
      setIsLoading(true); // Set loading state to true before sending the request
      const response = await axios.put(
        `/api/parking-history/${parkingData?._id}`,
        {
          checkedoff: true,
        }
      );
      setParkingData((prevS: any) => ({
        ...prevS,
        checkedoff: response.data?.updatedParkingHistory?.checkedoff,
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false); // Set loading state back to false after the request is complete
      setCheckedOff(true);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(`
      <html>
        <head>
          <title>QR Code</title>
          <style>
            .bg-white {
              background-color: #fff;
            }
            .rounded-lg {
              border-radius: 0.5rem;
            }
            .p-6 {
              padding: 1.5rem;
            }
            .mb-6 {
              margin-bottom: 1.5rem;
            }
            .text-2xl {
              font-size: 1.5rem;
            }
            .font-poopins {
              font-family: "Poppins", sans-serif;
            }
            .font-bold {
              font-weight: 700;
            }
          </style>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode.react/2.1.0/umd/index.min.js"></script>
          <script src="https://cdn.rawgit.com/davidshimjs/qrcodejs/gh-pages/qrcode.min.js"></script>
        </head>
        <body>
          <div class="bg-white rounded-lg p-6 mb-6">
            <div id="qrcode"></div>
          </div>
          <div class="bg-white rounded-lg p-6 mb-6">
            <h2 class="text-2xl font-poopins font-bold mb-4">Booking Details:</h2>
            <p class="font-poopins">
              <span class="font-bold">Parking Spot:</span> ${
                parkingData?.parkingSpot.name
              }
            </p>
            <p class="font-poopins">
              <span class="font-bold">Check-in Date:</span> ${moment(
                parkingData?.checkInDate
              ).format("MMMM DD, YYYY")}
            </p>
            <p class="font-poopins">
              <span class="font-bold">Check-in Time:</span> ${moment(
                parkingData?.checkInTime,
                "HH:mm"
              ).format("hh:mm A")}
            </p>
            <p class="font-poopins">
              <span class="font-bold">License Plate:</span> ${
                parkingData?.licensePlate
              }
            </p>
            <p class="font-poopins">
              <span class="font-bold">Email:</span> ${parkingData?.email}
            </p>
            <p class="font-poopins">
              <span class="font-bold">User Name:</span> ${parkingData?.userName}
            </p>
          </div>
          <script>
            const qrCodeElement = document.getElementById("qrcode");
            new QRCode(qrCodeElement, {
              text: '${JSON.stringify(parkingData)}',
              width: 128,
              height: 128,
              colorDark : "#000000",
  colorLight : "#ffffff",
  correctLevel : QRCode.CorrectLevel.H
            });
          </script>
        </body>
      </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
  };

  if (!parkingData) {
    return <Loading />; // or any loading state you prefer
  }

  const elapsedTime = calculateElapsedTime(
    parkingData.checkInDate,
    parkingData.checkInTime
  );

  return (
    <div className="bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000] text-white p-6 shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
        <h2 className="text-2xl font-bold font-poopins">Parking Detail</h2>
        {checkedOff ? (
          <div className="flex items-center">
            <FaCheck className="text-green-500" />
            <span>Checked Off</span>
          </div>
        ) : (
          <button
            className="bg-[#FECB21] text-black px-4 py-2 rounded-md font-poopins flex items-center space-x-1"
            onClick={handleCheckOff}
            disabled={isLoading} // Disable the button when loading is true
          >
            {isLoading ? ( // Display loading indicator or check icon based on the loading state
              <></> // Replace with your loading component or spinner
            ) : (
              <FaCheck />
            )}
            <span>{isLoading ? "Checking Off..." : "Check Off"}</span>
          </button>
        )}
      </div>
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-6 justify-center items-center">
        <div className="w-full sm:w-1/2">
          <Image
            src={parkingData.parkingSpot.image}
            alt="Parking Spot"
            height={400}
            width={400}
            className="object-cover w-full h-60"
          />
        </div>
        <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
          <h3 className="text-lg font-bold font-poopins mb-2">
            {parkingData.parkingSpot.name}
          </h3>
          <p className="mb-4">{parkingData.parkingSpot.location}</p>
          <p className="mb-4">
            Price: ${parkingData.parkingSpot.price.toFixed(2)}
          </p>
          <p className="mb-4">
            Availability: {parkingData.parkingSpot.available ? "Yes" : "No"}
          </p>
          <p className="mb-4">
            {elapsedTime && elapsedTime.hours >= 0 ? (
              <>
                Elapsed Time: {elapsedTime?.days} days {elapsedTime.hours} hours{" "}
                {elapsedTime?.minutes} minutes
              </>
            ) : (
              <>
                Time until Booking Starts: {Math.abs(elapsedTime?.days)} days{" "}
                {Math.abs(elapsedTime.hours)} hours{" "}
                {Math.abs(elapsedTime?.minutes)} minutes
              </>
            )}
          </p>
          {!checkedOff && (
            <button
              className="bg-[#FECB21] text-black px-4 py-2 rounded-md font-poopins flex items-center space-x-1"
              onClick={handlePrint}
            >
              <FaPrint />
              <span>Print QR Code</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ParkingDetail;

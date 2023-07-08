import { useState, useEffect } from "react";
import { FaCheck, FaPrint } from "react-icons/fa";
import { IParkingHistoryData } from "@/types";
import { calculateElapsedTime } from "@/utils/dateUtils";
import axios from "axios";
import Image from "next/image";
import { useRouter } from 'next/router';
import Loading from "@/components/Loading";
import moment from "moment";
import { IUser } from "@/types";
import { BASE_URL } from "@/utils";
import { toast } from "react-toastify";
import useAuthStore from "@/store/authStore";
import Head from "next/head";
import NoUserProfileComponent from "@/components/NoUserProfileComponent";
const ParkingDetail = ({ params }: { params: { id: string } }) => {
  const [parkingData, setParkingData] = useState<IParkingHistoryData>();
  const [checkedOff, setCheckedOff] = useState(parkingData?.checkedoff);
  const [isLoading, setIsLoading] = useState(false);
 

  const router = useRouter();
  const { id } = router.query;

  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);
  useEffect(() => {
    const getParkingData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/parking-detail/${id}`);
        setParkingData(data.parkingHistory);
        setCheckedOff(data.parkingHistory.checkedoff);
      } catch (error) {
        console.log(error);
        toast.error("Error loading data", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
       
      }
    };
   if(id) getParkingData();
  }, [id]);
 

  const handleCheckOff = async () => {
    try {
      setIsLoading(true); // Set loading state to true before sending the request
      const response = await axios.put(
        `${BASE_URL}/api/parking-history/${parkingData?._id}`,
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
      toast.error("Error checking off", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } finally {
      setIsLoading(false); // Set loading state back to false after the request is complete
      setCheckedOff(true);
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "_blank");
    printWindow?.document.write(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="August Car Park" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
      href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:ital,wght@0,400;0,700;1,400&family=Fira+Code:wght@500;700&family=Fraunces:ital,opsz,wght@0,9..144,100;1,9..144,900&family=Outfit:wght@400;700&family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />
    <script src="https://cdn.tailwindcss.com"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"
      integrity="sha512-CNgIRecGo7nphbeZ04Sc13ka07paqdeTu0WR1IM4kNcpmBAUSHSQX0FslNhTDadL4O5SAGapGt4FodqL8My0mA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Poppins", "monospace"],
            },
            screens: {
              sm: "480px",
              md: "768px",
              lg: "976px",
              xl: "1440px",
            },
          },
        },
      };
    </script>
          <title>August Car Par -QR Code</title>
          <style>
            body {
              display: flex;
              justify-content: center;
              align-items: center;
            
            }
            #qr-code {
              display: flex;
              align-items: center;
              justify-content: center;
              margin: 30px;
              padding: 33px 0;
            }
            .container {
              background-color: #3498db;
              border-radius: 0.5rem;
              padding: 1.5rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .text-2xl {
              font-size: 1.5rem;
              font-weight: 700;
              margin-bottom: 1.5rem;
            }
            .font-poppins {
              font-family: "Poppins", sans-serif;
            }
            .font-bold {
              font-weight: 700;
            }
            #qrcode {
              margin-bottom: 1.5rem;
            }
          </style>
         

        </head>
        <body>
          <div class="container">
            <h2 class="text-2xl font-poppins font-bold">Booking Details:</h2>
            <div id="qr-code" class="m-auto"></div>
            <p class="font-poppins">
              <span class="font-bold">Parking Spot:</span> ${
                parkingData?.parkingSpot.name
              }
            </p>
            <p class="font-poppins">
              <span class="font-bold">Parking ID:</span> ${parkingData?._id}
            </p>
            <p class="font-poppins">
              <span class="font-bold">Check-in Date:</span> ${moment(
                parkingData?.checkInDate
              ).format("MMMM DD, YYYY")}
            </p>
            <p class="font-poppins">
              <span class="font-bold">Check-in Time:</span> ${moment(
                parkingData?.checkInTime,
                "HH:mm"
              ).format("hh:mm A")}
            </p>
            <p class="font-poppins">
              <span class="font-bold">License Plate:</span> ${
                parkingData?.licensePlate
              }
            </p>
            <p class="font-poppins">
              <span class="font-bold">Email:</span> ${parkingData?.email}
            </p>
            <p class="font-poppins">
              <span class="font-bold">User Name:</span> ${
                parkingData?.userName
              }
            </p>
            <p class="font-poppins">
              <span class="font-bold">Checked Off:</span> ${
                checkedOff ? "Yes" : "No"
              }
            </p>
          </div>
          <script>
          const qrCode = document.querySelector("#qr-code"); 
          
         const qr = new QRCode(document.getElementById("qr-code"), {
          text: ${JSON.stringify(parkingData)},
          width: 300,
          height: 300,
        });
          </script>
        </body>
      </html>
    `);
    printWindow?.document.close();
    printWindow?.print();
  };
  
  if (!userProfile) {
    return <NoUserProfileComponent />;
  }
  if (!parkingData) {
    return <Loading />; // or any loading state you prefer
  }

  const elapsedTime = calculateElapsedTime(
    parkingData.checkInDate,
    parkingData.checkInTime
  );

  return (
    <div className="bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000] text-white p-6 shadow-md">
       <Head>
        <title>August Car Parking App - Parking Detail</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
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


import AboutDetail from "@/components/AboutDetail";
import OccupancyRateChart from "@/components/OccupancyRateChart";
import ParkingHistoryTimeline from "@/components/ParkingHistoryTimeline";
import PopularParkingSpotsChart from "@/components/PopularParkingSpotsChart";
import axios from "axios";
import { PopularSpotsData } from "@/types";
import { BASE_URL } from "@/utils";
import Head from "next/head";

type AboutPageProps = {
  occupancyData: number[];
  labels: string[];
  checkInDates: string[];
  checkInTimes: string[];
  popularParkingSpots: {
    parkingSpots: string[];
    counts: number[];
  };
  error: string | null;
};
const AboutPage = ({ occupancyData, labels, checkInDates, checkInTimes, popularParkingSpots, error }:AboutPageProps) => {
  
   
  return (
    <div className="bg-black w-full">
       <Head>
        <title>August Car Parking App - About</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
      <AboutDetail />
      <div className="flex flex-col justify-center items-center gap-8 md:gap10 px-11 md:px-24 py-1 ">
        <OccupancyRateChart occupancyData={occupancyData} labels={labels} />
        <ParkingHistoryTimeline checkInDates={checkInDates} checkInTimes={checkInTimes} />
      </div>
      <PopularParkingSpotsChart popularParkingSpots={popularParkingSpots} />
    </div>
  );
};


export const getServerSideProps = async () => {
  try {
    const [response1, response2, response3] = await Promise.all([
      axios.get(`${BASE_URL}/api/occupancy`),
      axios.get(`${BASE_URL}/api/parking-history-chart`),
      axios.get<PopularSpotsData>(`${BASE_URL}/api/popular-parking-spots`),
    ]);

    const { occupancyData, labels } = response1.data;
    const { checkInDates, checkInTimes } = response2.data;
    const popularParkingSpots = response3.data;
   
    return {
      props: {
        occupancyData,
        labels,
        checkInDates,
        checkInTimes,
        popularParkingSpots,
        error: null,
      },
    };
  } catch (error) {
    const errorDetails = (error as any).response?.data || "Error fetching data";

    return {
      props: {
        occupancyData: null,
        labels: null,
        checkInDates: null,
        checkInTimes: null,
        popularParkingSpots: null,
        error: errorDetails,
      },
    };
  }
};

  
  
export default AboutPage;

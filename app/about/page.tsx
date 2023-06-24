"use client";
import AboutDetail from "@/components/AboutDetail";
import OccupancyRateChart from "@/components/OccupancyRateChart";
import ParkingHistoryTimeline from "@/components/ParkingHistoryTimeline";
import PopularParkingSpotsChart from "@/components/PopularParkingSpotsChart";

const AboutPage = () => {
  return (
    <div className="bg-black w-full">
      <AboutDetail />
      <div className="px-11 md:px-24 py-1 ">
        <OccupancyRateChart />
        <ParkingHistoryTimeline />
      </div>
      <PopularParkingSpotsChart />
    </div>
  );
};

export default AboutPage;

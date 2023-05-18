import React from "react";
import PriceCard from "./PriceCard";

const Recommended = () => {
  return (
    <div className="bg-black flex justify-center items-center flex-col py-7 px-7">
      <h1 className="bg-[#FECB21] text-black font-poppins p-2 font-semibold text-base ">
        Recommended
      </h1>
      <div className="flex gap-2 pt-7">
        <PriceCard
          plantitle="Free"
          plandetails="Ideal for occasional parkers"
          planPrice="$0.00/hour"
          reservationButton="Reserve Now"
          perks={["24/7 Security", "Covered Parking", "Flexible Cancellation"]}
        />
        <PriceCard
          plantitle="Basic"
          plandetails="Perfect for frequent parkers"
          planPrice="$9.99/hour"
          reservationButton="Reserve Now"
          perks={["Reserved Parking", "Valet Service", "Rewards Program"]}
        />
        <PriceCard
          plantitle="Deluxe"
          plandetails="Ultimate parking experience"
          planPrice="$19.99/hour"
          reservationButton="Reserve Now"
          perks={["VIP Parking", "Car Wash Service", "Concierge Assistance"]}
        />
      </div>
    </div>
  );
};

export default Recommended;

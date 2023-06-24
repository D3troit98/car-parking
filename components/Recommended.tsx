import React from "react";
import { useRouter } from "next/navigation";
import PriceCard from "./PriceCard";

const Recommended = () => {
  const router = useRouter();

  const handleReservation = (plan: string) => {
    if (plan === "Free") {
      router.push("/dashboard/booking");
    }
    // Handle other plans here if needed
  };

  return (
    <div
      id="plan"
      className="bg-black flex justify-center items-center flex-col py-10 px-11 md:px-24"
    >
      <h1 className="bg-[#FECB21] text-black font-poppins py-2 px-4 font-semibold text-lg">
        Recommended
      </h1>
      <div className="flex flex-wrap gap-6 pt-7 justify-center items-start max-w-4xl">
        <PriceCard
          plantitle="Free"
          plandetails="Ideal for occasional parkers"
          planPrice="£0.00/hour"
          reservationButton="Reserve Now"
          perks={[
            "24/7 Security",
            "Covered Parking",
            "Flexible Cancellation",
            "Electric Vehicle Charging",
            "Mobile App Integration",
            "Up to 10 Accessible Spots",
          ]}
          onReservation={() => handleReservation("Free")}
        />
        <PriceCard
          plantitle="Basic"
          plandetails="Perfect for frequent parkers"
          planPrice="£9.99/hour"
          reservationButton="Not Available"
          perks={[
            "Reserved Parking",
            "Valet Service",
            "Rewards Program",
            "Car Rental Discounts",
            "Preferred Parking Availability",
            "Up to 300 Accessible Spots",
          ]}
        />
        <PriceCard
          plantitle="Deluxe"
          plandetails="Ultimate parking experience"
          planPrice="£19.99/hour"
          reservationButton="Not Available"
          perks={[
            "VIP Parking",
            "Car Wash Service",
            "Concierge Assistance",
            "Complimentary Refreshments",
            "Priority Exit",
            "Up to 1000 Accessible Spots",
          ]}
        />
      </div>
    </div>
  );
};

export default Recommended;

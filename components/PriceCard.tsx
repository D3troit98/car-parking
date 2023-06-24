import React from "react";

interface IPriceCardProps {
  plantitle: string;
  plandetails: string;
  planPrice: string;
  reservationButton: string;
  perks: string[];
  onReservation?: () => void;
}

const PriceCard = ({
  plantitle,
  plandetails,
  planPrice,
  reservationButton,
  perks,
  onReservation,
}: IPriceCardProps) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-lg p-4 transform transition duration-300 hover:scale-105">
      <h2 className="text-lg font-semibold font-poppins">{plantitle}</h2>
      <p className="text-black font-semibold text-lg font-poppins">
        {planPrice}
      </p>
      <button
        className={`bg-white text-black border border-[#FECB21] rounded-lg px-8 py-2 mt-4 hover:bg-[#FECB21] hover:text-black hover:outline-[#FECB21] font-poppins md:text-sm text-xs transition duration-300 ${
          onReservation ? "cursor-pointer" : "cursor-not-allowed"
        }`}
        onClick={onReservation}
        disabled={!onReservation}
      >
        {reservationButton}
      </button>
      <p className="text-gray-500 pt-2">{plandetails}</p>

      <div className="border-[#696969] my-4 border w-full h-0" />

      <ul className="mt-4 list-disc list-inside text-[#696969] font-poppins md:text-sm text-xs">
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;

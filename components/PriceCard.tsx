import React from "react";

interface IPriceCardProps {
  plantitle: string;
  plandetails: string;
  planPrice: string;
  reservationButton: string;
  perks: string[];
}

const PriceCard = ({
  plantitle,
  plandetails,
  planPrice,
  reservationButton,
  perks,
}: IPriceCardProps) => {
  return (
    <div className="bg-white flex flex-col justify-center items-center  shadow p-4">
      <h2 className="text-base font-semibold font-poopins">{plantitle}</h2>
      <p className="text-black font-semibold text-lg font-poopins">
        {planPrice}
      </p>
      <button className="bg-white text-black border border-[#FECB21] rounded-lg px-8 py-2 mt-4 hover:bg-[#FECB21] hover:text-black hover:outline-[#FECB21] font-poopins text-xs">
        {reservationButton}
      </button>
      <p className="text-gray-500 pt-2">{plandetails}</p>

      <div className="border-[#696969] my-4 border w-full h-0" />
      <ul className="mt-4 list-disc list-inside text-[#696969] font-poopins text-xs">
        {perks.map((perk) => (
          <li key={perk}>{perk}</li>
        ))}
      </ul>
    </div>
  );
};

export default PriceCard;

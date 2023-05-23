import React from "react";
import { StaticImageData } from "next/image";
import Image from "next/image";

interface FeatureCardProps {
  cardtitle: string;
  cardDescription: string;
  cardImage: StaticImageData;
}

const FeatureCard = ({
  cardtitle,
  cardDescription,
  cardImage,
}: FeatureCardProps) => {
  return (
    <div className="flex flex-col items-start bg-white w-56 md:w-60 mx-4 pb-2 mt-4 shadow-md rounded-md hover:shadow-lg hover:bg-gray-100 transition duration-300 hover:scale-110">
      <div className="relative w-full mb-4">
        <Image
          className="object-cover md:h-36 h-32 w-full rounded-t-md"
          src={cardImage}
          alt="Card"
        />
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-2 mx-2">
        <h2 className="text-lg md:text-xl text-black font-poopins font-bold">
          {cardtitle}
        </h2>
      </div>
      <p className="text-[#292929] text-sm md:text-base font-poopins px-2">
        {cardDescription}
      </p>
    </div>
  );
};

export default FeatureCard;

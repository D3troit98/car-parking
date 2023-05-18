import { StaticImageData } from "next/image";
import React from "react";
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
    <div className="flex flex-col items-start bg-white w-48  mx-4 pb-2">
      <div className="relative w-full mb-4 bg-red-400">
        <Image
          className="object-cover  h-32 w-full"
          src={cardImage}
          alt="Card"
        />
      </div>
      <div className="border-b-2 border-gray-300 pb-2 mb-2 mx-2">
        <h2 className="text-lg text-black font-poopins  font-bold">
          {cardtitle}
        </h2>
      </div>
      <p className="text-[#292929] text-sm font-poopins px-2">
        {cardDescription}
      </p>
    </div>
  );
};

export default FeatureCard;

import { IParkingSpot } from '@/types';
import React from 'react';
import { BiCar, BiMap, BiMoney, BiRightArrowCircle } from 'react-icons/bi';
import { useRouter } from 'next/router';

const ParkingSpotCard = ({ spot }: { spot: IParkingSpot |null }) => {
  const router = useRouter();

  if (!spot) {
    return (
      <div className="bg-white rounded-lg p-6 text-center">
        <p className="text-gray-600">No spot selected</p>
      </div>
    );
  }

  const { name, location, price } = spot;

  const handleViewSpot = () => {
    router.push(`/spots/${spot._id}`); // Replace "/spots" with the actual route for viewing a spot
  };

  return (
    <div className="bg-white rounded-lg p-6 transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="flex items-center mb-4">
        <BiCar className="text-3xl text-black mr-2" />
        <div className="flex flex-col">
          <h3 className="font-bold text-xl">{name}</h3>
          <p className="text-gray-600">{location}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <BiMap className="text-xl text-gray-400 mr-2" />
          <p className="text-sm text-gray-400">{location}</p>
        </div>
        <div className="flex items-center">
          <BiMoney className="text-xl text-gray-400 mr-2" />
          <p className="text-sm text-gray-400">Price: £{price}/hr</p>
        </div>
      </div>
      <button
        className="flex items-center mt-4 text-yellow-500 font-bold text-sm hover:underline"
        onClick={handleViewSpot}
      >
        View Spot <BiRightArrowCircle className="ml-2 text-xl" />
      </button>
    </div>
  );
};

export default ParkingSpotCard;

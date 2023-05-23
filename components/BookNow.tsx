import React from "react";
import { BiCar } from "react-icons/bi";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const BookNow = () => {
  return (
    <div className="bg-[#FECB21] rounded-lg shadow-lg p-6 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold font-poopins mb-4">Book Now</h2>
        <p className="text-gray-900">
          Reserve your parking spot in advance and get a ticket for easy access.
        </p>
      </div>
      <Link
        href="/booking"
        className="flex items-center space-x-2 text-white bg-black rounded-lg px-4 py-2 transition duration-300 ease-in-out transform hover:scale-105 font-poopins"
      >
        <span>Book</span>
        <BsArrowRight className="text-xl" />
      </Link>
    </div>
  );
};

export default BookNow;

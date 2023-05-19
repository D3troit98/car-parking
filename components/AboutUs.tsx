import React from "react";
import Image from "next/image";
import aboutImage from "../assets/aboutusimg.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-black px-11 md:px-22  flex-wrap">
      <p className="uppercase text-white text-2xl  md:text-3xl font-bold mb-4 font-poopins">
        About Us
      </p>
      <div className="flex justify-between items-start  px-5 gap-4 flex-col md:flex-row ">
        <p className="text-white text-sm md:text-base font-poopins pb-6 md:pb-0 md:w-1/3 w-full ">
          Easy Park is a leading car parking reservation company, providing
          convenient and secure parking solutions for customers across various
          locations. Our user-friendly app allows you to conveniently book your
          parking spot, view availability, and make secure payments. Enjoy the
          convenience and peace of mind that comes with Easy Park.
        </p>
        <div className=" w-full md:w-1/2  overflow-hidden">
          <Image
            src={aboutImage}
            alt="About Us"
            className="object-fill w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

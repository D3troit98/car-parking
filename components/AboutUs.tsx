import React from "react";
import Image from "next/image";
import aboutImage from "../assets/aboutusimg.jpg";

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-b from-black to-transparent pt-16">
      <p className="uppercase text-white text-2xl font-bold mb-4 font-poopins">
        About Us
      </p>
      <p className="text-white text-sm font-poopins pb-6">
        Easy Park is a leading car parking reservation company, providing
        convenient and secure parking solutions for customers across various
        locations. Our user-friendly app allows you to conveniently book your
        parking spot, view availability, and make secure payments. Enjoy the
        convenience and peace of mind that comes with Easy Park.
      </p>
      <div className=" w-full  overflow-hidden">
        <Image src={aboutImage} alt="About Us" className="object-fill w-full" />
      </div>
    </div>
  );
};

export default AboutUs;

import React from "react";
import Image from "next/image";
import aboutImage from "../assets/aboutusimg.jpg";

const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col items-center justify-center bg-black px-11 md:px-24 py-10"
    >
      <p className="uppercase text-white text-3xl font-bold mb-6 font-poopins">
        About Us
      </p>
      <div className="flex justify-between items-start gap-8 flex-col md:flex-row max-w-4xl">
        <div className="w-full md:w-2/5">
          <Image
            src={aboutImage}
            alt="About Us"
            className="object-cover w-full h-64 md:h-auto rounded-lg"
          />
        </div>
        <div className="text-white text-base font-poopins md:w-3/5">
          <p className="pb-6">
            Easy Park is a leading car parking reservation company, providing
            convenient and secure parking solutions for customers across various
            locations. Our user-friendly app allows you to conveniently book
            your parking spot, view availability, and make secure payments.
            Enjoy the convenience and peace of mind that comes with Easy Park.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

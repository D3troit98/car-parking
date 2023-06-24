import React from "react";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import parkLogo from "../public/Vector.png";

const Footer = () => {
  return (
    <footer className="bg-[#1D1D1D] text-white py-8 px-11 md:px-24">
      <div className="flex justify-center items-center mb-6">
        <Image
          src={parkLogo}
          alt="logo"
          className="text-[#FECB21] mr-1"
          width={12}
          height={12}
        />
        <p className="font-poppins">
          <span className="text-[#FECB21] uppercase font-extrabold text-lg leading-4">
            August
          </span>{" "}
          <span className="text-[#FFFFFF] uppercase font-extrabold text-lg leading-4">
            Car Park
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        <div>
          <h2 className="text-lg font-bold mb-2 font-poppins">Plan</h2>
          <ul className="font-poppins">
            <li>Free</li>
            <li>Basic</li>
            <li>Regular</li>
            <li>Golden</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 font-poppins">Services</h2>
          <ul className="font-poppins">
            <li>Spacious Parking</li>
            <li>CCTV</li>
            <li>Safety</li>
            <li>Cleaning Services</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 font-poppins">Company</h2>
          <ul className="font-poppins">
            <li>About</li>
            <li>Terms</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-2 font-poppins">More</h2>
          <ul className="font-poppins">
            <li>Documentation</li>
            <li>License</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <a href="https://facebook.com" className="mx-2">
          <FaFacebook className="text-xl text-[#FECB21] hover:text-gray-400" />
        </a>
        <a href="https://twitter.com" className="mx-2">
          <FaTwitter className="text-xl text-[#FECB21] hover:text-gray-400" />
        </a>
        <a href="https://instagram.com" className="mx-2">
          <FaInstagram className="text-xl text-[#FECB21] hover:text-gray-400" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import Image from "next/image";
import parkLogo from "../public/Vector.png";
import heroImage from "../public/herobg.png";
import { FaCalendar, FaClock, FaMapMarkerAlt } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 ">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="object-cover   h-full w-full"
        />
      </div>

      <div className="relative  bg-gradient-to-b  from-black to-transparent ">
        <nav className="flex border-b border-b-black px-11 py-8 justify-between items-center ">
          <div className="flex justify-center items-center">
            <Image
              src={parkLogo}
              alt="logo"
              className="text-[#FECB21] mr-1"
              width={12}
              height={12}
            />
            <p>
              <span className="text-[#FECB21]  uppercase font-extrabold text-lg leading-4 font-poopins">
                easy{" "}
              </span>{" "}
              <span className="text-[#FFFFFF] uppercase  font-extrabold text-lg leading-4 font-poopins">
                park
              </span>
            </p>
          </div>

          <div className="flex justify-center items-center gap-6 ">
            <p className="text-[#FECB21] border-b-2 border-[#FECB21] font-poopins font-bold text-sm leading-4">
              Home
            </p>
            <p className="text-[#FFFFFF]  font-poopins  text-sm leading-4">
              About us
            </p>
            <p className="text-[#FFFFFF]  font-poopins  text-sm leading-4">
              Plan
            </p>
            <p className="text-[#FFFFFF]  font-poopins  text-sm leading-4">
              Testimonials
            </p>
            <button className="bg-[#FECB21] flex justify-center items-center py-2 px-3 font-poopins text-black font-bold text-sm">
              Login
            </button>
          </div>
        </nav>
        <div className="text-white p-8 pt-20">
          <div className="flex flex-col">
            <p className="text-base font-medium leading-4 mb-1">Welcome to</p>
            <p>
              <span className="text-[#FECB21]  uppercase font-extrabold text-4xl leading-10 font-poopins">
                easy{" "}
              </span>{" "}
              <span className="text-[#FFFFFF] uppercase  font-extrabold text-4xl leading-10 font-poopins">
                park
              </span>
            </p>
            <p className="w-96 text-base mt-2">
              Easy Park is your reliable car parking reservation ticketing app.
              Say goodbye to the hassle of searching for parking spots. With
              Easy Park, you can easily find and reserve a parking space in
              advance, ensuring a stress-free parking experience. Whether you're
              running errands, going to work, or planning a day out, Easy Park
              has got you covered.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-lg py-6 ">
            <h1 className="text-2xl font-bold mb-4 capitalize font-poopins text-[#FECB21]">
              Book now
            </h1>
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <div className="">
                <p className="mb-2 uppercase text-[#FECB21] font-poopins font-bold text-sm">
                  Select location
                </p>
                <div className="relative">
                  <input
                    className="bg-black text-[#FECB21] rounded py-2 px-1 w-36 capitalize text-xs outline-none focus:border focus:border-[#FECB21]"
                    placeholder="Los angeles parking"
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                    <FaMapMarkerAlt className="text-[#FECB21] w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white mb-2 uppercase font-poopins font-bold text-sm">
                  Check-in
                </p>
                <div className="flex">
                  <div className="relative mr-2">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-28 capitalize text-xs outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder="Date"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                      <FaCalendar className="text-white w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-24 capitalize text-xs outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder="09:00 AM"
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                      <FaClock className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white mb-2 uppercase font-poopins font-bold text-sm">
                    Promo code{" "}
                    <span className="lowercase font-normal italic text-xs">
                      (optional)
                    </span>
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-32 capitalize text-xs outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder=""
                    />
                    <button className="bg-[#FECB21] text-black capitalize py-2 px-3 font-bold font-poopins">
                      Book now
                    </button>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

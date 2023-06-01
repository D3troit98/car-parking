import React, { useState } from "react";
import Image from "next/image";
import parkLogo from "../public/Vector.png";
import heroImage from "../public/herobg.png";
import {
  FaCalendar,
  FaClock,
  FaMapMarkerAlt,
  FaExclamationCircle,
} from "react-icons/fa";

const Hero = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [promoCode, setPromoCode] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value);
  };

  const handleCheckInDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckInTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCheckInTime(e.target.value);
  };

  const handlePromoCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const handleBooking = () => {
    // Implement the logic to handle the booking here
    setModalVisible(true);
  };

  return (
    <div className="relative flex flex-col justify-center items-stretch bg-black w-full">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Hero Image"
          className="object-cover h-full w-full"
        />
      </div>

      <div className="relative bg-gradient-to-b from-black to-transparent">
        <div className="text-white pt-20 md:pt-24 flex flex-col justify-center items-center px-11 md:px-22">
          <div className="flex flex-col">
            <p className="text-base md:text-lg font-medium leading-4 mb-1">
              Welcome to
            </p>
            <p>
              <span className="text-[#FECB21] uppercase font-extrabold text-4xl md:text-5xl leading-10 font-poopins">
                easy{" "}
              </span>
              <span className="text-[#FFFFFF] uppercase font-extrabold text-4xl leading-10 md:text-5xl font-poopins">
                park
              </span>
            </p>
            <p className="md:w-96 text-base mt-2 py-4">
              Easy Park is your reliable car parking reservation ticketing app.
              Say goodbye to the hassle of searching for parking spots. With
              Easy Park, you can easily find and reserve a parking space in
              advance, ensuring a stress-free parking experience. Whether
              you&apos;re running errands, going to work, or planning a day out,
              Easy Park has got you covered.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center bg-white bg-opacity-10 rounded-lg mt-10 py-6 px-6">
            <h1 className="md:text-3xl text-2xl font-bold mb-4 capitalize font-poopins text-[#FECB21]">
              Book now
            </h1>
            <div className="flex justify-center items-center gap-3 flex-wrap">
              <div>
                <p className="mb-2 uppercase text-[#FECB21] font-poopins font-bold text-sm md:text-base">
                  Select location
                </p>
                <div className="relative">
                  <input
                    className="bg-black text-[#FECB21] rounded py-2 px-1 w-36 md:w-40 capitalize text-xs md:text-sm outline-none focus:border focus:border-[#FECB21]"
                    placeholder="Los Angeles parking"
                    value={location}
                    onChange={handleLocationChange}
                  />
                  <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                    <FaMapMarkerAlt className="text-[#FECB21] w-4 h-4" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col">
                <p className="text-white mb-2 uppercase font-poopins font-bold text-sm md:text-base">
                  Check-in
                </p>
                <div className="flex">
                  <div className="relative mr-2">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-28 md:w-32 capitalize text-xs md:text-sm outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder="Date"
                      value={checkInDate}
                      onChange={handleCheckInDateChange}
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                      <FaCalendar className="text-white w-4 h-4" />
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-24 md:w-28 capitalize text-xs md:text-sm outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder="09:00 AM"
                      value={checkInTime}
                      onChange={handleCheckInTimeChange}
                    />
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-3">
                      <FaClock className="text-white w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div>
                  <p className="text-white mb-2 uppercase font-poopins font-bold text-sm md:text-base">
                    Promo code{" "}
                    <span className="lowercase font-normal italic text-xs md:text-sm">
                      (optional)
                    </span>
                  </p>
                  <div className="flex justify-center items-center gap-2">
                    <input
                      className="bg-black text-white rounded py-2 px-1 w-32 md:w-36 capitalize text-xs md:text-sm outline-none focus:border focus:border-[#FECB21] font-poopins"
                      placeholder=""
                      value={promoCode}
                      onChange={handlePromoCodeChange}
                    />
                    <button
                      className="bg-[#FECB21] text-black capitalize py-2 px-3 font-bold font-poopins text-sm md:text-base"
                      onClick={handleBooking}
                    >
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

      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-10 transition-all animate-pulse opacity-100">
          <div className="bg-white rounded-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <FaExclamationCircle className="text-[#FECB21] w-6 h-6 mr-2" />
              <p className="text-center">
                This feature is still being developed.
              </p>
            </div>
            <button
              className="bg-[#FECB21] text-black py-2 px-3 mt-4 font-bold"
              onClick={() => setModalVisible(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;

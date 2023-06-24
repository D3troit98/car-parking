import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import parkLogo from "../public/Vector.png";

const Testimonial = () => {
  return (
    <div id="testimonials" className="bg-black text-white py-12 px-11 md:px-24">
      <div className="flex flex-col items-center mb-8">
        <Image
          src={parkLogo}
          alt="logo"
          className="text-[#FECB21] mr-2"
          width={18}
          height={18}
        />
        <h1 className="uppercase text-3xl font-bold font-poppins pt-2">
          Testimonial
        </h1>
      </div>
      <div className="flex mb-8 md:flex-row flex-col md:gap-0 gap-8 ">
        <div className="md:w-2/3 md:mr-8 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="mb-4 text-[#949494] font-poppins italic text-xs">
              <FaQuoteLeft className="text-[#FECB21] inline mr-2 text-xl" />
              &ldquo;August Car Park is the best car parking reservation
              ticketing app I have ever used. It has made parking hassle-free
              and convenient for me. Highly recommended!&rdquo;
            </p>
            <hr className="border-[#FECB21]" />
            <div className="flex items-center mt-4">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="profile photo"
                className="rounded-full mr-4 w-auto h-auto"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#6C6C6C]">Emma Olsen</p>
                <div className="flex items-center">
                  <p className="text-[#B0B0B0] font-poopins text-sm mr-2">
                    Web Developer
                  </p>
                  <hr className="border bg-[#B0B0B0] flex-grow" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-1/3 w-full flex flex-col">
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex items-center">
              <Image
                src="https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"
                alt="profile photo"
                className="rounded-full mb-2 w-12 h-12 mr-4"
                width={40}
                height={40}
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-[#6C6C6C]">
                  Kristian Hansen
                </p>
                <p className="text-[#B0B0B0] font-poopins text-sm">
                  Graphic Designer
                </p>
              </div>
              <FaQuoteRight className="text-[#FECB21] text-xl" />
            </div>
            <hr className="border bg-[#B0B0B0] mt-4 mb-2" />
            <p className=" text-[#949494] font-poppins italic text-xs">
              &ldquo;August Car Park offers a reliable and efficient parking
              solution. It has made my daily commute hassle-free.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex items-center">
              <Image
                src="https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1949&q=80"
                alt="profile photo"
                className="rounded-full mb-2 w-12 h-12 mr-4"
                width={40}
                height={40}
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-[#6C6C6C]">
                  Ole Kristoffersen
                </p>
                <p className="text-[#B0B0B0] font-poopins text-sm">
                  Marketing Manager
                </p>
              </div>
              <FaQuoteRight className="text-[#FECB21] text-xl" />
            </div>
            <hr className="border bg-[#B0B0B0] mt-4 mb-2" />
            <p className=" text-[#949494] font-poppins italic text-xs">
              &ldquo;August Car Park has exceeded our expectations. It has
              simplified parking management and improved customer
              satisfaction.&rdquo;
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex items-center">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                alt="profile photo"
                className="rounded-full mb-2 w-12 h-12 mr-4"
                width={40}
                height={40}
              />
              <div className="flex-1">
                <p className="text-sm font-bold text-[#6C6C6C]">
                  Ida Kristiansen
                </p>
                <p className="text-[#B0B0B0] font-poopins text-sm">
                  Product Manager
                </p>
              </div>
              <FaQuoteRight className="text-[#FECB21] text-xl" />
            </div>
            <hr className="border bg-[#B0B0B0] mt-4 mb-2" />
            <p className=" text-[#949494] font-poppins italic text-xs">
              &ldquo;August Car Park has transformed our parking operations.
              It&apos;s user-friendly and has significantly improved
              efficiency.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

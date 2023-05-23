import React from "react";
import Image from "next/image";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

import parkLogo from "../public/Vector.png";

const Testimonial = () => {
  return (
    <div id="testimonials" className="bg-black text-white py-12 px-11 md:px-22">
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
      <div className="flex mb-8 md:flex-row flex-col md:gap-0 gap-8">
        <div className="md:w-2/3 md:mr-8 w-full">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="mb-4 text-[#949494] font-poppins italic text-xs">
              <FaQuoteLeft className="text-[#FECB21] inline mr-2 text-xl" />
              "Easy Park is the best car parking reservation ticketing app I
              have ever used. It has made parking hassle-free and convenient for
              me. Highly recommended!"
            </p>
            <hr className="border-[#FECB21]" />
            <div className="flex items-center mt-4">
              <Image
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                alt="profile photo"
                className="rounded-full mr-4"
                width={40}
                height={40}
              />
              <div>
                <p className="text-sm font-bold text-[#6C6C6C]">Julio Doe</p>
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
            <div className="flex justify-between items-center">
              <Image
                src="https://plus.unsplash.com/premium_photo-1671581559476-10b8a92ffb77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile photo"
                className="rounded-full mb-2"
                width={40}
                height={40}
              />
              <FaQuoteRight className="text-[#FECB21] inline mr-2 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#6C6C6C]">Jane Smith</p>
              <p className="text-[#B0B0B0] font-poopins text-sm mb-2">
                Graphic Designer
              </p>
              <hr className="border bg-[#B0B0B0] flex-grow" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4 mb-4">
            <div className="flex justify-between items-center">
              <Image
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                alt="profile photo"
                className="rounded-full mb-2"
                width={40}
                height={40}
              />
              <FaQuoteRight className="text-[#FECB21] inline mr-2 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#6C6C6C]">
                Michael Johnson
              </p>
              <p className="text-[#B0B0B0] font-poopins text-sm mb-2">
                Marketing Manager
              </p>
              <hr className="border bg-[#B0B0B0] flex-grow" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-4">
            <div className="flex justify-between items-center">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=928&q=80"
                alt="profile photo"
                className="rounded-full mb-2"
                width={40}
                height={40}
              />
              <FaQuoteRight className="text-[#FECB21] inline mr-2 text-xl" />
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-bold text-[#6C6C6C]">Sarah Davis</p>
              <p className="text-[#B0B0B0] font-poopins text-sm mb-2">
                Product Manager
              </p>
              <hr className="border bg-[#B0B0B0] flex-grow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

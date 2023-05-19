import React from 'react'
import Image from 'next/image'
import parkLogo from '../public/Vector.png'
const Header = () => {
  return (
    <div>
      <nav className="flex md:flex-row flex-col border-b border-b-black bg-black md:px-11 py-4 justify-between items-center flex-wrap">
        <div className="flex justify-center items-center mb-1 md:mb-0">
          <Image
            src={parkLogo}
            alt="logo"
            className="text-[#FECB21] md:mr-1"
            width={12}
            height={12}
          />
          <p className="md:block hidden ">
            <span className="text-[#FECB21]  uppercase font-extrabold text-lg leading-4 font-poopins">
              easy{" "}
            </span>{" "}
            <span className="text-[#FFFFFF] uppercase  font-extrabold text-lg leading-4 font-poopins">
              park
            </span>
          </p>
        </div>

        <div className="flex md:flex-row flex-col justify-evenly items-center gap-4 ">
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
    </div>
  );
}

export default Header
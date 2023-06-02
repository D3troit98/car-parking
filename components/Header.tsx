"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import parkLogo from "../public/Vector.png";
import { GoogleLogin, googleLogout } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { AiOutlineLogout } from "react-icons/ai";
import useAuthStore from "@/store/authStore";
import { createOrGetUser } from "@/utils";
import Link from "next/link";
import { IUser } from "@/types";
const Header = () => {
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);

  const addUser = useAuthStore((state: any) => state.addUser);
  const removeUser = useAuthStore((state: any) => state.removeUser);
  const router = useRouter();
  const [userUser, setUserUser] = useState<IUser | null>(null);
  useEffect(() => {
    setUserUser(userProfile);
  }, [userProfile]);
  return (
    <div>
      <nav className="flex border-b border-b-black px-11 md:px-24 py-6 md:py-8 justify-between items-center flex-wrap bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000]">
        <div className="flex justify-center items-center">
          <Link href="/" className="flex justify-center items-center">
            <Image
              src={parkLogo}
              alt="logo"
              className="text-[#FECB21] md:mr-2 mr-1"
              width={20}
              height={20}
            />
            <p>
              <span className="text-[#FECB21]  uppercase font-extrabold text-lg md:text-xl leading-4 font-poopins">
                easy{" "}
              </span>{" "}
              <span className="text-[#FFFFFF] uppercase  font-extrabold text-lg md:text-xl leading-4 font-poopins">
                park
              </span>
            </p>
          </Link>
        </div>

        <div className="flex justify-center items-center md:gap-6 gap-3 flex-wrap ">
          <a
            href="/"
            className="text-[#FFFFFF] hover:text-[#FECB21] hover:border-b-2 hover:border-[#FECB21] font-poopins font-bold text-sm md:text-base leading-4 cursor-pointer transition-colors duration-300"
          >
            Home
          </a>

          <a
            href="/#aboutus"
            className="text-[#FFFFFF] hover:text-[#FECB21] hover:border-b-2 hover:border-[#FECB21]  font-poopins  text-sm md:text-base leading-4 cursor-pointer transition-colors duration-300"
          >
            About us
          </a>
          <a
            href="/#plan"
            className="text-[#FFFFFF] hover:text-[#FECB21] hover:border-b-2 hover:border-[#FECB21]  font-poopins  text-sm  md:text-base leading-4 cursor-pointer transition-colors duration-300"
          >
            Plan
          </a>
          <a
            href="/#testimonials"
            className="text-[#FFFFFF] hover:text-[#FECB21] hover:border-b-2 hover:border-[#FECB21]  font-poopins  text-sm leading-4 md:text-base cursor-pointer transition-colors duration-300"
          >
            Testimonials
          </a>
          <div>
            {userUser ? (
              <div className="flex items-center gap-5 md:gap-10 ">
                {userUser?.image && (
                  <Link href="/dashboard">
                    <>
                      <Image
                        width={40}
                        height={40}
                        className="rounded-full w-auto h-auto cursor-pointer"
                        src={userUser.image}
                        alt="profile photo"
                        priority
                      />
                    </>
                  </Link>
                )}
                <button
                  type="button"
                  className="bg-[#FECB21] flex justify-center items-center py-2 px-3 md:px:5 font-poopins text-black font-bold text-sm md:text-base"
                  onClick={() => {
                    googleLogout();
                    removeUser();
                  }}
                >
                  <AiOutlineLogout color="red" fontSize={21} />
                </button>
              </div>
            ) : (
              <GoogleLogin
                onSuccess={(response) => createOrGetUser(response, addUser)}
                onError={() => console.log("Error")}
              />
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;

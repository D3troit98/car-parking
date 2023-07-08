import { FaUsers, FaCog, FaSignOutAlt } from "react-icons/fa";
import React from "react";
import { BiCheckCircle } from "react-icons/bi";
import RenderUsers from "@/components/Admin/RenderUsers";
import RenderParkingHistories from "@/components/Admin/RenderParkingHistories";
import RenderParkingSpots from "@/components/Admin/RenderParkingSpots";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/navigation";
import { IParkingHistoryData, IParkingSpot, IUser } from "@/types";
import Head from "next/head";

interface IAdminPageProp {
  usersResponse: IUser[];
  parkingHistories: IParkingHistoryData[];
  responseParkingSpots: IParkingSpot[];
  errors: {
    user: "";
    parkingHistories: "";
    parkingSpots: "";
  };
}

const AdminPage = () => {
  const adminUser = useAuthStore((state: any) => state.adminUser);
  const router = useRouter();
  const removeAdminUser = useAuthStore((state: any) => state.removeAdminUser);
  if (!adminUser) {
    return (
      <>
        <div data-cy="noAdmin" className="flex flex-col items-center justify-center h-screen bg-black px-11 md:px-24">
          <Head>
            <title>August Car Parking App - Admin</title>
            <meta
              name="description"
              content="Control as an Admin!."
            />
          </Head>
          <div className="bg-white rounded-lg p-3 md:p-6 md-3 md:mb-6 flex items-center justify-center">
            <div className="bg-[#FECB21] w-12 h-12 rounded-full flex items-center justify-center">
              <BiCheckCircle className="text-white text-2xl md:text-4xl" />
            </div>
            <h1 className="text-black text-lg md:text-3xl font-poopins font-bold ml-4">
              Admin Login session has expired!
            </h1>
          </div>
          <p className="text-white text-base md:text-lg font-poopins mb-6">
            Please log in again to continue.
          </p>
          <button
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      </>
    );
  }

  const handleLogout = () => {
    // Perform the logout action here
    // e.g., call an API to invalidate the session
    // or clear the session storage
    // Then navigate the user to the login page
    removeAdminUser()
    router.push("/login");
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center py-8 px-11 md:px-24">
      <Head>
        <title>August Car Parking App - Admin</title>
        <meta
          name="description"
          content="Control as an Admin."
        />
      </Head>
      <div className="flex flex-wrap flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 font-poopins">Admin Page</h1>
      <button data-cy="logout-button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300 mb-6 md:text-base text-sm"
        onClick={handleLogout}
      >
       Logout <FaSignOutAlt className="mr-2" />
      </button>
      </div>
    
      <div className="flex gap-6 flex-col  justify-center items-start">
        <div className="flex flex-col items-center justify-center align-middle w-full">
          <div className="bg-[#FECB21] text-black rounded-full p-4">
            <FaUsers  className="text-4xl md:text-6xl" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-4 font-poopins text-center">Users</h2>
          <p className="text-base md:text-lg font-poopins text-center">Manage user accounts</p>
          <RenderUsers />
        </div>
        <div className="flex flex-col items-center mt-6 md:mt-0">
          <div className="bg-[#FECB21] text-black rounded-full p-4">
            <FaCog className="text-4xl md:text-6xl" />
          </div>
          <h2 className="text-xl md:text-2xl font-bold mt-4 font-poopins">Settings</h2>
          <p data-cy="settings-section" className="text-base md:text-lg font-poopins ">Manage app settings</p>
          <h2 className="text-base md:text-lg font-poopins mt-4">Parking Histories</h2>
          <RenderParkingHistories />
          <h2 className="text-base md:text-lg font-poopins mt-4">Parking Spots</h2>
          <RenderParkingSpots />
        </div>
      </div>
     
    </div>
  );
};

export default AdminPage;

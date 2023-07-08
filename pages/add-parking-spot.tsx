import AddParkingSpot from '@/components/Admin/AddParkingSpot'
import React from 'react'
import useAuthStore from '@/store/authStore'
import { useRouter } from 'next/navigation'
import { BiCheckCircle } from 'react-icons/bi'
import Head from 'next/head'

const AddParkingSpotPage = () => {
  const adminUser = useAuthStore((state: any) => state.adminUser);
  const router = useRouter()

  if (!adminUser) {

    return <>
    <div className="flex flex-col items-center justify-center h-screen bg-black px-11 md:px-24">
    <Head>
        <title>August Car Parking App - Generate Parking Spot</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
      <div className="bg-white rounded-lg p-3 md:p-6 md-3 md:mb-6 flex items-center justify-center">
        <div className="bg-[#FECB21] w-12 h-12 rounded-full flex items-center justify-center">
          <BiCheckCircle className="text-white text-2xl md:text-4xl" />
        </div>
        <h1 className="text-black text-lg md:text-3xl font-poopins font-bold ml-4">
          Login session has expired!
        </h1>
      </div>
      <p className="text-white text-base md:text-lg font-poopins mb-6">
        Please log in again to continue.
      </p>
      <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
             onClick={()=>router.push('/login')}
            >
           Login
            </button>
    </div>
    
    </>
   ;
  }
  return (
    <div>
       <Head>
        <title>August Car Parking App - Add Parking Spot</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
      <AddParkingSpot /></div>
  )
}

export default AddParkingSpotPage
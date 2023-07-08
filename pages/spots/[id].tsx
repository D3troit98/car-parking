import { IParkingSpot } from '@/types';
import React, { useEffect, useState } from 'react';
import { BiCar, BiMap, BiMoney } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';
import Image from 'next/image';
import useAuthStore from '@/store/authStore';
import { IUser } from '@/types';
import { useRouter } from 'next/router';
import axios from 'axios';
import Loading from '@/components/Loading';
import { BASE_URL } from '@/utils';
import { toast } from 'react-toastify';
import NoUserProfileComponent from '@/components/NoUserProfileComponent';

interface SpotPageProps {
  spot: IParkingSpot;
}

const SpotPage = () => {
  const [loading, setLoading] = useState(true);
  const [parkingData, setParkingData] = useState<IParkingSpot | null>(null);
  const router = useRouter();
  const { id } = router.query;
  const userProfile: IUser = useAuthStore((state: any) => state.userProfile);

  useEffect(() => {
    const getParkingData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`${BASE_URL}/api/spots/${id}`);
        setParkingData(data.parkingSpot);
        setLoading(false);
      } catch (error) {
        console.log(error);
        toast.error('Error Checking off', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
        setLoading(false);
      }
    };

    if (id) getParkingData();
  }, [id]);

  if (!userProfile) {
    return <NoUserProfileComponent />;
  }

  if (!parkingData || loading) {
    return <Loading />;
  }

  return (
    <div className="bg-gradient-to-br from-[#171717] to-[#000000] text-white min-h-screen flex flex-col justify-center items-center py-8 px-11 md:px-24">
      <h1 className="text-4xl font-bold mb-8 font-poppins">{parkingData.name}</h1>
      <div className="flex gap-6 flex-col justify-center items-center">
        <div className="overflow-hidden w-96 h-auto rounded-lg border border-gray-300">
          <Image
            src={parkingData.image}
            alt={parkingData.image}
            width={800}
            height={800}
            className="transition-all duration-500 transform hover:scale-105"
          />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex items-center mb-4">
            <BiCar className="text-3xl text-yellow-500 mr-2 animate-pulse" />
            <div className="flex flex-col">
              <h3 className="font-bold text-xl">{parkingData.name}</h3>
              <p className="text-base">{parkingData.location}</p>
            </div>
          </div>
          <div className="flex items-center">
            <BiMap className="text-xl text-yellow-500 mr-2 animate-pulse" />
            <p className="text-sm text-yellow-500">{parkingData.location}</p>
          </div>
          <div className="flex
items-center">
            <BiMoney className="text-xl text-yellow-500 mr-2 animate-pulse" />
            <p className="text-sm text-yellow-500">Price: £{parkingData.price}</p>
          </div>
        </div>
        <button
          className="bg-yellow-500 text-black px-4 py-2 rounded-lg mt-8 flex items-center gap-2 font-poppins transition-all duration-300 hover:bg-yellow-600 hover:text-white transform hover:scale-105"
          onClick={() => router.back()}
        >
          <FiArrowLeft />
          Back
        </button>
      </div>
    </div>
  );
};

export default SpotPage;

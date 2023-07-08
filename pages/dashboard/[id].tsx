import React, { useEffect, useState } from 'react';
import Dashboard from '@/components/Dashboard';
import axios from 'axios';
import { BASE_URL } from '@/utils';
import { DashBoardPageProp, IParkingSpot } from '@/types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { toast } from "react-toastify";


const DashboardPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [hasReservation, setHasReservation] = useState(false);
  const [parkingSpot, setParkingSpot] = useState<IParkingSpot | null>(null);
  const [parkingHistoryData, setParkingHistoryData] = useState([]);

  useEffect(() => {
    const fetchReservationData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/reservation-status/${id}`);
        setHasReservation(data.hasReservation);
      } catch (error) {
        console.error(error);
        // Handle error if fetching reservation data fails
        toast.error("No reservation, Please Refresh!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    if (id) {
      fetchReservationData();
    }
  }, [id]);

  useEffect(() => {
    const fetchAvailableSpotData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/available-parkingspot`);
        setParkingSpot(data.parkingSpot);
      } catch (error) {
        console.error(error);
        // Handle error if fetching available spot data fails
        toast.error("No Parking Spots, Please Refresh!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    fetchAvailableSpotData();
  }, []);

  useEffect(() => {
    const fetchParkingHistoryData = async () => {
      try {
        const { data } = await axios.get(`${BASE_URL}/api/parking-history/${id}`);
        setParkingHistoryData(data.parkingHistories);
      } catch (error) {
        console.error(error);
        // Handle error if fetching parking history data fails
        toast.error("No History, Please Refresh!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      }
    };

    if (id) {
      fetchParkingHistoryData();
    }
  }, [id]);

  return (
    <div>
      <Head>
        <title>August Car Parking App - Dashboard</title>
        <meta
          name="description"
          content="August Car Parking App provides a convenient way to find and book parking spots in your city. Download our app now and enjoy hassle-free parking."
        />
      </Head>
      <Dashboard hasReservation={hasReservation} parkingSpot={parkingSpot} parkingHistoryData={parkingHistoryData} />
    </div>
  );
};

export default DashboardPage;

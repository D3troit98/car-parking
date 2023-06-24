"use client";
import { FaUsers, FaCog } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { IParkingHistoryData, IParkingSpot, IUser } from "@/types";

const AdminPage = () => {
  const [parkingHistories, setParkingHistories] = useState<
    IParkingHistoryData[]
  >([]);
  const [parkingSpots, setParkingSpots] = useState<IParkingSpot[]>([]);
  const [users, setUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  // Fetch data from the server on page load
  useEffect(() => {
    fetchParkingHistories();
    fetchParkingSpots();
    fetchUsers();
  }, []);

  // Fetch parking histories
  const fetchParkingHistories = async () => {
    try {
      const response = await axios.get("/api/parking-histories");
      setParkingHistories(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching parking histories");
      setLoading(false);
    }
  };

  // Fetch parking spots
  const fetchParkingSpots = async () => {
    try {
      const response = await axios.get("/api/parking-spots");
      setParkingSpots(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching parking spots");
      setLoading(false);
    }
  };

  // Fetch users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("/api/users");
      setUsers(response.data);
      setLoading(false);
    } catch (error) {
      setError("Error fetching users");
      setLoading(false);
    }
  };

  // Render parking histories
  const renderParkingHistories = () => {
    // Render loading state
    if (loading) {
      return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
      return <div>Error: {error}</div>;
    }
    return parkingHistories.map((history) => (
      <div key={history._id}>
        {/* Render the necessary information from the ParkingHistorySchema */}
        <p>Parking Spot: {history.parkingSpot.name}</p>
        <p>Check-In Date: {history.checkInDate}</p>
        <p>Check-In Time: {history.checkInTime}</p>
        {/* Add additional fields as needed */}
      </div>
    ));
  };

  // Render parking spots
  const renderParkingSpots = () => {
    // Render loading state
    if (loading) {
      return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
      return <div>Error: {error}</div>;
    }
    return parkingSpots.map((spot) => (
      <div key={spot._id}>
        {/* Render the necessary information from the ParkingSpotSchema */}
        <p>Name: {spot.name}</p>
        <p>Available: {spot.available ? "Yes" : "No"}</p>
        <p>Location: {spot.location}</p>
        {/* Add additional fields as needed */}
      </div>
    ));
  };

  // Render users
  const renderUsers = () => {
    // Render loading state
    if (loading) {
      return <div>Loading...</div>;
    }

    // Render error state
    if (error) {
      return <div>Error: {error}</div>;
    }
    return users.map((user) => (
      <div key={user._id}>
        {/* Render the necessary information from the UserSchema */}
        <p>User Name: {user.userName}</p>
        <p>Email: {user.email}</p>
        {/* Add additional fields as needed */}
      </div>
    ));
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl font-bold mb-8 font-poopins">Admin Page</h1>
      <div className="flex gap-6">
        <div className="flex flex-col items-center">
          <div className="bg-[#FECB21] text-black rounded-full p-4">
            <FaUsers className="text-6xl" />
          </div>
          <h2 className="text-2xl font-bold mt-4 font-poopins">Users</h2>
          <p className="text-lg">Manage user accounts</p>
          {renderUsers()}
        </div>
        <div className="flex flex-col items-center">
          <div className="bg-[#FECB21] text-black rounded-full p-4">
            <FaCog className="text-6xl" />
          </div>
          <h2 className="text-2xl font-bold mt-4 font-poopins">Settings</h2>
          <p className="text-lg">Manage app settings</p>
          <h2>Parking Histories</h2>
          {renderParkingHistories()}
          <h2>Parking Spots</h2>
          {renderParkingSpots()}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

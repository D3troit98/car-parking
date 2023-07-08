import React, { useState, useEffect } from "react";
import { RiMailFill } from "react-icons/ri";
import { FaTrash } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";
import axios from "axios";
import { IUser } from "@/types";
import Image from "next/image";
import { BASE_URL } from "@/utils";
import { toast } from "react-toastify";

const ITEMS_PER_PAGE = 10; // Set the desired number of items per page

const RenderUsers = () => {
  const [error, setError] = useState<null | string>(null);
  const [users, setUsers] = useState<IUser[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${BASE_URL}/api/users?page=${currentPage}`);
        setUsers(response.data.users);
        setTotalPages(response.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError("Error fetching users");
        toast.error("Error fetching user", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setLoading(false);
      }
    };

    fetchUsers();
  }, [currentPage]);

  const handleDeleteUser = async (userId: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this user?");

    if (confirmDelete) {
      try {
         await axios.delete(`/api/users/${userId}`);
        setUsers((prevUsers: any) => prevUsers?.filter((user:any) => user._id !== userId));
        toast.success("Deleted succesfully", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (error) {
        toast.error("Error deleting user", {
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
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <div  data-cy="users-section" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {users?.map((user) => (
          <div key={user._id} className="bg-white rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <Image src={user.image} alt={user.userName} className="w-12 h-12 rounded-full mr-2" width={500}height={500} />
              <p className="text-lg font-bold text-black">{user.userName}</p>
            </div>
            <div className="flex items-center">
              <RiMailFill className="text-xl md:text-2xl mr-2 text-black" />
              <p className="text-gray-500">{user.email}</p>
            </div>
            <button
              className="flex items-center text-red-500 hover:text-red-700"
              onClick={() => handleDeleteUser(user._id)}
            >
              <FaTrash className="mr-2" />
              Delete
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-4">
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mr-2 bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <GrPrevious className="text-white" />
        </button>
        <button
          onClick={() => setCurrentPage((prevPage) => prevPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <GrNext className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default RenderUsers;

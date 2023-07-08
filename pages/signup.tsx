import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/router";

const UserSignupPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error,setError] = useState<null |string >(null)
  const [loading,setLoading] = useState(false)
  const router = useRouter()
  const addUser = useAuthStore((state:any) => state.addUser);
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
        setLoading(true)
      const response = await axios.post("/api/signup", {
        fullName,
        email,
        password,
      });

      console.log(response.data); // You can handle the response accordingly
      if(response.data.message)
      {
        setError(response.data.message)
        setLoading(false)
        return
      }

      const { _id, userName, image } = response.data.user;
      const user = {
        _id: _id,
        _type: "user",
        userName: userName,
        image: image,
        email: email,
      };

      addUser(user);
    
 setLoading(false)
 setFullName("");
 setEmail("");
 setPassword("");
 router.push(`/dashboard/${_id}`); // Redirect to the dashboard page
      // Clear the input fields
     
    } catch (error) {
        setError("Server Error")
        setLoading(false)
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up for August Car Park</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSignup}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
          <input
            type="text"
            placeholder="Full Name"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute top-2 right-2 text-gray-500 focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-600 focus:outline-none"
          >
             {loading && 'Signing up'||  'Sign Up'}
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-400">Already have an account?</span>
          <Link href="/userlogin" className="text-yellow-500 ml-1 hover:text-yellow-600 font-semibold">
            Log In
          </Link>
        </div>
      </div>
      <p className="text-gray-400 mt-8">
        <FaCar className="inline-block mr-1" />
        August Car Park - All rights reserved
      </p>
    </div>
  );
};

export default UserSignupPage;

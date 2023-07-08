import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import useAuthStore from "@/store/authStore";
import { useRouter } from "next/router";

const UserLoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const addUser = useAuthStore((state: any) => state.addUser);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post("/api/sign", {
        email,
        password,
      });

      if (response.data.message) {
        setError(response.data.message);
        setLoading(false);
        return;
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
      setLoading(false);
      router.push(`/dashboard/${_id}`); // Redirect to the dashboard page
    } catch (error) {
      console.error(error);
      setError("Server Error");
      // Handle login error, show an error message or take appropriate action
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    router.push("/forgot-password");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-500">August Car Park</h2>

        <form className="flex flex-col gap-4" onSubmit={handleLogin}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <input
          data-cy="email-input"
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
          data-cy="password-input"
            type="password"
            placeholder="Password"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
          data-cy="login-button"
            type="submit"
            className="bg-yellow-500 text-white font-bold py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-600 focus:outline-none"
          >
            {loading ? "Logging in" : "Log In"}
          </button>
        </form>
        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-400 text-sm">Don&apos;t have an account?</span>
          <Link href="/signup" className="text-yellow-500 ml-1 hover:text-yellow-600 font-semibold text-sm">
            Sign Up
          </Link></div>
        <div className="flex items-center justify-center mt-4">
          <Link href="/forgot-password" className="text-yellow-500 hover:text-yellow-600 font-semibold text-sm">
            Forgot Password
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

export default UserLoginPage;

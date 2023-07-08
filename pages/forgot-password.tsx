import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import Link from "next/link";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState<null | string>(null)

  const handleResetPassword = async (e:React.FormEvent<HTMLElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      // Make an API call to initiate the password reset process
    const {data}=  await axios.post("/api/reset-password", { email });

      toast.success("Password reset link sent to your email address");
      setLoading(false);
    } catch (error) {
      console.error(error);
      setError("User not found")
      toast.error("Error resetting password. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-black via-[#1D1D1D] to-[#000000]">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-500">August Car Park</h2>

        <form className="flex flex-col gap-4" onSubmit={handleResetPassword}>
        {error && <div className="text-red-500 mb-4">{error}</div>}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none text-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button
            type="submit"
            className="bg-yellow-500 text-white font-bold py-2 rounded-lg transition-colors duration-300 hover:bg-yellow-600 focus:outline-none"
            disabled={loading}
          >
            {loading ? "Sending..." : "Reset Password"}
          </button>
        </form>

        <div className="flex items-center justify-center mt-4">
          <span className="text-gray-400">
            Remember your password?
          </span>
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

export default ForgotPasswordPage;

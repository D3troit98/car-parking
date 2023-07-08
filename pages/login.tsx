import React, { useState } from "react";
import { FaCar } from "react-icons/fa";
import useAuthStore from "@/store/authStore";
import { toast } from "react-toastify";
import Head from "next/head";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);
  const addUser = useAuthStore((state: any) => state.addAdminUser);
  const adminUser = useAuthStore((state: any) => state.adminUser);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Add login logic here (e.g., send login request to backend)
      const response:any = await new Promise((resolve) =>
      setTimeout(() => {
        resolve({ data: { user: { email: formData.email,password:formData.password } } });
      }, 1000)
    );

    const { email,password } = response.data.user;
  
    // Check if the logged-in user is an admin
    if (email.trim().toLowerCase() === "admin@augustparking.com" && password.trim().toLowerCase() == "qwerty") {
     addUser(response.data.user)
     toast.success("logged in", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
     router.push('admin')
    }else{
      setError("wrong email or password");
    }
  
      setLoading(false);
    } catch (error) {
      setError("Invalid email or password");
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1D1D1D] text-black py-8 px-11 md:px-24 flex flex-col justify-center items-center">
       <Head>
        <title>August Car Parking App - Login</title>
      </Head>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <div className="flex items-center justify-center mb-6">
          <FaCar className="text-4xl mr-2" />
          <h1 className="text-2xl font-bold">August Car Park</h1>
        </div>
        <form onSubmit={handleSubmit}>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-bold">
              Email
            </label>
            <input
            data-cy="email-input"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-1 font-bold">
              Password
            </label>
            <input
            data-cy="password-input"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-between items-center gap-1">
  <p className="text-yellow-500 hover:underline text-sm">
    <a href="mailto:admin@augustparking.com">forgot password?</a>
  </p>
  <button
  data-cy="login-button"
    type="submit"
    className="bg-black hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
    disabled={loading}
  >
    {loading ? "Logging in..." : "Log In"}
  </button>
</div>
        </form>
      </div>
    </div>
  );
};

export default Login;

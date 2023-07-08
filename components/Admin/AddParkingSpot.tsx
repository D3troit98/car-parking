import React, { useState } from "react";
import axios from "axios";
import { FaParking } from "react-icons/fa";
import { toast } from "react-toastify";
import { BASE_URL } from "@/utils";

const AddParkingSpot = () => {
  const [formData, setFormData] = useState({
    name: "",
    image: null as string | null,
    location: "",
    price: 0,
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === "image") {
      const file = e.target.files && e.target.files[0];
      if (file) {
        const fileSize = file.size;
        const fileType = file.type;

        // Check file type
        if (!fileType.startsWith("image/")) {
          setError("Please select an image file");
          setFormData({ ...formData, image: null });
          return;
        }

        // Check file size (1MB limit)
        const maxSize = 1 * 1024 * 1024; // 1MB in bytes
        if (fileSize > maxSize) {
          setError("File size exceeds the limit of 1MB");
          setFormData({ ...formData, image: null });
          return;
        }

        // Convert the selected image file to base64
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, image: reader.result as string });
        };
        reader.readAsDataURL(file);
      } else {
        setFormData({ ...formData, image: null });
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (!formData.image || !formData.location || !formData.name || !formData.price) {
        setError("Fill in all fields");
        setLoading(false);
        return;
      }

      const response = await axios.post(`${BASE_URL}/api/parking-spots`, formData);
      console.log(response.data);
      if (response.data) {
        toast.success("Parking spot uploaded", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error("Error creating parking spot", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setError("Error creating parking spot");
      setLoading(false);
    }
  };

  return (
    <div className="bg-black flex justify-center items-center flex-col py-10 px-11 md:px-24 text-black">
      <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-md">
        <div className="flex items-center justify-center mb-6">
          <FaParking className="text-4xl mr-2" />
          <h1 className="text-2xl font-bold">Add Parking Spot</h1>
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the name of the parking spot"
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="image" className="block mb-1 font-bold">
              Image (1MB MAX)
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={handleChange}
              className="w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-1 font-bold">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter the location"
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="price" className="block mb-1 font-bold">
              Price (£)
            </label>
            <input
              type="number"
              id="price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              className="w-full border-gray-300 border rounded-md px-3 py-2"
              required
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddParkingSpot;

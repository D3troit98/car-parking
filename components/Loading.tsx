import React from "react";
import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center space-y-2">
        <FaSpinner className="animate-spin text-[#FECB21] text-4xl" />
        <span className="text-white font-poopins">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;

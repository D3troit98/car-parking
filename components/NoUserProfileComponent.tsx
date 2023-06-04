import { BiCheckCircle } from "react-icons/bi";
const NoUserProfileComponent = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black px-11 md:px-24">
      <div className="bg-white rounded-lg p-3 md:p-6 md-3 md:mb-6 flex items-center justify-center">
        <div className="bg-[#FECB21] w-12 h-12 rounded-full flex items-center justify-center">
          <BiCheckCircle className="text-white text-2xl md:text-4xl" />
        </div>
        <h1 className="text-black text-lg md:text-3xl font-poopins font-bold ml-4">
          Login session has expired!
        </h1>
      </div>
      <p className="text-white text-base md:text-lg font-poopins mb-6">
        Please log in again to continue.
      </p>
    </div>
  );
};

export default NoUserProfileComponent;

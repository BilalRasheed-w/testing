import { CircleUserRound } from "lucide-react";
import React from "react";
import { FaUserAlt } from "react-icons/fa";

const User_Mini_Card = ({ setshowActiveView, link }) => {
  return (
    <div
      className="user_card bg-blue opacity-80 backdrop-blur-2xl 
             flex rounded-2xl flex-col shadow-2xl items-center 
          py-8 w-full 2xl:py-16 xl:py-5 2xl:pb-6 xl:gap-2  2xl:pt-8  gap-3 "
    >
      <button
        onClick={() => setshowActiveView(link)}
        className=" p-5 xl:p-4 2xl:py-7 2xl:px-8 bg-gray-300 cursor-pointer
                 transition-transform hover:scale-105 hover:bg-gray-200 rounded-full"
      >
        <CircleUserRound className="text-blue  xl:size-12 size-20" />
      </button>
      <div className="flex flex-col items-center   2xl:space-y-3 ">
        <p className="text-xl text-white not-last: 2xl:text-3xl  text-shadow-lg  text-shadow-pink-500  ">
          John doe
        </p>
        <p className="text-sm text-white  2xl:text-2xl text-shadow-lg  text-shadow-pink-500  ">
          testing@gmail.com
        </p>
      </div>
    </div>
  );
};

export default User_Mini_Card;

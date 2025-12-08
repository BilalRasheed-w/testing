import React from "react";
import Profile_avatar from "/60111-removebg-preview.png";

const UserDetails = () => {
  return (
    <div className="">
      <div className="user_div bg-blue backdrop-blur-xl  rounded-2xl px-8 2xl:py-10 py-3 flex  ">
        <div className="avatar h-full w-[30%]  flex  relative items-center justify-center  ">
          <div className="bg-white/40 rounded-full h-32  xl:w-30  2xl:h-50 2xl:w-50   w-45 flex justify-center items-center  ">
            <img
              src={Profile_avatar}
              className="h-30 2xl:h-50 2xl:w-45 lg:mb-4 z-8"
            />
          </div>
        </div>

        <div className="names w-[70%]  flex flex-col 2xl:space-y-3 justify-center  ">
          <p className="text-2xl text-gray-200 text-shadow-lg 2xl:text-5xl text-shadow-pink-500">
            John doe...
          </p>
          <h2 className="text-lg text-gray-200 text-shadow-lg 2xl:text-3xl text-shadow-pink-500 ">
            testing@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;

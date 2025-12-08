import React, { useState } from "react";

const Leave = () => {
  const handleSubmit = () => {};

  return (
    <div className="bg-blue backdrop-blur-lg  lg:h-80 text-white rounded-xl border py-5 px-8 flex flex-col space-y-6 ">
      <div className="from_to flex gap-8  ">
        <div className="_from ">
          <label className="text-sm text-white">From date</label>
          <input
            type="number"
            className="w-full px-3 py-1
            rounded-xl border border-gray-300 bg-gray-200/20 text-black   outline-none"
          />
        </div>

        <div className="_to  space-y-1">
          <label className="text-sm text-white">to date</label>
          <input
            type="number"
            className="w-full px-4 py-1
             rounded-xl border border-gray-300 bg-gray-200/20 text-black  outline-none "
          />
        </div>
      </div>
      <div className="flex w-xl gap-12  h-full flex-col justify-between ">
        <div className="_from w-xl h-2/3  ">
          <label className="text-sm  text-white">Leave message</label>
          <textarea
            className="w-full px-3 py-1 h-full 
          rounded-xl resize-none border border-gray-300 bg-gray-200/20 text-black   outline-none"
          ></textarea>
        </div>
        <button
          onClick={handleSubmit}
          className="bg-green-500 text-black  w-fit  h-fit xl:py-1
         hover:scale-110 transition-transform px-7 py-2 cursor-pointer rounded-3xl "
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Leave;

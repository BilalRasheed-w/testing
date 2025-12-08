import React from "react";

const Email = () => {
  return (
    <div className="bg-blue backdrop-blur-lg lg:h-80 text-white rounded-xl h-full py-5 px-8 flex flex-col space-y-6 ">
      <div className="from_to flex gap-8 ">
        <div className="_from ">
          <label className="text-sm text-white">to</label>
          <input
            type="text"
            className="w-full px-3 py-1
            rounded-xl border border-gray-300 bg-gray-200/20 text-black outline-none 
             placeholder:text-gray-700  
            "
            placeholder="admin@gmail.com"
          />
        </div>

        <div className="_to  space-y-1">
          <label className="text-sm text-white">Subject</label>
          <input
            type="text"
            className="w-full px-4 py-1
             rounded-xl border border-gray-300 bg-gray-200/20 text-black  outline-none   placeholder:text-gray-700   "
            placeholder="Enter Subject"
          />
        </div>
      </div>
      <div className="flex w-xl gap-12  h-full flex-col justify-between ">
        <div className="_from w-xl h-2/3  ">
          <label className="text-sm  text-white">Email</label>
          <textarea
            className="w-full px-3 py-1 h-full 
          rounded-xl border resize-none border-gray-300 bg-gray-200/20 text-black   outline-none"
          ></textarea>
        </div>
        <button
          className="bg-green-500 xl:py-1  w-fit  h-fit
         hover:scale-110 transition-transform px-7 py-2 cursor-pointer rounded-3xl text-white "
        >
          Send Mail
        </button>
      </div>
    </div>
  );
};

export default Email;

import Hero_img from "/19199016.jpg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero 
        md:bg-none pb-10 px-10 py-10 md:py-0 md:px-16  xl:px-16 md:h-[450px]
      lg:h-[500px] xl:h-[700px]  flex items-center lg:items-start justify-beween 
      2xl:px-26  lg:bg-amber-400 xl:bg-red-500  "
    >
      <div
        className="hero_headings flex flex-col items-center text-center
        lg:items-start  lg:text-start
        lg:w-1/2 lg:mt-24 xl:mt-28 
        gap-6 "
      >
        <motion.h1
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-5xl font-semi-bold italic capitalize leading-16 font-semibold text-shadow-lg text-blue/90
           lg:text-4xl lg:leading-12 
          xl:leading-16 xl:text-5xl 
          2xl:text-7xl 2xl:leading-22 "
        >
          ms tech hive one stop solution{" "}
          <span className="text-red-500 text-shadow-lg ">
            for all your tech expertise
          </span>
        </motion.h1>
        <Link to="/dashboard" className="w-fit  ">
          <button
            className="bg-blue w-fit border rounded-md cursor-pointer text-white  text-xl
         lg:border-0 px-4 py-2
         2xl:text-2xl "
          >
            Dashboard
          </button>
        </Link>
      </div>

      {/* hero img */}

      <div className="hero_img hidden  w-1/2 lg:flex justify-center items-center lg:mt-16    ">
        <motion.img
          initial={{ x: 0, y: 0 }}
          animate={{ x: 0, y: -40 }}
          transition={{
            repeat: Infinity,
            repeatType: "reverse",
            duration: 1,
            ease: "easeInOut",
          }}
          src={Hero_img}
          className="rounded-full  cursor-pointer w-[600px]
          xl:w-fit h-[500px] 
          lg:h-[300px] lg:w-[400px] 
          xl:h-[430px] " 
        />
      </div>
    </div>
  );
};

export default Hero;

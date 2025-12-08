import React from "react";
import { motion } from "motion/react";

const SideHeading = ({ heading }) => {
  return (
    <motion.div
      initial={{ x: -100 }}
      whileInView={{ x: 0 }}
      transition={{ type: "spring", duration: 2 }}
      className="header bg-blue w-xs h-20 text-3xl text-primary italic font-bold 
      rounded-r-full justify-center items-center flex 
      md:w-xl md:h-28 md:text-5xl
      lg:h-26 lg:w-xl
      xl:w-2xl xl:h-36   
      2xl:w-4xl
     "
    >
      <h2>{heading}</h2>
    </motion.div>
  );
};

export default SideHeading;

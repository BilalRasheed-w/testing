import React from "react";
import { motion } from "motion/react";

const ImgFeatures = ({ image, altText }) => {
  return (
    <div className="left w-xs md:w-2xl xl:w-1/2   flex  items-center justify-center">
      <motion.img
        initial={{ scale: 0.7, opacity: 0 }}
        whileInView={{ scale: [1.1], opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.5 }}
        src={image}
        className="h-['13rem'] w-[500px] rounded-4xl shadow-2xl
        md:h-[300px] lg:h-[250px] lg:w-[400px] 
        xl:h-78 xl:w-[500px]  2xl:h-100 2xl:w-160 "
        alt={altText}
      />
    </div>
  );
};

export default ImgFeatures;

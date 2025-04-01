import React from "react";
import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full w-full flex items-center justify-center mt-6"
    >
      <img
        src="/images/profile-picture.jpg"
        alt="Patricks Kulinji"
        className="relative max-h-[300px]  w-auto rounded-lg border-4 border-white"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse">
        <PiHexagonThin className="md:h-[90%] sm:h-[ 120%] min-h-[400px] md:min-h-[600px] w-auto text-orange-500 blur-md animate-[spin_20s_linear_infinite]" />
      </div>
    </motion.div>
  );
};

export default HeroPic;

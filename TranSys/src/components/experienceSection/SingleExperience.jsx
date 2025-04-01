import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const SingleExperience = ({ experience }) => {
  return (
    <motion.div
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="md-h[350px] md:w-[240px] sm:h-auto sm:w-full border-2 border-orange-500 border-dashed rounded-2xl  mt-12  p-4"
    >
      <p className="font-bold  text-amber-300">{experience.job}</p>
      <p className="text-orange-500">{experience.company}</p>
      <p className="text-black">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white">
        {experience.responsibilities.map((res, index) => {
          return <li key={index}>{res}</li>;
        })}
      </ul>
    </motion.div>
  );
};

export default SingleExperience;

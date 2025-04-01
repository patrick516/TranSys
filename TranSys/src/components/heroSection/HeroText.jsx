import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl font-bold uppercase 
    bg-gradient-to-r  
    from-[var(--neon)] 
    via-[var(--nerve)] 
    to-[var(--customAqua)] 
    text-transparent 
    bg-clip-text"
      >
        Full stack Web Developer
      </motion.h2>

      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font special text-orange-500"
      >
        PATRICKS KULINJI
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Passsionate Web Developer and instructor <br />
        With 3 years of Experience
      </motion.p>
    </div>
  );
};

export default HeroText;

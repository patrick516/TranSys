import React from "react";
import HeroText from "./HeroText";
import HeroPic from "./HeroPic";

const HeroMain = () => {
  return (
    <div className="w-full max-w-full mx-auto overflow-x-hidden pt-40 pb-60 flex justify-center">
      <div className="grid md:grid-cols-2 max-sm:grid max-w-[1200px] w-full place-items-center text-center px-4 gap-10 flex-col md:flex-row">
        <HeroText />
        <HeroPic />
      </div>
    </div>
  );
};

export default HeroMain;

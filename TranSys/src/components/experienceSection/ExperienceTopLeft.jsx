import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="w-[300px] sm:grid sm:grid-cols-2 sm:gap-4 lg:flex lg:flex-col lg:gap-6">
      <p className="text-orange-500 font-bold uppercase text-2xl sm:text-xl lg:text-3xl font-special text-center col-span-2">
        Since 2024
      </p>

      <div className="flex justify-center items-center gap-4 sm:col-span-2 lg:col-span-1">
        <ExperienceInfo number={1} text="Year" />
        <p className="font-bold text-5xl sm:text-4xl lg:text-6xl text-[#C4A484]">
          -
        </p>
        <ExperienceInfo number={2} text="Websites" />
      </div>

      <p className="text-center text-white sm:col-span-2">
        With over 1 year of experience, I have successfully delivered dynamic
        and user-friendly web applications for various clients.
      </p>

      <div className="sm:col-span-2 flex justify-center">
        <ExperienceInfo number={2} text="Clients Worked With" />
      </div>
    </div>
  );
};

export default ExperienceTopLeft;

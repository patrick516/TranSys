import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px]">
      <p className="text-orange-500 font-bold uppercase text-3xl  font-special text-center">
        Since 2024
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={1} text="Year" />
        <p className=" font-bold  text-6xl text-[#C4A484]">-</p>
        <ExperienceInfo number={2} text="Websites" />
      </div>
      <p className="text-center text-white">
        With over 1 year of experience, I have successfully delivered dynamic
        and user-friendly web applications for various clients.
      </p>
      <ExperienceInfo number={2} text="Clients Worked With" />
    </div>
  );
};

export default ExperienceTopLeft;

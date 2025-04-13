import React from "react";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";
import ExperienceTopRight from "./ExperienceTopRight";

const ExperienceTop = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center lg:flex lg:justify-center items-center w-full">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;

import React from "react";

const SubHeroSection = () => {
  return (
    <div className=" w-full flex justify-center py-1">
      <div className="border-y border-[var(--orangeBright)] bg-[#0e5e95] text-[var(--orangeBright)] flex justify-center items-center gap-8 px-4 md:px-8 lg:px-12 xl:px-16 uppercase xl:text-4xl md:text-2xl sm:text-2xl">
        <p className="md:block hidden">Fast Learner</p>
        <p className="md:block hidden">Team Work</p>
        <p>Details Master</p>
      </div>
    </div>
  );
};

export default SubHeroSection;

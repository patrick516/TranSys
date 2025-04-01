import React from "react";

import { LuArrowDownRight } from "react-icons/lu";

const NavbarBtn = () => {
  return (
    <button className="px-4 py-2 rounded-full text-xl font-bold text-white border-cyan-100 border flex items-center gap-1 bg-gradient-to-r from-[#b3ffff] via-[#0e5e95] to-[#f97316] hover:border-[#0e5e95] hover:scale-110">
      Hire Me
      <div className="sm:hidden md:block">
        <LuArrowDownRight />
      </div>
    </button>
  );
};

export default NavbarBtn;

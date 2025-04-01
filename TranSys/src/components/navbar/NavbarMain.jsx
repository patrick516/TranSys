import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="w-full md:w-full sm:w-ful max-w-full mx-auto overflow-x-hidden px-4 fixed inset-x-0 top-0 z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full max-w-full mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange-400">
          <NavbarLogo />
          <div className="lg:block hidden">
            <NavbarLinks />
          </div>
          <NavbarBtn />
        </div>
        <div className="flex md:hidden lg:hidden sm:block p-3 bg-black items-center justify-center rounded-full border-[0.5px] border-orange-500">
          <button
            className="text-4xl p-3 border border-orange-500 rounded-full text-white"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>

      {/* Conditionally render NavbarLinks below the nav */}
      {menuOpen && (
        <div className="bg-orange-500 w-[90%] sm:w-[90%] text-white text-center py-4 fixed top-[90px] left-1/2 -translate-x-1/2 z-10 rounded-xl shadow-lg">
          <NavbarLinks />
        </div>
      )}
    </>
  );
};

export default NavbarMain;

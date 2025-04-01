import React from "react";

const NavbarLogo = () => {
  return (
    <div>
      <h1 className="max-sm:hidden sm:hidden md:block">
        <img src="/images/profile-name.webp" alt="Logo" className="w-40 h-16" />
      </h1>
      <h1 className="text-white font-special font-extrabold  text-4xl sm:black  md:hidden">
        PK
      </h1>
    </div>
  );
};

export default NavbarLogo;

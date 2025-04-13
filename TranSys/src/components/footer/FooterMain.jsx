import React from "react";

const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const FooterMain = () => {
  return (
    <div className="px-4">
      {/* Top Border */}
      <div className="w-full h-[1px] bg-[#E5E7EB]" />

      {/* Responsive layout */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 mt-4 max-w-[1200px] mx-auto">
        {/* Name */}
        <p className="text-2xl md:text-3xl text-[#E5E7EB]">Patricks Kulinji</p>

        {/* Navigation Links */}
        <ul className="flex flex-col md:flex-row gap-2 md:gap-4 text-[#E5E7EB] text-base md:text-xl">
          {links.map((item, index) => (
            <li key={index}>
              <a
                href={`#${item.section}`}
                className="hover:text-orange-500 transition-all duration-300 cursor-pointer"
              >
                {item.link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Bottom Text */}
      <p className="max-w-[1200px] mx-auto text-center md:text-right mt-4 mb-12 text-sm text-[#F3F4F6]">
        {new Date().getFullYear()} Patricks Kulinji &amp; All Rights Reserved
      </p>
    </div>
  );
};

export default FooterMain;

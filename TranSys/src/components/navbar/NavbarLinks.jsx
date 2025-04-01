import React from "react";
import { Link } from "react-scroll";
const links = [
  { link: "About Me", section: "about" },
  { link: "Skills", section: "skills" },
  { link: "Experience", section: "experience" },
  { link: "Projects", section: "projects" },
  { link: "Contact", section: "contact" },
];

const NavbarLinks = () => {
  return (
    <ul className="flex gap-6 text-white font-bold text-center lg:flex-row sm:flex-row lg:relative lg:text-md sm:text-xl sm:bg-orange-500 backdrop-blur-lg lg:bg-black sm:w-full py-4 sm:py-6">
      {links.map((link, index) => (
        <li key={index} className="group">
          <Link
            to={link.section}
            smooth={true}
            spy={true}
            duration={500}
            offset={-130}
            className="cursor-pointer text-whiter hover:text-[var(--nerve)]
            transition-all duration-500"
          >
            {link.link}
          </Link>
          <div className="mx-auto bg-[var(--nerve)] w-0 group-hover:w-full h-[1px] transition-all duration-500"></div>
        </li>
      ))}
    </ul>
  );
};

export default NavbarLinks;

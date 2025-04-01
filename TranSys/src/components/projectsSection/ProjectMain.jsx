import React from "react";
import ProjectText from "./ProjectText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Personal Portfolio Website",
    year: "2022",
    align: "right",
    image: "/images/project-portfolio.png",
    link: "#",
  },
  {
    name: "Personal Blog Website",
    year: "2023",
    align: "left",
    image: "/images/project-portfolio2.png",
    link: "#",
  },
  {
    name: "Automation System Web Portal",
    year: "2025",
    align: "right",
    image: "/images/project-oldmutual.png",
    link: "#",
  },
  {
    name: "Launchpad - FutureMultiverse",
    year: "2025",
    align: "left",
    image: "/images/project-launchpad.png",
    link: "#",
  },
];

const ProjectMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto  px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectText />
      </motion.div>
      <div className="flex flex-col gap-20  max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectMain;

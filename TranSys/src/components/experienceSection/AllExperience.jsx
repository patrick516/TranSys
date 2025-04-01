import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Frontend Developer",
    company: "ImoSys",
    date: "2024-present",
    responsibilities: [
      "I develop scalable and responsive web applications using React and Tailwind CSS.",
      "I collaborate with designers and backend teams to ensure seamless UI/UX.",
      "I optimize web performance while maintaining best coding practices.",
      "I implement reusable components for efficient and maintainable development.",
    ],
  },
  {
    job: "Full-Stack Developer",
    company: "Freelance / Personal Projects",
    date: "2024-present",
    responsibilities: [
      "I build full-stack applications using React, Node.js, Express, and MongoDB.",
      "I design and manage databases to ensure scalable and efficient data storage.",
      "I develop RESTful APIs to handle data flow between frontend and backend.",
      "I deploy and maintain applications using cloud services such as AWS and Heroku.",
    ],
  },
  {
    job: "UI/UX Developer",
    company: "Freelance / Personal Projects",
    date: "2022-present",
    responsibilities: [
      "I design user interfaces that are both intuitive and visually appealing.",
      "I conduct usability testing to ensure a seamless user experience.",
      "I work with users and stakeholders to gather requirements and feedback.",
      "I create responsive designs with mobile-first approaches using modern tools like Figma and Adobe XD.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <SingleExperience experience={experience} />
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange-500 lg:block sm:hidden" />
              </motion.div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;

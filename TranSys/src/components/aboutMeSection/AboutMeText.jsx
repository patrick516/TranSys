import React from "react";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:center md:text-left sm:text-center">
      <h2 className="text-6xl  text-orange-500 mb-10">About Me</h2>
      <p className="text-white">
        I'm Patrick, a passionate web developer specializing in <i>React</i>,
        <i>Node.js</i>, <i>MongoDB</i>, and <i>Tailwind CSS</i>. Currently, I
        contribute to cutting-edge projects at <strong>ImoSys</strong>, where I
        focus on building scalable, efficient, and user-friendly web solutions.
      </p>
      <p className="text-white">
        With a strong foundation in full-stack development, I enjoy working on
        both frontend and backend, creating seamless applications that deliver
        great user experiences. I thrive on solving complex problems, optimizing
        performance, and bringing innovative ideas to life.
      </p>
      <p className="text-white">
        I'm always eager to take on new challenges and collaborate with
        like-minded professionals to push the boundaries of software
        development. Let's connect and build something impactful together!
      </p>
      <button className="border border-amber-600 rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange-500 transition-all duration-500 cursor-pointer mx-auto text-white hover:text-[#b3ffff]">
        My Projects
      </button>
    </div>
  );
};

export default AboutMeText;

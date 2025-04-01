import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import SingleContactSocial from "./SingleContactSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial
        link="https://github.com/patrick516/"
        Icon={FaGithub}
      />
      <SingleContactSocial
        link="https://www.linkedin.com/in/patrick-kulinji-9b7172359/"
        Icon={FaLinkedin}
      />
    </div>
  );
};

export default ContactSocial;

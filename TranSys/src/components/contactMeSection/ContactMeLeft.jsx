import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-orange-500 text-2xl sm:text-3xl mb-4">
          Get In Touch
        </h2>
        <p className="text-white text-sm sm:text-base leading-relaxed">
          Interested in collaborating? Reach out and let's build something
          great.
          <br />
          You're just a few clicks away!
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactMeLeft;

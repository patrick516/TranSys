import React from "react";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div>
      <div className="flex flex-col gap-8 w-full">
        <h2 className="text-orange-500  text-3xl mb-4 ">Get In Touch</h2>
        <p className="text-white">
          Interested in collaborating? Reach out and let's build something great
          <br />
          you're just a few clicks away!
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;

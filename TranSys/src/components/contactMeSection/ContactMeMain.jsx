import React from "react";
import ContactMeLeft from "./ContactMeLeft";
import ContactMeRight from "./ContactMeRight";

const ContactMeMain = () => {
  return (
    <div
      id="contact"
      className="max-w-[1200px] mx-auto items-center justify-center mt-[100px] px-4"
    >
      <h2 className="text-6xl text-orange-500 mb-10 text-center">Contact Me</h2>

      <div className="grid sm:grid-cols-1 lg:flex lg:flex-row justify-between gap-8 bg-[#0e5e95] p-8 rounded-2xl">
        <div className="w-full">
          <ContactMeLeft />
        </div>
        <div className="w-full">
          <ContactMeRight />
        </div>
      </div>
    </div>
  );
};

export default ContactMeMain;

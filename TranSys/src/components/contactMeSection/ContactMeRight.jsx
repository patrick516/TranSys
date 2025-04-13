import React from "react";

import ContactSocial from "./ContactSocial";
import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  return (
    <div className="w-full flex flex-col gap-8 sm:gap-10 items-center lg:items-end justify-center text-center lg:text-right">
      {/* LEFT-ALIGNED IMAGE */}
      <div className="w-full flex justify-center">
        <img
          src="/images/email-icon.png"
          alt="email logo"
          className="w-[100px] sm:w-[200px] lg:ml-26  md:w-[300px] max-w-[200px]"
        />
      </div>

      {/* RIGHT-ALIGNED INFO */}
      <div className="w-full px-2 sm:px-4  md:px-0 lg:max-w-[300px]">
        <ContactInfo />
      </div>

      <div className="w-full px-2 sm:px-4 md:px-0 lg:max-w-[300px]">
        <ContactSocial />
      </div>
    </div>
  );
};

export default ContactMeRight;

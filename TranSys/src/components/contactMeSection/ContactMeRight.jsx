import React from "react";

import ContactSocial from "./ContactSocial";
import ContactInfo from "./ContactInfo";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img
        src="/images/email-icon.png"
        alt="email logo"
        className="max-w-[300px]"
      />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;

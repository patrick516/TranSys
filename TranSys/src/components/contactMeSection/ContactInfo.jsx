import React from "react";
import { AiTwotoneMail } from "react-icons/ai";
import { LuPhone } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="kulinjipatricks@gmail.com" Image={AiTwotoneMail} />
      <SingleInfo text="+265 995 049 331" Image={LuPhone} />
      <SingleInfo text="Blantyre, Malawi" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

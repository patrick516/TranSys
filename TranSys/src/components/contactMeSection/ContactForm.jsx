import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_2gaw1bt", "template_5jnnz38", form.current, {
        publicKey: "qiFKVV7m-Ckvng6Xq",
      })
      .then(
        () => {
          toast.success("Message Sent Successfully!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });

          setName("");
          setEmail("");
          setMessage("");
        },
        (error) => {
          toast.error("Failed to send message!", {
            position: "top-center",
            autoClose: 3000,
          });
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="custom-toast"
        bodyClassName="custom-toast-body"
      />
      <form
        className="flex flex-col gap-4 rounded-lg shadow-md"
        ref={form}
        onSubmit={sendEmail}
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name/Company Name"
          required
          className="h-12 rounded-lg bg-[#FAFAFA] px-2 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 focus:ring transition duration-150 ease-in-out"
          value={name}
          onChange={handleName}
        />

        <input
          name="email"
          type="email"
          id="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-[#FAFAFA] px-2 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 focus:ring transition duration-150 ease-in-out"
          value={email}
          onChange={handleEmail}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="9"
          cols="50"
          required
          className="rounded-lg bg-[#FAFAFA] px-2 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 focus:ring transition duration-150 ease-in-out resize-none" // Added resize-none
          value={message}
          onChange={handleMessage}
        />

        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

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
    <div className="w-full">
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
        ref={form}
        onSubmit={sendEmail}
        className="w-full flex flex-col gap-4 rounded-lg shadow-md px-2 sm:px-4"
      >
        <input
          name="name"
          type="text"
          placeholder="Your Name/Company Name"
          required
          className="w-full h-12 rounded-lg bg-[#FAFAFA] px-3 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 transition duration-150 ease-in-out"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="w-full h-12 rounded-lg bg-[#FAFAFA] px-3 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 transition duration-150 ease-in-out"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          name="message"
          placeholder="Message"
          rows="6"
          required
          className="w-full rounded-lg bg-[#FAFAFA] px-3 py-2 text-gray-700 font-semibold border border-gray-300 focus:border-blue-400 focus:outline-none focus:ring-blue-300 focus:ring-opacity-50 transition duration-150 ease-in-out resize-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded transition"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

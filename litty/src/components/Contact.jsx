/* eslint-disable react-refresh/only-export-components */
import React from "react";

const Contact = () => {
  return (
    <section className="p-6 dark:text-gray-100  bg-white">
      <form className="container max-w-[850px]  p-8 mx-auto space-y-6 rounded-md mb-20 shadow text-black bg-[#ebeaeaf5]  placeholder:text-black">
        <h2 className="w-full text-3xl font-bold dark:text-white">
          Contact Me{" "}
        </h2>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1 dark:text-white">
            Name{" "}
          </label>{" "}
          <input
            id="name"
            type="text"
            placeholder="Your Name"
            required=""
            className="block w-full p-3 rounded focus:outline-none bg-white border-black placeholder:text-black "
          />
        </div>{" "}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1 dark:text-white ">
            Email{" "}
          </label>{" "}
          <input
            id="email"
            type="email"
            placeholder="Your Email"
            required=""
            className="block w-full p-3 rounded focus:outline-none bg-white border placeholder:text-black "
          />
        </div>{" "}
        <div>
          <label htmlFor="message" className="block mb-1 ml-1 dark:text-white">
            Message{" "}
          </label>{" "}
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-3 rounded resize-none h-48 focus:outline-none bg-white border placeholder:text-black ">
            {" "}
          </textarea>{" "}
        </div>{" "}
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow p-3 mt-2 hover:bg-black  inline bg-white hover:text-white text-black ">
            Send{" "}
          </button>{" "}
        </div>{" "}
      </form>{" "}
    </section>
  );
};

export default Contact;

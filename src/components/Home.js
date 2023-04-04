import React from "react";
import backgroundImage from "../images/home.png";
import footerBackgroundImage from "../images/Footer-bg.png";
import apple from "../images/apple.jpg";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
const Home = () => {
  const navigate = useNavigate();

  const navigateRegistrationPage = () => {
    // 👇️ navigate to /profiles
    navigate("/registration");
  };

  return (
    <div className="sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127648.30586518982!2d36.943234298093174!3d-1.153662538208368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1680545184543!5m2!1sen!2ske"
        width="1500"
        height="650"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
        className="absolute"
      ></iframe>
      <form className="w-96">
        <div className="relative">
          <input
            type="text"
            // value={query}
            // onChange = {handleInputChange}
            placeholder="Search"
            className=" bg-white text-gray-900 rounded-full focus:border-none py-2 pr-4 pl-10 block w-full leading-5 border border-gray-300 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
          />
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center">
            <button type="submit" className="border-none">
              <svg
                className="h-5 w-5 text-green-400"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <button
            type="reset"
            className="absolute right-0 top-0 mt-3 mr-12 bg-green-600"
          >
            <svg
              className="h-4 w-4 fill-current "
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M10 0c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm5.3 14.7c-.4.4-1 .4-1.4 0l-3.9-3.9-3.9 3.9c-.4.4-1 .4-1.4 0s-.4-1 0-1.4l3.9-3.9-3.9-3.9c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l3.9 3.9 3.9-3.9c.4-.4 1-.4 1.4 0s.4 1 0 1.4l-3.9 3.9 3.9 3.9c.4.4.4 1 0 1.4z" />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Home;

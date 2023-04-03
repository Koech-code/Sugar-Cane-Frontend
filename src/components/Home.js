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

  const farmers =
    "https://sentientmedia.org/wp-content/uploads/2022/03/james-baltz-yihX4Rq-JsI-unsplash.jpg";

  const footerbg =
    "https://www.ippmedia.com/sites/default/files/articles/2022/08/03/sugarcane%20farming.jpg";
  return (
    <div className=" sm:w-full sm:h-full md:w-full md:h-full lg:w-full lg:h-full sm:text-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127648.30586518982!2d36.943234298093174!3d-1.153662538208368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f38a78cb4e50d%3A0xdaa7fad9c2cbf0fb!2sRuiru!5e0!3m2!1sen!2ske!4v1680545184543!5m2!1sen!2ske"
        width="1500"
        height="450"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="relative h-64 ">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill "
          src={farmers}
          alt="background"
        />

        {/* <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div> */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-16 mb-8 md:mb-12">
            PERFORMANCE AT ELITE LEVEL
          </h1>

          <button
            onClick={navigateRegistrationPage}
            className="px-8 py-4 bg-[#2BAE76]  text-white font-bold rounded hover:bg-green-500 hover:text-white"
          >
            GET STARTED
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-md p-4 m-8">
        <h2 className="text-lg font-bold mb-2 text-center text-blue-600">
          SPORTS SCHOLARSHIPS
        </h2>
        <p className="text-gray-600 p-8">
          Take your athletic and academic career to the next level We help
          athletes on their journey in getting a sports scholarships to study in
          the USA and advance their sports careers.
        </p>
      </div>

      <div className="flex flex-wrap justify-center">
        <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center text-blue-600">
            1. Assessment
          </h2>
          <p className="text-gray-600 p-4 lg:p-8">
            Our team consist of athletes and former athletes who evaluate your
            submitted registration requirements and if successful move you to
            the next step.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center text-blue-600">
            2. Preparation
          </h2>
          <p className="text-gray-600 p-4 lg:p-8">
            We then pair and prepare you for your prospective college by helping
            you gather requirements and other relevant material for a successful
            admission.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 lg:w-1/3">
          <h2 className="text-lg font-bold mb-2 text-center text-blue-600">
            3. Acceptance
          </h2>
          <p className="text-gray-600 p-4 lg:p-8">
            Success! You begin a new and fulfilling journey in your academic and
            athletic career in a top US college.
          </p>
        </div>
      </div>

      <div className="relative h-96">
        <img
          className="absolute top-0 left-0 w-full h-full object-cover sm:object-fill md:object-fill"
          src={footerbg}
          alt="background"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-0"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center mt-8 md:mt-16 mb-8 md:mb-12">
            TRY THE FREE ASSESSMENT
          </h1>
          <button
            onClick={navigateRegistrationPage}
            className="px-8 py-4 bg-[#2BAE76]  text-white font-bold rounded hover:bg-green-500 hover:text-white"
          >
            NOW!
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

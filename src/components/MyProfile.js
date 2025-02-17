import React, { useState } from "react";
import PersonalInformation from "./PersonalInformation";
import ContactDetails from "./ContactDetails";
import AthleteInformation from "./AthleteInformation";
import AcademicInformation from "./AcademicInformation";
import EstablishContact from "./EstablishContact";
import { Link, Outlet } from "react-router-dom";

const MyProfile = () => {
  const [formData, setFormData] = useState({});

  const handlePersonalInfoSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };

  const handleContactDetailsSubmit = (data) => {
    setFormData({ ...formData, ...data });
  };

  const [currentPage, setCurrentPage] = useState("personalInfo");

  const handleNextPage = () => {
    setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
  };

  // const handlePreviousPage = () => {
  //   setCurrentPage(currentPage === "contacts" ? "athleteInfo" : "contacts");
  // };

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-8">
      <nav className="flex flex-wrap items-center justify-between p-5 bg-gray-800">
        {/* <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-500 hover:border-gray-500"
          onClick={() => console.log("Menu Clicked!")}
        >
          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 0h20v2H0zM0 8h20v2H0zM0 16h20v2H0z"/></svg>
        </button>
      </div> */}
        <div className="list-wrapper"></div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-md lg:flex-grow ">
            {/* <a href="/feeds" >
            Feeds
            
          </a> */}
            <Link
              to="personalInfo"
              onSubmit={handlePersonalInfoSubmit}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
            >
              Personal Information
            </Link>
            <Link
              to="contacts"
              onSubmit={handleContactDetailsSubmit}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
            >
              Contact Details
            </Link>
            <Link
              to="athletesInfo"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
            >
              Academic Information
            </Link>
            <Link
              to="academicInfo"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
            >
              Achievement Information
            </Link>
            <Link
              to="establishingContact"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-500 mr-6"
            >
              Establishing Contact
            </Link>
            {/* <Outlet /> */}
          </div>
        </div>
      </nav>
      <Outlet></Outlet>
    </div>
  );
};

export default MyProfile;

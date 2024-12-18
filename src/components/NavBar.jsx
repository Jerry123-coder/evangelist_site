// import React from 'react'
// import MMRLogo from  '../assets/mmr_logo.png'
// import { Link, useLocation } from 'react-router-dom'

// const Navbar = () => {
//      const location = useLocation()
//      const menuItems = [
//           {id: 1, name: 'Home', link: ''},
//           {id: 2, name: 'About', link: 'about'},
//           {id: 3, name: 'Service', link: 'service'},
//           {id: 4, name: 'Testimonials', link: 'testimonial'},
//           {id: 4, name: 'Blog', link: 'blog'},
//           {id: 5, name: 'Contact', link: 'contact'},
//      ]

//      return (
//           <div className="flex flex-row items-center justify-between text-center bg-white px-8 py-5  -ml-8 lg:px-32 w-screen lg:-ml-32 sticky top-0");

//           {/* <div className='w-full flex justify-between items-center sticky top-0 bg-white'> */}
//                <div className="logo">
//                     <Link to={''}>
//                     <img src={MMRLogo} alt="" className='w-12 lg:w-20' />
//                     </Link>
//                </div>
//                <div className="hidden lg:flex space-x-10">
//                     {menuItems.map((item) => (
//                          <Link to={item?.link}>
//                               <p className={`${'/'+ item?.link === location.pathname ? 'text-green-600' : 'text-black'} text-sm font-semibold hover:scale-125 transition-all duration-200 ease-in-out`}>{item.name}</p>
//                          </Link>
//                     ))}
//                </div>
//                <div className="hidden lg:flex space-x-4">
//                     <button>Sign In</button>
//                     <button className='bg-transparent text-[#139c43] border-1 border-[#139c43]'>Sign Up</button>
//                </div>
//           </div>
//      )
// }

// export default Navbar

import React, { useState } from "react";
import STNLogo from "../assets/stn_logo.svg";
import evangelistLogo from "../assets/evangelist_logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import { BiChurch, BiCalendar, BiGroup } from "react-icons/bi";
import { FaChurch } from "react-icons/fa6";

import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";
import { FaVoteYea } from "react-icons/fa";
import { HiDocumentDownload } from "react-icons/hi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownMenus = {
    about: [
      { name: "History", link: "about" },
      { name: "Clergy", link: "clergy" },
      { name: "Parish Pastoral Council", link: "parish-pastorial-council" },
      { name: "Parish Youth Council", link: "parish-youth-council" },
    ],
    portals: [
      { name: "EDA Voting", link: "eda-voting", icon: <FaVoteYea className="inline-block mr-1" /> },
      { name: "Download Membership Form", link: "membership-form", icon: <HiDocumentDownload className="inline-block mr-0.5" /> },
    ],
    councils: [
      { name: "Christian sons", link: "christian-sons" },
      { name: "Christian daughters", link: "christian-daughters" },
      { name: "St.Theresa Roses", link: "st-theresa-roses" },
      { name: "Knights of St.John international cadets", link: "ksji-cadets" },
      { name: "Junior Auxiliary", link: "junior-auxiliary" },
      { name: "Junior Marshallans", link: "junior-marshallans" },
      { name: "Knights & Ladies of the Altar", link: "knights-ladies-altar" },
      { name: "Word in Motion", link: "word-in-motion" },
      {
        name: "Catholic Youth Organization",
        link: "catholic-youth-organization",
      },
    ],
  };
  const menuItems = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "About Us", link: "#", dropdownKey: "about", hasDropdown: true },
    { id: 3, name: "Societies", link: "societies" },
    { id: 7, name: "Gallery", link: "gallery" },
    { id: 8, name: "Projects", link: "projects" },
    { 
      id: 4, 
      name: "Portals", 
      link: "#", 
      dropdownKey: "portals",
      hasDropdown: true 
    },
    { id: 9, name: "Contact us", link: "contact" },
  ];

  const toggleDropdown = (key) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };
  return (
    <div className="flex flex-row items-center justify-center text-center bg-white py-3 w-screen sticky shadow-md top-0 z-50">
      <div className="flex w-full items-center justify-between px-6 lg:justify-evenly">
        <div className="logo">
          <Link to="">
            <img
              src={evangelistLogo}
              alt=""
              className="w-[9rem] lg:w-[15rem] flex items-center"
            />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-8">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="relative group"
              onMouseEnter={() =>
                item.hasDropdown && setActiveDropdown(item.dropdownKey)
              }
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {item.hasDropdown ? (
                <div
                  className="flex items-center justify-center py-2 cursor-pointer"
                  onClick={() =>
                    setActiveDropdown(
                      activeDropdown === item.dropdownKey
                        ? null
                        : item.dropdownKey
                    )
                  }
                >
                  <p
                    className={`${
                      "/" + item.link === location.pathname
                        ? "text-blue-500"
                        : "text-black"
                    } text-md font-semibold transition-all duration-200 ease-in-out flex items-center`}
                  >
                    {item.name}
                    <IoIosArrowDown
                      className={`ml-1 transition-transform duration-200 ${
                        activeDropdown === item.dropdownKey ? "rotate-180" : ""
                      }`}
                    />
                  </p>
                </div>
              ) : (
                <Link to={item.link}>
                  <p
                    className={`${
                      "/" + item.link === location.pathname
                        ? "text-blue-500"
                        : "text-black"
                    } text-md font-semibold transition-all duration-200 ease-in-out py-2`}
                  >
                    {item.name}
                  </p>
                </Link>
              )}

              {item.hasDropdown && (
                <div
                  className={`absolute top-full left-0 mt-2 w-72 bg-gray-50 shadow-xl py-3 rounded-xl border-y-4 transition-all duration-300 ease-in-out transform origin-top 
                  ${
                    activeDropdown === item.dropdownKey
                      ? "opacity-100 scale-y-100 visible"
                      : "opacity-0 scale-y-0 invisible"
                  }`}
                >
                  {/*  dropdown content */}
                  <div className="absolute -top-3 left-3 w-6 h-6 bg-white rounded-full shadow-md flex items-center justify-center">
                    {item.dropdownKey === "about" && (
                      <BiChurch className="text-blue-500" />
                    )}
                    {/* {item.dropdownKey === "dayborn" && (
                      <BiCalendar className="text-blue-500" />
                    )}
                    {item.dropdownKey === "councils" && (
                      <BiGroup className="text-blue-500" />
                    )} */}
                  </div>
                  {dropdownMenus[item.dropdownKey].map(
                    (dropdownItem, index) => (
                      <Link
                        key={index}
                        to={dropdownItem.link}
                        className="block px-10 py-2 text-sm text-gray-700 rounded-xl bg-gray-50 hover:text-blue-500 transition-colors duration-150 flex items-center justify-center"
                        onClick={() => setActiveDropdown(null)}
                      >
                        {dropdownItem.icon}
                        {dropdownItem.name}
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="hidden lg:flex flex-col justify-center">
          <button
            onClick={() => navigate("/donate")}
            className="w-[6rem] bg-blue-500 hover:bg-blue-600 text-white  hover:scale-105 rounded-full border-none focus:outline-none transition-all duration-200 ease-in-out gap-1 flex items-center justify-center h-[2rem]"
          >
            <span>Donate</span>
            <span className="w-5">
              <BiSolidDonateHeart />
            </span>
          </button>
        </div>
        {/* Mobile Menu */}
        <div className=" lg:hidden cursor-pointer font-extrabold text-2xl border-1 border-[#A61D37] hover:bg-[#d40d32]/20 rounded-full p-2 transition duration-200 ease-in items-center">
          {!isOpen ? (
            <div
              className="transition duration-400 ease-in-out text-black"
              onClick={() => setIsOpen(true)}
            >
              <AiOutlineMenu />
            </div>
          ) : (
            <div
              className="transition duration-400 ease-in-out"
              onClick={() => setIsOpen(false)}
            >
              <AiOutlineClose />
            </div>
          )}
        </div>

        <div
          className={` ${
            isOpen
              ? "fixed inset-0 bg-black opacity-80 transition duration-400 ease-in-out"
              : "hidden"
          } `}
          onClick={() => setIsOpen(false)}
        ></div>

        <div
          className={`${
            isOpen ? "translate-x-0" : "translate-x-full"
          } fixed top-0 right-0 h-screen w-full px-10 bg-blue-600 z-20 transform transition-transform duration-500 ease-in shadow-lg overflow-y-auto`}
        >
          <div className="flex w-full justify-end pt-5">
            <AiOutlineClose
              onClick={() => setIsOpen(false)}
              className="m-3 text-white text-xl"
            />
          </div>

          <ul className="py-6 mt-10">
            {menuItems.map((item) => (
              <div key={item.id} className="relative">
                {item.hasDropdown ? (
                  <div>
                    <div
                      onClick={() => toggleDropdown(item.dropdownKey)}
                      className="flex justify-center items-center gap-3 py-4 px-4 hover:bg-white/20 border-b-[1px] border-b-white/40 mx-8 cursor-pointer"
                    >
                      <span
                        className={`text-xl font-semibold ${
                          "/" + item.link === location.pathname
                            ? "text-white"
                            : "text-white/60"
                        }`}
                      >
                        {item.name}
                      </span>
                      <IoIosArrowDown
                        className={`text-white transition-transform duration-300 ${
                          activeDropdown === item.dropdownKey
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </div>

                    {activeDropdown === item.dropdownKey && (
                      <div className=" rounded-lg mx-8 my-2">
                        {dropdownMenus[item.dropdownKey].map(
                          (subItem, index) => (
                            <Link
                              key={index}
                              to={subItem.link}
                              onClick={() => setIsOpen(false)}
                              className="block py-3 px-6 text-white/80 hover:border-y-2 hover:bg-white/20 hover:text-white transition-colors duration-200 flex items-center justify-center"
                            >
                              {subItem.icon}
                              {subItem.name}
                            </Link>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.link}
                    onClick={() => setIsOpen(false)}
                    className={`block py-4 px-4 hover:bg-white/20 border-b-[1px] border-b-white/40 mx-8 cursor-pointer text-xl font-semibold ${
                      "/" + item.link === location.pathname
                        ? "text-white"
                        : "text-white/60"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}

            {/* Donate button for mobile */}
            <div className="mx-8 mt-6">
              <button
                onClick={() => {
                  navigate("/donate");
                  setIsOpen(false);
                }}
                className="w-full bg-white text-blue-600 hover:bg-blue-50 rounded-full py-3 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                <span>Donate</span>
                <BiSolidDonateHeart />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

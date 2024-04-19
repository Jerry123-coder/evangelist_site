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
//           <div className="flex flex-row items-center justify-between text-center bg-white px-8 py-5  -ml-8 lg:px-32 w-screen lg:-ml-32 sticky top-0">

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
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiSolidDonateHeart } from "react-icons/bi";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Societies", link: "societies" },
    { id: 4, name: "Programs", link: "programs" },
    { id: 5, name: "Gallery", link: "gallery" },
    { id: 5, name: "Projects", link: "projects" },
    { id: 5, name: "Contact us", link: "contact" },
    // { id: 6, name: 'Directory', link: 'directory' },
    // { id: 7, name: 'Contact', link: 'contact' },
  ];

  return (
    <div className="flex flex-row items-center justify-between text-center bg-white px-8 py-5 lg:px-[20rem] w-screen sticky shadow-md top-0 z-50">
      <div className="logo">
        <Link to="">
          <img src={evangelistLogo} alt="" className="w-[10rem] lg:w-[15rem]" />
        </Link>
      </div>
      <div className="hidden lg:flex space-x-10">
        {menuItems.map((item) => (
          <Link to={item.link} key={item.id}>
            <p
              className={`${
                "/" + item.link === location.pathname
                  ? "text-blue-500"
                  : "text-black"
              } text-md font-semibold hover:scale-110 transition-all duration-200 ease-in-out`}
            >
              {item.name}
            </p>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex space-x-4">
        <button
          onClick={() => navigate("/contact")}
          // className="bg-blue-500 hover:bg-blue-600 text-white border-1 border-[#A61D37] hover:scale-105 rounded-full py-[4px] border-none focus:outline-none transition-all duration-200 ease-in-out">Contact Us</button>
          className="w-[8rem] bg-blue-500 hover:bg-blue-600 text-white border-1 border-[#A61D37] hover:scale-105 rounded-full py-[4px] border-none focus:outline-none transition-all duration-200 ease-in-out gap-2 flex items-center justify-center"
        >
          <span>Donate</span>
          <span className="w-10">
            <BiSolidDonateHeart />
          </span>
        </button>
      </div>

      <div className=" lg:hidden cursor-pointer font-extrabold text-2xl border-1 border-[#A61D37] hover:bg-[#d40d32]/20 rounded-full p-2 transition duration-300 ease-in">
        {!isOpen ? (
          <div
            className="transition duration-400 ease-in-out"
            onClick={() => setIsOpen(true)}
          >
            <AiOutlineMenu />
          </div>
        ) : (
          <div
            className="transition duration-400 ease-in-out"
            onClick={() => setIsOpen(false)}
          >
            {" "}
            <AiOutlineClose />{" "}
          </div>
        )}
      </div>
      {/* <div className={`fixed inset-0 z-40  transform transition-transform duration-300 ease-in ${isOpen ? 'block' : 'hidden'}`}> */}
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
          isOpen ? "translate-x-full" : "translate-x-0"
        } absolute top-0 left-[-20rem] h-screen w-[20rem] bg-[#A61D37] z-20 transform transition-transform duration-500 ease-in shadow-lg`}
      >
        <ul className="py-10 mt-14">
          {menuItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <p
                onClick={() => setIsOpen(false)}
                className={`${
                  "/" + item.link === location.pathname
                    ? "text-white"
                    : "text-white/60"
                } py-4 px-4 hover:bg-white/20 border-b-[1px] border-b-white/40 mx-8  cursor-pointer text-xl font-semibold hover:text-scale-110 transition duration-500 ease-in-out`}
              >
                {item.name}
              </p>
            </Link>
          ))}
        </ul>
      </div>
    </div>

    // </div>
  );
};

export default Navbar;

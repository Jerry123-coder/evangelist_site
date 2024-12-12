import React from "react";
import evangelistLogo from "../assets/evangelist_logo.png";
import { Link } from "react-router-dom";
import mailLogo from "../assets/mail.svg";
import ytLogo from "../assets/youtube.png";
import fbLogo from "../assets/facebook.png";
import igLogo from "../assets/instagram.png";

const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Programs", link: "programs" },
    { id: 5, name: "News", link: "blog" },
  ];
  // <div className="relative z-10 flex flex-col lg:flex-row min-h-screen py-6 lg:py-12 px-4 lg:px-8 overflow-x-hidden">

  return (
    <footer className="bg-blue-800 relative py-8 px-4 lg:px-8 z-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4">
          {/* Logo and Address Section */}
          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
            <Link to="" className="mb-4">
              <img
                src={evangelistLogo}
                alt="Church Logo"
                className="w-[13rem] lg:w-[20rem]"
              />
            </Link>
            <p className="text-white text-sm text-center lg:text-left">
              26 Ntreh Street, Adenta Municipality
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="lg:w-1/3">
            <div className="flex flex-col items-center lg:items-start">
              <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-6">
                {quickLinks.map((item) => (
                  <Link
                    to={item.link}
                    key={item.id}
                    className="text-white hover:font-bold transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <p className="text-white/80 text-sm text-center lg:text-left">
                Copyright @ 2024
              </p>
            </div>
          </div>

          {/* Subscribe and Social Media Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Subscribe Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white mb-3">Subscribe To E-Bulletin</h3>
              <div className="flex w-full max-w-xs gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-md"
                />
                <button className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors">
                  Submit
                </button>
              </div>
            </div>

            {/* Social Media Section */}
            <div className="flex flex-col items-center lg:items-start">
              <h3 className="text-white mb-3">Connect With Us</h3>
              <div className="flex gap-4">
                <a
                  href="https://youtube.com/@stjohnadenta3396?si=krZXJDBWZ0e2joc8"
                  target="_blank"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={ytLogo} alt="YouTube" className="w-7" />
                </a>
                <a
                  href="https://www.facebook.com/share/T8k93kDWK6DSmknt/?mibextid=LQQJ4d"
                  target="_blank"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={fbLogo} alt="Facebook" className="w-7" />
                </a>
                <a
                  href="https://www.instagram.com/stjohntheevangelist_adenta?igsh=MTRzeTdoY3huOG95bg"
                  target="_blank"
                  className="opacity-70 hover:opacity-100 transition-opacity"
                >
                  <img src={igLogo} alt="Instagram" className="w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from "react";
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTwitter,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: FaInstagram, href: "#instagram", label: "Instagram" },
    { icon: FaYoutube, href: "#youtube", label: "Youtube" },
    { icon: FaFacebook, href: "#facebook", label: "Facebook" },
    { icon: FaTwitter, href: "#twitter", label: "Twitter" },
  ];

  const usefulLinks = [
    { title: "Departments", href: "/departments" },
    { title: "Home", href: "/" },
    { title: "Churches", href: "/churches" },
    { title: "Give", href: "/give" },
    { title: "Join Us", href: "/join" },
    { title: "Programs", href: "/programs" },
  ];

  const contactInfo = [
    { icon: FaPhone, text: "Contact Us #", href: "tel:+1234567890" },
    { icon: FaMapMarkerAlt, text: "UPSA Auditorium Madina, Accra", href: "https://maps.google.com" },
  ];

  return (
    <footer className="bg-gradient-to-r from-blue-600 to-blue-500">
      {/* Email Subscription */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 pt-8 md:pt-16 pb-4 md:pb-8 text-white">
        {/* Subscription Box */}
        <div className="bg-blue-400/30 backdrop-blur-sm rounded-2xl md:rounded-full max-w-3xl mx-auto p-4 md:p-8 -mt-8 md:-mt-24 mb-4 md:mb-16">
          <div className="text-center">
            <h2 className="text-lg md:text-2xl font-semibold mb-3 md:mb-4 text-white">
              Get The Latest Updates
            </h2>
            <div className="flex flex-col gap-2 md:gap-3 w-full max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-3 md:px-4 py-2 rounded-full bg-black/20 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm md:text-base"
              />
              <button className="w-full md:w-auto px-4 md:px-6 py-2 bg-white text-blue-500 rounded-full font-semibold hover:bg-opacity-90 transition-colors text-sm md:text-base whitespace-nowrap">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
          {/* Follow Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 ">
              Follow Us
            </h3>
            <div className="flex gap-4 justify-center sm:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-yellow-500 transition-colors text-white"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Useful Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4 text-white">
              Useful Links
            </h3>
            <ul className="space-y-2 text-white text-sm md:text-base">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:underline text-white hover:text-yellow-500">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3  text-sm md:text-base">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center text-white hover:text-yellow-500 gap-2 justify-center sm:justify-start hover:underline"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5" />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10  pt-4 text-center text-xs md:text-sm text-white">
          <p>CE Airport City ©. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
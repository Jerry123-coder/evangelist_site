import React from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { FaChurch } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div
        className="h-[200px] bg-blue-600 flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("/src/assets/contact-bg.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-3xl md:text-5xl font-bold text-white z-10 px-4 text-center">
          Contact Us
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
              <BsTelephoneFill className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Call Us
              </h3>
              <p className="text-gray-600">+233 302 321 4517</p>
              <p className="text-gray-600">+233 302 321 4517</p>
            </div>
          </div>

          {/* Office Hours */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
              <FaChurch className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600">Tuesdays - Fridays: 10:00am - 12:00pm</p>
              {/* <p className="text-gray-600">Sunday: 9:00am - 12:00pm</p> */}
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center flex flex-col items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
              <MdEmail className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Send Us an Email
              </h3>
              <p className="text-gray-600 break-all">
                parishpriest@stjohnadenta.org.gh
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-900 mb-4">SEND US A MESSAGE</h2>
        </div>

        {/* Map and Form Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="w-full h-[400px]">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15879.98462128031!2d-0.1508368!3d5.7136888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d6049054b2d%3A0xede88d57e8610474!2sSt%20John%20the%20Evangelist%20Catholic%20Church!5e0!3m2!1sen!2sgh!4v1701562272451!5m2!1sen!2sgh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-6">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <textarea
                  placeholder="How can we help you? Feel free to get in touch!"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-blue-500 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 px-6 rounded font-medium hover:bg-red-700 transition-colors"
              >
                Get in Touch
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

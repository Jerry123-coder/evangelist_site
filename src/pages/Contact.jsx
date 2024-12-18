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
          SEND US A MESSAGE
        </h1>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-8 md:py-16">
        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16">
          {/* Phone */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
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
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
            <div className="w-16 h-16 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center">
              <FaChurch className="text-white text-2xl" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-900 mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600">Tuesday-Friday:</p>
              <p className="text-gray-600">8:00am - 5:00pm</p>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center sm:text-left flex flex-col sm:flex-row items-center gap-4">
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

        {/* Map and Form Container */}
        <div className="relative lg:mt-56 ">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Map */}
            <div className="w-full h-[500px] lg:ml-24  order-2 lg:order-1">
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
            <div className="order-1  lg:order-2">
              <div className="bg-white border-2 border-gray-300 p-6 md:p-8 lg:absolute lg:right-24 lg:w-[50%] lg:-mt-52 z-20 rounded-lg">
                <h2 className="text-3xl md:text-4xl font-bold text-blue-600 mb-8">
                  Get in Touch!
                </h2>
                <form className="space-y-6">
                  <div>
                    <div className="flex items-center border-b border-gray-300">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-2 pl-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center border-b border-gray-300">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </span>
                      <input
                        type="tel"
                        placeholder="Phone"
                        className="w-full p-2 pl-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center border-b border-gray-300">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </span>
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-2 pl-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center border-b border-gray-300">
                      <span className="text-gray-400">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </span>
                      <input
                        type="text"
                        placeholder="Subject"
                        className="w-full p-2 pl-3 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <textarea
                      placeholder="How can we help you? Feel free to get in touch!"
                      rows="4"
                      className="w-full p-3 border border-gray-300 rounded focus:outline-none resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    GET IN TOUCH
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

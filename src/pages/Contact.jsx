import React from 'react';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaChurch } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div 
        className="h-[200px] bg-blue-600 flex items-center justify-center relative"
        style={{
          backgroundImage: 'url("/src/assets/contact-bg.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h1 className="text-4xl font-bold text-white z-10">Contact Us</h1>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Phone */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <BsTelephoneFill className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-gray-600">+233 302 321 4517</p>
            <p className="text-gray-600">+233 302 321 4517</p>
          </div>

          {/* Office Hours */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <FaChurch className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Office Hours</h3>
            <p className="text-gray-600">Tuesday-Friday: 8:00am - 5:00pm</p>
          </div>

          {/* Email */}
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-blue-600 rounded-full flex items-center justify-center">
              <MdEmail className="text-white text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Send Us an Email</h3>
            <p className="text-gray-600">parishpriest@stjohnadenta.org.gh</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="bg-white p-4 rounded-lg shadow-lg">
            <iframe
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15879.98462128031!2d-0.1508368!3d5.7136888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d6049054b2d%3A0xede88d57e8610474!2sSt%20John%20the%20Evangelist%20Catholic%20Church!5e0!3m2!1sen!2sgh!4v1701562272451!5m2!1sen!2sgh"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-blue-600">Get in Touch!</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <textarea
                  placeholder="How can we help you? Feel free to get in touch!"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 transition-colors"
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

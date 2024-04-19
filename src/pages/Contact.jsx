import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gray-100 px-8 py-20 lg:px-[20rem]">

      
          <h2 className="text-normal font-semibold text-slate-500">We'd love to hear from you</h2>
          <h2 className="text-4xl font-semibold mb-4">Stay Connected</h2>
          <hr className="border-gray-300 my-4" />
          
      <div className="flex flex-col lg:flex-row gap-5 container mx-auto py-8">

        
        <div className="bg-white p-8 rounded shadow-lg">
          
          <div className="flex flex-col gap-8">
            <div>
              
              {/* Google Maps Location */}
          <div className="mb-8">
            <iframe
              title="STN Ghana Location"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15879.98462128031!2d-0.1508368!3d5.7136888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9d6049054b2d%3A0xede88d57e8610474!2sSt%20John%20the%20Evangelist%20Catholic%20Church!5e0!3m2!1sen!2sgh!4v1701562272451!5m2!1sen!2sgh" 
              loading="lazy" 
              width="100%"
              height="300"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
              
            </div>

<div className='flex flex-col lg:flex-row gap-5 px-10'>
            <div className='flex-1'>
            <h2 className="text-xl font-semibold mb-2">Reach us through</h2>
            <ul className="list-disc list-inside">
                {/* <li>
                  <i className="fas fa-map-marker-alt text-gray-600 mr-2"></i>
                  House No. 76, WINNEBA ROAD, OPPOSITE ODORKOR MTTU, ACCRA-GHANA.
                </li> */}
                <li>
                  <i className="fas fa-phone text-gray-600 mr-2"></i>
                  0302325388
                </li>
                <li>
                  <i className="far fa-envelope-open text-gray-600 mr-2"></i>
                  joissamghana@yahoo.com<br />info@joissamghana.com
                </li>
              </ul>
            </div>
            <div className='flex-1'>
              <h2 className="text-xl font-semibold mb-2">Our Social Networks</h2>
              <ul className="list-disc list-inside">
                <li>
                  <i className="fab fa-facebook-f text-gray-600 mr-2"></i>
                  yourfbusername
                </li>
                <li>
                  <i className="fab fa-twitter text-gray-600 mr-2"></i>
                  @twitterhandle
                </li>
              </ul>
            </div>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Leave us a Message</h2>
          <hr className="border-gray-300 my-4" />
          <form>
            <div className="flex flex-col gap-4">
              <div className="mb-4">
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="someone@example.com"
                  required
                />
              </div>
              <div className="mb-4">
                <input
                  type="url"
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  placeholder="http://yourwebsite.com"
                />
              </div>
              <div className="mb-4">
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                  rows="4"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600  focus:outline-none focus:border-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

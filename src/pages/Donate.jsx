import React from "react";
import { project1, project2, project3, project4, project5, } from ".";

const Donate = () => {
  return (
    <div>
    <div className="w-full lg:h-[50vh] bg-green-500 relative" style={{
      backgroundImage: `url(${project3})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <div className="absolute  w-full lg:h-[50vh] bg-black bg-opacity-20 text-opacity-70 flex flex-col justify-center items-center">
       <span className="text-2xl text-center w-full  mb-10 lg:mb-2 font-semibold opacity-75 capitalize">You can support</span>
      <span className=" text-2xl text-center lg:text-left lg:text-5xl font-bold capitalize mb-5"> church project and church activities here</span>
        {/* <h2 className="text-2xl font-semibold capitalize text-blue-300 ">
        You can support this church project and various other church activities here
        </h2> */}
        <p>Scroll for More Details</p>
        {/* <button className="bg-blue-500 mt-5">CLick Here To Donate</button> */}
      </div>
  </div>
     

      <div className="bg-gray-600 px-8 py-20 lg:px-[20rem] text-black">
      <h2 className="text-4xl font-semibold mb-4">Donations To Support</h2>
      <hr className="border-gray-300 my-4" />

      <div className="flex gap-12 w-full">
        <div className="lg:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Parish Bank Accounts</h2>
          <hr className="border-gray-300 my-4" />
          <div className="text-2xl font-bold">St. John The Evangelist Catholic Church Adenta</div>

          <div className="text-xl">
            {" "}
            <div className="text-lg font-semibold mt-10">NIB Adenta Branch</div>
            <div className="flex justify-between">
              <span >USD Account for Church</span>
              <span className="text-yellow-500">5021002565901</span>
            </div>
            <div className="text-lg font-semibold mt-10">NIB Adenta Branch</div>
            <div className="flex justify-between">
              <span>GHS Account for Church</span>
              <span className="text-yellow-500">1321000220801</span>
            </div>
          </div>
        </div>
        <div>
          Image goes here
        </div>

        {/* <div className="lg:w-1/2 bg-white p-8 rounded shadow-lg">
          <h2 className="text-3xl font-semibold mb-4">Parish Bank Account</h2>
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
      </div> */}
      </div>
    </div>
    </div>
  );
};

export default Donate;

import React, { useState, useEffect } from "react";
import { project1, project2, project3, project4, project5} from ".";
import scrollIcon from "../assets/scroll-down.gif";
import scroll from "../assets/arrow.png";
import momo from "../assets/momo.jpg";

import home from "../assets/home-bg.jpg"
// import evange from "../asset/evangelist_img1.jpg"


const Donate = () => {
  const images = [project1, project2, project3, project4, project5, home];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to update the background image
  const updateBackgroundImage = () => {
    const newIndex = (currentIndex + 1) % images.length; // Loop back to the first image when reaching the end
    setCurrentIndex(newIndex);
  };

  // Use useEffect to run the updateBackgroundImage function at regular intervals
  useEffect(() => {
    const intervalId = setInterval(updateBackgroundImage, 10000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
  }, [currentIndex]);


  return (
    <div>
    <div className="w-full lg:h-[50vh]  relative" style={{
      backgroundImage: `url(${images[currentIndex]})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <div className="absolute  w-full lg:h-[50vh] bg-black bg-opacity-20 text-opacity-70 flex flex-col justify-center items-center text-white">
       <span className="text-2xl text-center w-full  mb-10 lg:mb-2 font-semibold opacity-75 capitalize" style={{ WebkitTextStroke: '1px white' }}>You can support</span>
       <div className="relative mt-3">
      <span className="absolute inset-0 text-2xl text-white lg:text-left lg:text-5xl font-bold capitalize hover:text-opacity-100 hover:text-yellow-300 hover:transition-all hover:duration-500 animate-polygon">Church projects and church activities </span>
      <span className="text-2xl text-center lg:text-left lg:text-5xl font-bold capitalize text-transparent" style={{ WebkitTextStroke: '1px white' }}>Church projects and church activities </span>
</div>

        {/* <h2 className="text-2xl font-semibold capitalize text-blue-300 ">
        You can support this church project and various other church activities here
        </h2> */}
        <p className="mt-10 " style={{ WebkitTextStroke: '1px white' }}>Scroll for More Details</p>
        <img src={scroll} alt="scroll" className=" mt-5 w-10"/>
      </div>
  </div>
     

      <div className="px-8 py-20 lg:px-[20rem] ">
      <h2 className="text-4xl font-semibold mb-4">Donations To Support</h2>
      <hr className="border-gray-300 my-4" />

      <div className="flex gap-12 w-full text-black">
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

        <div className="w-1/2 bg-white"> 
        <div className=" rounded shadow-lg">
          <div>
          <h2 className="text-3xl pt-8 pl-8 font-semibold mb-4">Mobile Money Account</h2>
          <hr className="border-gray-300 "/>
          </div>

          <div className="bg-blue-500">
          <div>
          <img src={momo}  />
          </div>
          
          <div>
          <div className="flex flex-col justify-between text-white px-4">
          <h2 className="text-2xl font-semibold mb-4">
            <span className="text-xl mr-5">Account Number:</span>0549583231</h2>
            <h2 className="text-xl font-bold mb-4">
            <span className="text-xl mr-4"> Name:</span>
            <span>Rev. Fr. Edmund Donkor-Baine</span>
            </h2>  
          
            </div>
          </div>
          </div>
          </div>

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

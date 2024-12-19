// Import necessary dependencies and assets
import React, { useState, useEffect } from "react";
import AOS from "aos";  // Animation On Scroll library
import "aos/dist/aos.css";
import Statistic from "../components/StatItem";
import thePastor from "../assets/thePastor.png";
import assistantPriest from "../assets/Assistantpriest.jpg";
import pastorUp from "../assets/pastorUp.jpg";
import reverend from "../assets/reverend.jpeg";
import Footer from "../components/Footer";

// Clergy component displays information about the church's clergy members
const Clergy = () => {
  // State to track which time period is currently selected
  const [selectedPeriod, setSelectedPeriod] = useState("2020-Present");

  // Data structure containing information about clergy members across different time periods
  const clergyData = {
    "1997-2000": {
      title: "Meet Our 1997-2000 Leadership",
      priests: [
        {
          name: "Rev Fr. Fritz Hebben, SMA",
          role: "Parochial Administrator",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2000-2002": {
      title: "Meet Our 2000-2002 Leadership",
      priests: [
        {
          name: "Rev Fr. Harrie Van Hoof, SMA",
          role: "Parochial Administrator",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2002-2004": {
      title: "Meet Our 2002-2004 Leadership",
      priests: [
        {
          name: "V. Rev Fr. Anthony R. Oppong",
          role: "Priest-in-charge",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2004-2015": {
      title: "Meet Our 2004-2015 Leadership",
      priests: [
        {
          name: "V. Rev Fr. Anthony R. Oppong",
          role: "Parochial Administrator",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2015-2016": {
      title: "Meet Our 2015-2016 Leadership",
      priests: [
        {
          name: "V. Rev Fr. Anthony R. Oppong",
          role: "Parish Priest",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2016-2020": {
      title: "Meet Our 2016-2020 Leadership",
      priests: [
        {
          name: "V. Rev Fr. John B. Mensah",
          role: "Parish Priest",
          image: pastorUp,
        },
        {
          name: "Rev Fr. Assistant",
          role: "Assistant Priest",
          image: reverend,
        },
      ],
    },
    "2020-Present": {
      title: "Meet Our Current Leadership",
      priests: [
        {
          name: "V. Rev Fr. Edmund D. Baine",
          role: "Parish Priest",
          image: thePastor,
        },
        {
          name: "Rev Fr. Joseph Effah Siaw",
          role: "Assistant Priest",
          image: assistantPriest,
        },
      ],
    },
  };

  // Initialize AOS (Animation On Scroll) when component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section - Displays the main header with background image */}
      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${pastorUp})`,
        }}
      >
        {/* Dark overlay for better text visibility */}
        <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
        
        {/* Hero text content with animations */}
        <div
          className="text-white z-10 flex flex-col items-center"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="text-2xl text-center lg:text-left lg:text-5xl font-bold">
            The Clergy
            <span
              className="text-blue-500 block"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              St John The Evangelist Catholic Church, Adenta
            </span>
          </span>
        </div>
      </div>

      {/* Leadership Section - Shows current or selected period clergy */}
      <div className="relative flex flex-col bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem] lg:py-[14rem]">
        {/* Section title with animation */}
        <span
          className="text-3xl font-bold text-left w-full"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          {clergyData[selectedPeriod].title}
        </span>

        {/* Grid of clergy members for the selected period */}
        <div className="flex flex-col lg:flex-row w-full gap-8">
          {clergyData[selectedPeriod].priests.map((priest, index) => (
            <div
              key={index}
              className="lg:w-1/2 mt-10"
              data-aos="fade-up"
              data-aos-delay={200 + index * 100}
            >
              {/* Clergy member card with hover effects */}
              <div className="relative group cursor-pointer overflow-hidden rounded-2xl h-[40rem]">
                <img
                  src={priest.image}
                  alt={priest.name}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-all duration-500"
                />
                {/* Text overlay with gradient background */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-xl font-semibold">{priest.name}</h3>
                  <p className="text-gray-300">{priest.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Past Parish Priests Section */}
        <div className="w-full mt-20 mb-24" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Parish Leadership Timeline</h2>
          
          <div className="relative max-w-full mx-auto px-8">
            {/* Timeline visualization with interactive points */}
            <div className="flex justify-between items-start relative">
              {/* Horizontal timeline connector */}
              <div className="absolute top-[3.1rem] left-0 right-0 h-[2px] bg-gray-300 z-20"></div>

              {/* Timeline Item: Fritz Hebben (1997-2000) */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">1997 - 2000</div>
                {/* Interactive timeline point with hover and selection effects */}
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("1997-2000")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "1997-2000" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "1997-2000" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                {/* Priest details */}
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                  <div className="text-sm font-semibold text-white mb-1">Rev Fr. Fritz Hebben, SMA</div>
                </div>
              </div>

              {/* Timeline Item: Harrie Van Hoof (2000-2002) */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2000 - 2002</div>
                {/* Interactive timeline point */}
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2000-2002")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2000-2002" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2000-2002" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                {/* Priest details */}
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                  <div className="text-sm font-semibold text-white mb-1">Rev Fr. Harrie Van Hoof, SMA</div>
                </div>
              </div>

              {/* Timeline Items: Anthony Richard Oppong's tenure across multiple positions */}
              {/* First position: 2002-2004 */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2002 - 2004</div>
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2002-2004")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2002-2004" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2002-2004" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Priest-in-charge</div>
                  <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
                </div>
              </div>

              {/* Second position: 2004-2015 */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2004 - 2015</div>
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2004-2015")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2004-2015" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2004-2015" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                  <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
                </div>
              </div>

              {/* Third position: 2015-2016 */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2015 - 2016</div>
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2015-2016")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2015-2016" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2015-2016" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                  <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
                </div>
              </div>

              {/* Timeline Item: John Benyah Mensah (2016-2020) */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2016 - 2020</div>
                {/* Interactive timeline point */}
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2016-2020")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2016-2020" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2016-2020" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                {/* Priest details */}
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                  <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. John B. Mensah</div>
                </div>
              </div>

              {/* Timeline Item: Current Leadership (2020-Present) */}
              <div className="relative flex flex-col items-center w-40">
                <div className="text-white/80 text-xs mb-2">2020 - Present</div>
                {/* Interactive timeline point */}
                <div 
                  className="w-6 h-6 rounded-full relative cursor-pointer hover:scale-110 transition-transform"
                  onClick={() => setSelectedPeriod("2020-Present")}
                >
                  <div className={`absolute inset-0 ${selectedPeriod === "2020-Present" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                  <div className="absolute inset-[2px] bg-white rounded-full"></div>
                  <div className={`absolute inset-[4px] ${selectedPeriod === "2020-Present" ? "bg-blue-500" : "bg-gray-300"} rounded-full`}></div>
                </div>
                {/* Priest details */}
                <div className="mt-4">
                  <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                  <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Edmund D. Baine</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export the Clergy component for use in other parts of the application
export default Clergy;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Statistic from "../components/StatItem";
import statImage from "../assets/stn_image2.jpg";
import thePastor from "../assets/thePastor.png";
import assistantPriest from "../assets/Assistantpriest.jpg";
import dr from "../assets/dr.jpeg";
import Footer from "../components/Footer";
const Clergy = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      >
        <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
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

      {/* Leadership Section */}
      <div className="relative flex flex-col bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem] lg:py-[14rem]">
        <span
          className="text-3xl font-bold text-left w-full"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          Meet Our Leadership
        </span>

        <div className="flex flex-col lg:flex-row w-full gap-8">
          {/* Parish Priest Card */}
          <div
            className="relative flex-1 group"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div
              className="bg-slate-200 sm:h-[40rem] h-[20rem] rounded-lg relative overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${thePastor})`,
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute bottom-0 bg-black w-full text-yellow-500 opacity-0  transition-opacity duration-300 rounded-b-lg px-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <h2 className="font-bold text-lg pt-4">
                  Very Rev. Fr. Edmund Donkor-Baine
                </h2>
                <p className="text-white pb-5">Parish Priest</p>
              </div>
            </div>
          </div>

          {/* Assistant Priest Card */}
          <div
            className="relative flex-1 group"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div
              className="bg-slate-200 sm:h-[40rem] h-[20rem] rounded-lg relative overflow-hidden transform transition-transform duration-500 hover:scale-105"
              style={{
                backgroundImage: `url(${assistantPriest})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
              }}
            >
              <div
                className="absolute bottom-0 bg-black w-full text-yellow-500 opacity-0  transition-opacity duration-300 rounded-b-lg px-2"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <h2 className="font-bold text-lg pt-4">
                  Rev. Fr. Joseph Effah Siaw
                </h2>
                <p className="text-white pb-5">
                  Assisting Priest and Youth Chaplain
                </p>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>

      {/* Past Parish Priests Section */}
      <div className="w-full mt-20 mb-24" data-aos="fade-up" data-aos-delay="200">
        <h2 className="text-3xl font-bold mb-12 text-white text-center">Parish Leadership Timeline</h2>
        
        <div className="relative max-w-full mx-auto px-8">
          {/* Timeline items */}
          <div className="flex justify-between items-start relative">
            {/* Timeline line - positioned to start and end at circles */}
            <div className="absolute top-[3.1rem] left-0 right-0 h-[2px] bg-gray-300 z-20"></div>

            {/* Fritz Hebben - Earliest */}
            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">1997 - 2000</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                <div className="text-sm font-semibold text-white mb-1">Rev Fr. Fritz Hebben, SMA</div>
              </div>
            </div>

            {/* Harrie Van Hoof */}
            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2000 - 2002</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                <div className="text-sm font-semibold text-white mb-1">Rev Fr. Harrie Van Hoof, SMA</div>
              </div>
            </div>

            {/* Anthony Richard Oppong - Multiple Positions */}
            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2002 - 2004</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Priest-in-charge</div>
                <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
              </div>
            </div>

            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2004 - 2015</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parochial Administrator</div>
                <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
              </div>
            </div>

            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2015 - 2016</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Anthony R. Oppong</div>
              </div>
            </div>

            {/* John Benyah Mensah */}
            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2016 - 2020</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-gray-300 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-gray-300 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. John B. Mensah</div>
              </div>
            </div>

            {/* Current Priest */}
            <div className="relative flex flex-col items-center w-40">
              <div className="text-white/80 text-xs mb-2">2020 - Present</div>
              <div className="w-6 h-6 rounded-full relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full"></div>
                <div className="absolute inset-[2px] bg-white rounded-full"></div>
                <div className="absolute inset-[4px] bg-blue-500 rounded-full"></div>
              </div>
              <div className="mt-4">
                <div className="text-white/90 font-medium text-xs mb-1">Parish Priest</div>
                <div className="text-sm font-semibold text-white mb-1">V. Rev Fr. Edmund D. Baine</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clergy;

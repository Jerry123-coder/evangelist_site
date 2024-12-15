import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Statistic from "../components/StatItem";
import statImage from "../assets/stn_image2.jpg";
import thePastor from "../assets/thePastor.png";
import reverend from "../assets/reverend.jpeg";
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
                backgroundImage: `url(${reverend})`,
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
    </div>
  );
};

export default Clergy;

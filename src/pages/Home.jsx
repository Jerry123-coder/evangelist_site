import { motion } from "framer-motion";
import stn_image1 from "../assets/stn_image1.jpg";
import stn_image2 from "../assets/stn_image2.jpg";
import stn_image3 from "../assets/stn_image3.jpg";
import stanford_man from "../assets/stanford_man.png";
import thePastor from "../assets/thePastor.png";
import statImage from "../assets/stn_image2.jpg";
import stanford from "../assets/stanford_bg.png";
import Statistic from "../components/StatItem";
import PartnerCarousel from "../components/PartnerCarousel";
import VideoPlayer from "../components/VideoPlayer";
import Testimonial from "../components/Testimonial";
import { useNavigate } from "react-router-dom";
import imgBar from "../assets/imageBar.svg";
import { FaBible, FaCalendarAlt, FaChurch, FaUserClock } from "react-icons/fa";
import { useRef, useState, useEffect } from "react";
import ProgramCard from "../components/ProgramCard";
import NewsCard from "../components/NewsCard";
import homeBg from "../assets/home-bg.jpg";
import img1 from "../assets/img1.jpg";
import programme from "../assets/programme.jpg";
import programme1 from "../assets/programme1.jpg";
import programme2 from "../assets/programme2.jpg";
import programme3 from "../assets/programme3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();
  const [isChurchHovered, setIsChurchHovered] = useState(false);
  const [isReadingHovered, setIsReadingHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const newsContainerRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleBulletinDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/19aR4o7fNhLSd9-bWaLQRDIzx1yGnDCgH/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };

  const handleScroll = (event) => {
    const container = newsContainerRef.current;
    container.scrollLeft += event.deltaY;
  };

  const static_bg = {
    image: homeBg,
    subtext: "ST JOHN THE EVANGELIST CATHOLIC CHURCH, ADENTA",
    emphasis: " Ghana",
    maintext: "WELCOME HOME",
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative h-screen lg:h-[100vh] w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${static_bg.image})` }}
          data-aos="zoom-in"
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

        <div className="relative h-full flex items-center justify-center">
          <div className="text-white text-center z-10 w-[60rem] flex flex-col gap-5 p-8 lg:p-0">
            <div
              className="text-xs lg:text-2xl px-8 invisible lg:visible lg:mb-8 font-base"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {static_bg.subtext}
            </div>

            <p
              className="text-6xl lg:text-8xl font-bold w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              {static_bg.maintext}
            </p>

            <div
              className="flex space-x-10 justify-center mt-10"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <button className="bg-blue-500 w-[12rem] h-[3rem] text-lg text-white rounded-full hover:scale-105 hover:bg-blue-600 transition-all duration-300">
                I'm New Here
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Pastor Section */}
      <div className="flex flex-col lg:flex-row h-[90vh] w-screen lg:pt-[3rem] px-8 lg:px-[10rem]">
        <div
          className="hidden lg:relative lg:flex w-full lg:w-1/2 h-[40rem] z-30"
          data-aos="fade-left"
        >
          <img
            src={thePastor}
            alt="Image of Pastor"
            className="px-10 pt-10 h-full object-cover "
          />
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/2 lg:pr-10 py-20">
          <h3
            className="text-3xl uppercase lg:text-3xl font-bold pb-5 lg:w-full text-white text-center flex flex-col lg:flex-row"
            data-aos="fade-down"
          >
            <span>A Message From </span>
            <span> The Pastor</span>
          </h3>
          <p
            className="flex flex-col text-lg mb-5 text-justify lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <span>
              I am delighted to warmly welcome you to our homepage. You have
              come to the right place at the right time. Here, we are very
              passionate about your eternal destiny and committed to your
              spiritual welfare.
            </span>
            <span className="mt-5">
              As you continue to explore and enjoy the riches of grace uncovered
              through our numerous materials and online resources, may the Lord
              continue to richly bless you (Amen).
            </span>
          </p>
          <div
            className="flex flex-col lg:w-full text-slate-900"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <span className="font-bold text-lg text-white/40">
              Very Rev. Fr. Edmund Donkor-Baine
            </span>
            <span className="text-sm text-white/40">Parish Priest</span>
          </div>
        </div>
      </div>

      {/* Quick Links Section */}
      {/* Quick Links Section */}
      <div
        className="relative bg-cover bg-center z-10 py-20"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex flex-col gap-10 p-8 justify-center items-center lg:px-[20rem]">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Church Activities Card */}
            <div
              className="w-full lg:w-[30rem]"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div
                className="h-[8rem] lg:h-[15rem] text-gray-950 bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-300"
                onMouseEnter={() => setIsChurchHovered(true)}
                onMouseLeave={() => setIsChurchHovered(false)}
              >
                <div
                  className={`${
                    isChurchHovered ? "scale-125 text-white" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem] transition-all duration-300`}
                >
                  <FaChurch />
                </div>
                <div>
                  <div className="text-lg lg:text-4xl font-bold">
                    Parish Activities
                  </div>
                  <div className="text-s lg:text-xl">
                    Mass times, sacraments and other schedules
                  </div>
                </div>
              </div>
            </div>

            {/* Daily Reading Card */}
            <div
              className="w-full lg:w-[30rem]"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                className="h-[8rem] lg:h-[15rem] text-black bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-300"
                onMouseEnter={() => setIsReadingHovered(true)}
                onMouseLeave={() => setIsReadingHovered(false)}
              >
                <div
                  className={`${
                    isReadingHovered ? "scale-125 text-white" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem] transition-all duration-300`}
                >
                  <FaBible />
                </div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Daily Reading
                  </div>
                  <div className="text-sm lg:text-xl">
                    Access and meditate on the readings for today
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Office Hours Card */}
            <div
              className="w-full lg:w-[30rem]"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div
                className="h-[8rem] lg:h-[15rem] text-gray-950 bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-300"
                onMouseEnter={() => setIsOfficeHovered(true)}
                onMouseLeave={() => setIsOfficeHovered(false)}
              >
                <div
                  className={`${
                    isOfficeHovered ? "scale-125 text-white" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem] transition-all duration-300`}
                >
                  <FaUserClock />
                </div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Office Hours
                  </div>
                  <div className="text-sm lg:text-xl">
                    Learn more about parish working hours
                  </div>
                </div>
              </div>
            </div>

            {/* Parish Calendar Card */}
            <div
              className="w-full lg:w-[30rem] text-black"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div
                className="h-[8rem] lg:h-[15rem] bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer hover:bg-yellow-400 hover:text-white transition-all duration-300"
                onMouseEnter={() => setIsCalenderHovered(true)}
                onMouseLeave={() => setIsCalenderHovered(false)}
              >
                <div
                  className={`${
                    isCalenderHovered ? "scale-125 text-white" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem] transition-all duration-300`}
                >
                  <FaCalendarAlt />
                </div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Parish Calendar
                  </div>
                  <div className="text-sm lg:text-xl">
                    Highlights of important dates for the year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Updates Section */}
      <div
        ref={newsContainerRef}
        onWheel={handleScroll}
        className="flex flex-col w-screen py-20 px-[2rem]  md:px-[5rem]"
      >
        <div className="text-2xl font-bold w-full" data-aos="fade-up">
          Latest Updates
        </div>

        <div className="flex flex-wrap justify-center flex-col lg:flex-row lg:justify-center gap-x-[2%] gap-y-8 overflow-hidden w-full py-2 px-0.5">
          <div data-aos="fade-up" data-aos-delay="0">
            <ProgramCard programme={programme} title="25th Anniversary" />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <ProgramCard
              programme={programme1}
              title="Evangelist School Visitation"
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="400">
            <ProgramCard programme={programme2} title="Pentecost Novena" />
          </div>
          <div data-aos="fade-up" data-aos-delay="600">
            <ProgramCard programme={programme3} title="Youth Quiz" />
          </div>
        </div>
      </div>

      {/* E-Bulletin Section */}
      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{ backgroundImage: `url(${statImage})` }}
      >
        <div className="absolute z-2 inset-0 bg-black opacity-60"></div>

        <div
          className="text-white z-10 flex flex-col justify-center m-auto"
          data-aos="fade-up"
        >
          <div className="text-xl md:text-4xl text-center w-full mb-5 lg:mb-10 font-semibold flex items-center justify-center">
            Download Church E-Bulletin
          </div>

          <button
            onClick={handleBulletinDownload}
            className="w-full md:w-[30rem] h-[4rem] bg-blue-500 items-center flex justify-center font-bold text-xl rounded-full cursor-pointer hover:scale-105 hover:bg-yellow-400 transition-all duration-300"
          >
            Click here to download
          </button>
        </div>
      </div>

      {/* Floating Image Bar */}
      <img
        src={imgBar}
        className="absolute top-[30rem] -left-32 opacity-100 invisible lg:visible shrink"
        data-aos="fade-right"
        data-aos-delay="500"
      />
    </div>
  );
};

export default Home;

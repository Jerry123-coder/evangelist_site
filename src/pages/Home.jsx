import stn_image1 from "../assets/stn_image1.jpg";
import stn_image2 from "../assets/stn_image2.jpg";
import stn_image3 from "../assets/stn_image3.jpg";
import thePastor from "../assets/thePastor.png";
import statImage from "../assets/stn_image2.jpg";
import homeBg from "../assets/home-bg.jpg";
import img1 from "../assets/img1.jpg";
import imgBar from "../assets/imageBar.svg";
import programme from "../assets/programme.jpg";
import programme1 from "../assets/programme1.jpg";
import programme2 from "../assets/programme2.jpg";
import programme3 from "../assets/programme3.jpg";

import Statistic from "../components/StatItem";
import PartnerCarousel from "../components/PartnerCarousel";
import VideoPlayer from "../components/VideoPlayer";
import Testimonial from "../components/Testimonial";
import ProgramCard from "../components/ProgramCard";
import NewsCard from "../components/NewsCard";

import { useNavigate } from "react-router-dom";
import { FaBible, FaCalendarAlt, FaChurch, FaUserClock } from "react-icons/fa";
import { useRef, useState } from "react";

const Home = () => {
  const navigate = useNavigate();
  const [isChurchHovered, setIsChurchHovered] = useState(false);
  const [isReadingHovered, setIsReadingHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const newsContainerRef = useRef(null);

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
      <div className="">
        <div
          className={` relative h-screen lg:h-[100vh] w-full bg-cover bg-center flex items-center justify-center lg:overflow-hidden `}
          style={{
            backgroundImage: `url(${static_bg.image})`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-60 h-screen lg:h-screen"></div>
          <div className="text-white text-center z-10 w-[60rem] flex flex-col gap-5 p-8 lg:p-0">
            <div className="text-xs lg:text-2xl px-8 invisible lg:visible lg:mb-8 font-base">
              {static_bg.subtext}
            </div>
            <p className="text-6xl lg:text-8xl font-bold w-full">
              {static_bg.maintext}
            </p>
            <div className="flex space-x-10 justify-center mt-10">
              <button className="bg-blue-500 w-[12rem] h-[3rem] text-lg hover:bg-blue-600 text-white border-1 border-[#A61D37] hover:scale-105 rounded-full py-[4px] border-none transition-all duration-200 ease-in-out">
                I'm New Here
              </button>
            </div>
          </div>
        </div>
      </div>

      <img
        src={imgBar}
        className="absolute top-[30rem] -left-32 opacity-100 invisible lg:visible shrink"
      />
      <div className="flex flex-col lg:flex-row h-[90vh] w-screen lg:pt-[3rem] px-8 lg:px-[10rem]">
        <div className="hidden lg:relative lg:flex w-full lg:w-1/2 h-[40rem] overflow-hidden">
          <img
            src={thePastor}
            alt="Image of Pastor"
            className="px-10 pt-10 h-full object-cover overflow-hidden invisible lg:visible"
          />
        </div>

        <div className="flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/2 lg:pr-10 py-20">
          <h3 className="text-3xl uppercase lg:text-3xl font-bold pb-5 lg:w-full text-slate-900 text-center flex flex-col lg:flex-row">
            <span>A Message From </span>
            <span>The Pastor</span>
          </h3>
          <p className="flex flex-col text-lg mb-5 text-justify lg:text-left">
            <span>
              I am delighted to warmly welcome you to our homepage. You have
              come to the right place at the right time. Here, we are very
              passionate about your eternal destiny and committed to your
              spiritual welfare. This is a website that has a lot to offer you
              with unlimited access to life-transforming, systematic and
              expository teaching of the word of God and resources specifically
              tailored to meet your own spiritual needs; deepen your walk with
              God and add value to your entire life.
            </span>
            <span className="mt-5">
              As you continue to explore and enjoy the riches of grace uncovered
              through our numerous materials and online resources, may the Lord
              continue to richly bless you (Amen).
            </span>
          </p>
          <div className="flex flex-col lg:w-full text-slate-900">
            <span className="font-bold text-lg">
              Very Rev. Fr. Edmund Donkor-Baine
            </span>
            <span className="text-sm">Parish Priest</span>
          </div>
        </div>
      </div>

      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center gap-5 w-screen px-8 lg:px-[20rem] lg:p-[15rem] items-center justify-center"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        <div className="absolute z-2 inset-0 bg-black opacity-70"></div>
        <div className="flex flex-col gap-5 py-10">
          <div className="flex flex-col lg:flex-row gap-5">
            <div className="text-white z-10 flex flex-col items-center">
              <div
                className="w-full lg:w-[30rem] h-[8rem] lg:h-[15rem] bg-white rounded text-black flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer transition duration-200 ease-in hover:bg-yellow-500 hover:text-white"
                onMouseEnter={() => setIsChurchHovered(true)}
                onMouseLeave={() => setIsChurchHovered(false)}
              >
                <div
                  className={`${
                    isChurchHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isChurchHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
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

            <div className="text-white z-10 flex flex-col items-center">
              <a
                href="https://bible.usccb.org/daily-bible-reading"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div
                  className="w-full lg:w-[30rem] h-[8rem] lg:h-[15rem] bg-white rounded text-black flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer transition duration-200 ease-in hover:bg-yellow-500 hover:text-white"
                  onMouseEnter={() => setIsReadingHovered(true)}
                  onMouseLeave={() => setIsReadingHovered(false)}
                >
                  <div
                    className={`${
                      isReadingHovered ? "animate-bounce" : "text-blue-500"
                    } text-[3.8rem] lg:text-[5rem] `}
                    style={{
                      transform: isReadingHovered ? "scale(1.2)" : "scale(1)",
                      transition: "transform 1s ease-in",
                    }}
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
              </a>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            <div className="text-white z-10 flex flex-col items-center">
              <div
                className="w-full lg:w-[30rem] h-[8rem] lg:h-[15rem] bg-white rounded text-black flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer transition duration-200 ease-in hover:bg-yellow-500 hover:text-white"
                onMouseEnter={() => setIsOfficeHovered(true)}
                onMouseLeave={() => setIsOfficeHovered(false)}
              >
                <div
                  className={`${
                    isOfficeHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isOfficeHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaUserClock />
                </div>
                <div>
                  <div className="text-lg lg:text-4xl font-bold">
                    Parish Office
                  </div>
                  <div className="text-sm lg:text-xl">
                    Opening hours, location and how to reach us
                  </div>
                </div>
              </div>
            </div>

            <div className="text-white z-10 flex flex-col items-center">
              <div
                className="w-full lg:w-[30rem] h-[8rem] lg:h-[15rem] bg-white rounded text-black flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer transition duration-200 ease-in hover:bg-yellow-500 hover:text-white"
                onMouseEnter={() => setIsCalenderHovered(true)}
                onMouseLeave={() => setIsCalenderHovered(false)}
                onClick={handleBulletinDownload}
              >
                <div
                  className={`${
                    isCalenderHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isCalenderHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaCalendarAlt />
                </div>
                <div>
                  <div className="text-lg lg:text-4xl font-bold">
                    Bulletin
                  </div>
                  <div className="text-sm lg:text-xl">
                    Download the latest bulletin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 py-10 lg:px-[10rem] w-screen">
        <Statistic />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10 px-8 lg:px-[10rem] py-10 w-screen">
        <div className="w-full">
          <h3 className="text-2xl uppercase text-center lg:text-4xl font-bold pb-5 text-slate-900">
            Our Programmes
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-10 lg:gap-5 px-8 lg:px-[5rem]">
            <ProgramCard
              image={programme1}
              title="Programme 1"
              description="Description of programme 1."
            />
            <ProgramCard
              image={programme2}
              title="Programme 2"
              description="Description of programme 2."
            />
            <ProgramCard
              image={programme3}
              title="Programme 3"
              description="Description of programme 3."
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 lg:px-[10rem] py-10 w-screen bg-gray-200">
        <div className="w-full">
          <h3 className="text-2xl uppercase text-center lg:text-4xl font-bold pb-5 text-slate-900">
            Latest News
          </h3>
          <div
            className="w-full flex overflow-x-scroll py-10 lg:px-[5rem] scrollbar-hide"
            ref={newsContainerRef}
            onWheel={handleScroll}
          >
            <div className="flex flex-col lg:flex-row gap-10">
              <NewsCard
                image={stn_image1}
                title="News Item 1"
                description="Brief description of news item 1."
              />
              <NewsCard
                image={stn_image2}
                title="News Item 2"
                description="Brief description of news item 2."
              />
              <NewsCard
                image={stn_image3}
                title="News Item 3"
                description="Brief description of news item 3."
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 px-8 lg:px-[10rem] py-10 w-screen">
        <Testimonial />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 px-8 lg:px-[10rem] py-10 w-screen">
        <VideoPlayer />
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-5 px-8 lg:px-[10rem] py-10 w-screen">
        <PartnerCarousel />
      </div>
    </div>
  );
};

export default Home;

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
import { Link } from "react-router-dom";

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
      <div
        className="relative bg-cover bg-center z-10 py-20"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <div className="relative z-10 flex flex-col gap-10 p-8 justify-center items-center lg:px-[20rem]">
          <div className="flex flex-col lg:flex-row gap-5">
            {/* Church Activities Card */}
            <Link
              to={"/parish-activities"}
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
            </Link>

            {/* Daily Reading Card */}
            <Link
              to={"/daily-reading"}
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
            </Link>
          </div>

          <div className="flex flex-col lg:flex-row gap-5">
            {/* Office Hours Card */}
            <Link
              to={"/office-hours"}
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
            </Link>

            {/* Parish Calendar Card */}
            <Link
              to={"/parish-calender"}
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
            </Link>
          </div>
        </div>
      </div>
      
      {/* Theme Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" data-aos="fade-up">THEME FOR THE YEAR</h2>
        <div className="max-w-4xl mx-auto px-4" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
            HELPING CHILDREN TO SEEK CHRIST: FROM<br />
            DISCOVERY TO DISCIPLESHIP.
          </h3>
          <p className="text-lg text-yellow-400">JOHN 12:21</p>
        </div>
      </div>
      
      {/* Societies Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src={stn_image2}
                alt="Church Society"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h4 className="text-lg text-blue-600 font-medium">FELLOWSHIP</h4>
              <h2 className="text-2xl md:text-3xl font-bold">Societies</h2>
              <p className="text-white-600">
                At St John the Evangelist Catholic Church, we believe in the power of community and fellowship. Our diverse societies offer parishioners the opportunity to grow in their faith while serving others in meaningful ways. Whether you're looking to engage more deeply with your faith, participate in service projects, or simply connect with like-minded individuals, there's a place for you here.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                JOIN A SOCIETY
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mass Schedule Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us For Mass</h2>
              <p className="text-gray-200">
                We warmly invite you to join us for Mass and experience the richness of our liturgical celebrations. Our Mass schedule is designed to accommodate the diverse needs of our community. Whether you prefer morning, midday, or evening services, you will find a time that suits you.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">SUNDAY MASS SCHEDULE</h3>
                <ul className="space-y-2">
                  <li>• Early Morning Mass - 7:00am</li>
                  <li>• Main Mass - 9:30am</li>
                </ul>
                <h3 className="text-xl font-semibold text-yellow-400 mt-6">DAILY MASS SCHEDULE</h3>
                <ul className="space-y-2">
                  <li>• Tuesdays - 6:00am</li>
                  <li>• Wednesday to Friday - 7:00pm</li>
                  <li>• Saturday - 6:30am</li>
                </ul>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src={stn_image3}
                alt="Mass Celebration"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 p-6">
                <h3 className="text-xl font-bold mb-2">Join Us</h3>
                <p className="text-sm mb-4">Join us in the celebration of the Holy Mass and be part of our Mass schedule.</p>
                <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  LEARN MORE
                </button>
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

        {/* <div
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
        </div> */}
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

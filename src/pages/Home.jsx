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
import { useRef, useState } from "react";
import ProgramCard from "../components/ProgramCard";
import NewsCard from "../components/NewsCard";
import homeBg from "../assets/home-bg.jpg";
import img1 from "../assets/img1.jpg";
import programme from "../assets/programme.jpg";
import programme1 from "../assets/programme1.jpg";
import programme2 from "../assets/programme2.jpg";
import programme3 from "../assets/programme3.jpg";

const Home = () => {
  const navigate = useNavigate();
  const [isChurchHovered, setIsChurchHovered] = useState(false);
  const [isReadingHovered, setIsReadingHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const newsContainerRef = useRef(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  const cardHover = {
    hover: {
      scale: 1.05,
      backgroundColor: "#FCD34D",
      color: "white",
      transition: { duration: 0.3 },
    },
  };

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
    <motion.div initial="hidden" animate="visible">
      {/* Hero Section */}
      <motion.div
        className="relative h-screen lg:h-[100vh] w-full"
        variants={fadeInUp}
      >
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${static_bg.image})` }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </motion.div>

        <motion.div
          className="relative h-full flex items-center justify-center"
          variants={staggerContainer}
        >
          <motion.div
            className="text-white text-center z-10 w-[60rem] flex flex-col gap-5 p-8 lg:p-0"
            variants={staggerContainer}
          >
            <motion.div
              className="text-xs lg:text-2xl px-8 invisible lg:visible lg:mb-8 font-base"
              variants={fadeInUp}
            >
              {static_bg.subtext}
            </motion.div>

            <motion.p
              className="text-6xl lg:text-8xl font-bold w-full"
              variants={fadeInUp}
            >
              {static_bg.maintext}
            </motion.p>

            <motion.div
              className="flex space-x-10 justify-center mt-10"
              variants={fadeInUp}
            >
              <motion.button
                className="bg-blue-500 w-[12rem] h-[3rem] text-lg text-white rounded-full"
                whileHover={{ scale: 1.05, backgroundColor: "#3B82F6" }}
                whileTap={{ scale: 0.95 }}
              >
                I'm New Here
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Pastor Section */}
      <motion.div
        className="flex flex-col lg:flex-row h-[90vh] w-screen lg:pt-[3rem] px-8 lg:px-[10rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div
          className="hidden lg:relative lg:flex w-full lg:w-1/2 h-[40rem]"
          variants={slideIn}
        >
          <motion.img
            src={thePastor}
            alt="Image of Pastor"
            className="px-10 pt-10 h-full object-cover z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/2 lg:pr-10 py-20"
          variants={fadeInUp}
        >
          <motion.h3
            className="text-3xl uppercase lg:text-3xl font-bold pb-5 lg:w-full text-white text-center flex flex-col lg:flex-row"
            variants={fadeInUp}
          >
            <span>A Message From </span>
            <span> The Pastor</span>
          </motion.h3>
          <motion.p
            className="flex flex-col text-lg mb-5 text-justify lg:text-left"
            variants={fadeInUp}
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
          </motion.p>
          <motion.div
            className="flex flex-col lg:w-full text-slate-900"
            variants={fadeInUp}
          >
            <span className="font-bold text-lg">
              Very Rev. Fr. Edmund Donkor-Baine
            </span>
            <span className="text-sm">Parish Priest</span>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Quick Links Section */}
      <motion.div
        className="relative bg-cover bg-center z-10 py-20"
        style={{ backgroundImage: `url(${img1})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>

        <motion.div
          className="relative z-10 flex flex-col gap-10 p-8 justify-center items-center lg:px-[20rem]"
          variants={staggerContainer}
        >
          <motion.div className="flex flex-col lg:flex-row gap-5">
            {/* Church Activities Card */}
            <motion.div className="w-full lg:w-[30rem]" variants={fadeInUp}>
              <motion.div
                className="h-[8rem] lg:h-[15rem] text-gray-950  bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer"
                whileHover={cardHover.hover}
                onMouseEnter={() => setIsChurchHovered(true)}
                onMouseLeave={() => setIsChurchHovered(false)}
              >
                <motion.div
                  animate={isChurchHovered ? { scale: 1.2 } : { scale: 1 }}
                  className={`${
                    isChurchHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isChurchHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaChurch />
                </motion.div>
                <div>
                  <div className="text-lg lg:text-4xl  font-bold">
                    Parish Activities
                  </div>
                  <div className="text-s lg:text-xl">
                    Mass times, sacraments and other schedules
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Daily Reading Card */}
            <motion.div className="w-full lg:w-[30rem]" variants={fadeInUp}>
              <motion.div
                className="h-[8rem] lg:h-[15rem] text-black bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer"
                whileHover={cardHover.hover}
                onMouseEnter={() => setIsReadingHovered(true)}
                onMouseLeave={() => setIsReadingHovered(false)}
              >
                <motion.div
                  animate={isReadingHovered ? { scale: 1.2 } : { scale: 1 }}
                  className={`${
                    isReadingHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isReadingHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaBible />
                </motion.div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Daily Reading
                  </div>
                  <div className="text-sm lg:text-xl">
                    Access and meditate on the readings for today
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="flex flex-col lg:flex-row gap-5">
            {/* Office Hours Card */}
            <motion.div className="w-full lg:w-[30rem]" variants={fadeInUp}>
              <motion.div
                className="h-[8rem] lg:h-[15rem] text-gray-950 bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer"
                whileHover={cardHover.hover}
                onMouseEnter={() => setIsOfficeHovered(true)}
                onMouseLeave={() => setIsOfficeHovered(false)}
              >
                <motion.div
                  animate={isOfficeHovered ? { scale: 1.2 } : { scale: 1 }}
                  className={`${
                    isOfficeHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isOfficeHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaUserClock />
                </motion.div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Office Hours
                  </div>
                  <div className="text-sm lg:text-xl">
                    Learn more about parish working hours
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Parish Calendar Card */}
            <motion.div
              className="w-full lg:w-[30rem] text-black"
              variants={fadeInUp}
            >
              <motion.div
                className="h-[8rem] lg:h-[15rem] bg-white rounded flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer"
                whileHover={cardHover.hover}
                onMouseEnter={() => setIsCalenderHovered(true)}
                onMouseLeave={() => setIsCalenderHovered(false)}
              >
                <motion.div
                  animate={isCalenderHovered ? { scale: 1.2 } : { scale: 1 }}
                  className={`${
                    isCalenderHovered ? "animate-bounce" : "text-blue-500"
                  } text-[3.8rem] lg:text-[5rem]`}
                  style={{
                    transform: isCalenderHovered ? "scale(1.2)" : "scale(1)",
                    transition: "transform 1s ease-in",
                  }}
                >
                  <FaCalendarAlt />
                </motion.div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Parish Calendar
                  </div>
                  <div className="text-sm lg:text-xl">
                    Highlights of important dates for the year
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Latest Updates Section */}
      <motion.div
        ref={newsContainerRef}
        onWheel={handleScroll}
        className="flex flex-col w-screen py-20 px-[2rem] md:px-[5rem]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div className="text-2xl font-bold w-full" variants={fadeInUp}>
          Latest Updates
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center flex-col lg:flex-row lg:justify-center gap-x-[2%] gap-y-8 overflow-x-auto w-full py-2 px-0.5"
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp}>
            <ProgramCard programme={programme} title="25th Anniversary" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProgramCard
              programme={programme1}
              title="Evangelist School Visitation"
            />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProgramCard programme={programme2} title="Pentecost Novena" />
          </motion.div>
          <motion.div variants={fadeInUp}>
            <ProgramCard programme={programme3} title="Youth Quiz" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* E-Bulletin Section */}
      <motion.div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{ backgroundImage: `url(${statImage})` }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <div className="absolute z-2 inset-0 bg-black opacity-60"></div>

        <motion.div
          className="text-white z-10 flex flex-col justify-center m-auto"
          variants={fadeInUp}
        >
          <motion.div
            className="text-xl md:text-4xl text-center w-full mb-5 lg:mb-10 font-semibold flex items-center justify-center"
            variants={fadeInUp}
          >
            Download Church E-Bulletin
          </motion.div>

          <motion.div
            onClick={handleBulletinDownload}
            className="w-full md:w-[30rem] h-[4rem] bg-blue-500 items-center flex  justify-center font-bold text-xl rounded-full cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "#FCD34D",
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            Click here to download
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Floating Image Bar */}
      <motion.img
        src={imgBar}
        className="absolute top-[30rem] -left-32 opacity-100 invisible lg:visible shrink"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      />
    </motion.div>
  );
};

export default Home;

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
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
import homeBg from '../assets/home-bg.jpg';
import img1 from '../assets/img1.jpg';

// import { GiBullseye } from 'react-icons'
// import { FaMapLocationDot } from 'react-icons'

const Home = () => {
  const navigate = useNavigate();
  const [isChurchHovered, setIsChurchHovered] = useState(false);
  const [isReadingHovered, setIsReadingHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const newsContainerRef = useRef(null);

  const handleBulletinDownload = () => {
    // Replace 'pdfUrl' with the actual URL or path to your PDF file
    const pdfUrl = 'https://drive.google.com/file/d/19aR4o7fNhLSd9-bWaLQRDIzx1yGnDCgH/view?usp=sharing';
    // Open the PDF in a new tab
    window.open(pdfUrl, '_blank');
  };

  const handleScroll = (event) => {
    const container = newsContainerRef.current;
    container.scrollLeft += event.deltaY;
  };

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000, // Change image every 4 seconds
  };

  const static_bg = {
    image: homeBg,
    subtext: "ST JOHN THE EVANGELIST CATHOLIC CHURCH, ADENTA",
    emphasis: " Ghana",
    maintext: "WELCOME HOME",
  };
  const slides = [
    {
      image: stn_image1,
      caption: "Connect. Collaborate. Catalyze.",
      emphasis: " Ghana",
      subtitle:
        "Together, we can transform the landscape of entrepreneurship in Ghana.",
    },
    {
      image: stn_image2,
      caption: "Cultivating Growth, Transforming Futures",
      subtitle:
        "Join the Seed Transformation Network Ghana Chapter on a journey of entrepreneurial empowerment",
    },
    {
      image: stn_image3,
      caption: "Nurturing Innovation, Impacting Communities",
      subtitle:
        "Our mission is to catalyze change and create lasting economic impact in Ghana.",
    },
  ];

  return (
    <div>
      {/* <Slider {...carouselSettings}>
        {slides.map((slide, index) => ( */}

      {/* {slides.map((slide, index) => ( */}
      {/* <div key={index}> */}
      <div className="">
        <div
          className={` relative h-screen  lg:h-screen w-full bg-cover bg-center flex items-center justify-center lg:overflow-hidden `}
          style={{
            // backgroundImage: `url(${slide.image})`,
            backgroundImage: `url(${static_bg.image})`,
          }}
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-60 h-screen lg:h-screen"></div>

          {/* Content */}
          <div className="text-white text-center z-10 w-[60rem] flex flex-col gap-5 p-8 lg:p-0">
            <div className=" text-xs  lg:text-2xl px-8 invisible lg:visible lg:mb-8 font-base">
              {static_bg.subtext}
              {/* <span className='text-[#A61D37]'>{slide.emphasis}</span> */}
            </div>
            {/* <p className="text-2xl">{slide.subtitle}</p> */}
            <p className="text-6xl lg:text-8xl font-bold w-full">{static_bg.maintext}</p>
            <div className="flex space-x-10 justify-center mt-10">
              <button className="bg-blue-500 w-[12rem] h-[3rem] text-lg hover:bg-blue-600 text-white border-1 border-[#A61D37] hover:scale-105 rounded-full py-[4px] border-none  transition-all duration-200 ease-in-out">
                I'm New Here
              </button>
              {/* <button className="bg-blue-500 w-[12rem] h-[3rem] text-lg hover:bg-blue-600 text-white border-1 border-[#A61D37] hover:scale-105 rounded-full py-[4px] border-none  transition-all duration-200 ease-in-out">
                Discover More
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* ))} */}
      {/* ))}
      </Slider> */}

      <img src={imgBar} className="absolute top-[30rem] opacity-100 invisible lg:visible shrink" />
      <div className="flex flex-col lg:flex-row w-screen lg:pt-[5rem] px-8 lg:px-[20rem]">
        <div className="hidden  lg:relative lg:flex w-full lg:w-1/2 h-[40rem] overflow-hidden">
          <img
            src={thePastor}
            alt="Your Image"
            className=" px-10 pt-10 h-[50rem] object-cover overflow-hidden invisible lg:visible"
          />
        </div>

        <div className=" flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/2 lg:pr-10 py-20">
          <h3 className="text-3xl uppercase lg:text-3xl font-bold pb-5 lg:w-full text-slate-900 text-center flex flex-col lg:flex-row">
            <span>A Message From </span>
            <span>The Pastor</span>
          </h3>
          <p className="flex flex-col text-xl mb-5 text-justify lg:text-left">
            <span>
              I am delighted to warmly  welcome you to our homepage. You have
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
          <div className=" flex flex-col lg:w-full text-slate-900">
            <span className="font-bold text-lg">
              Very Rev. Fr. Edmund Donkor-Baine
            </span>
            <span className="text-sm">Parish Priest</span>
          </div>
        </div>
      </div>

      {/* <div
        className="relative text-white flex flex-col bg-cover bg-center items-center justify-center gap-5 w-screen lg:h-screen py-10 px-8 lg:px-[20rem]"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      > */}
      {/* Dark overlay */}
      {/* <div className="absolute z-0 h-screen inset-0 bg-black/80 "></div> */}

      {/* mass schedule */}
      {/* <div>
        <div className="text-white mb-10 text-4xl font-bold flex w-full justify-center">OUR MASSES</div>
        <div className="flex z-4 w-full text-white justify-center space-x-[10rem]">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <span className="text-4xl font-bold">1st MASS</span>
              <span className="text-base font-light">7:00am - 9:00am</span>
            </div>
            <div className="flex flex-col">
              <span className="text-4xl font-bold">2nd MASS</span>
              
              <span className="text-base font-light">9:30am - 12:00pm</span>
            </div>
            <div className="text-4xl font-bold text-[#FF9900] mt-5">SUNDAYS</div>
          </div>
          <div className="w-[2px] h-full bg-white"></div>
          <div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">Tuesday</span>
              <span className="text-4xl font-bold">-</span>
              <span className="text-4xl ">6:00am</span>
            </div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">Wednesday</span>
              <span className="text-4xl font-bold">-</span>
              <span className="text-4xl ">7:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">Thursday</span>
              <span className="text-4xl font-bold">-</span>
              <span className="text-4xl ">7:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">Friday</span>
              <span className="text-4xl font-bold">-</span>
              <span className="text-4xl d">7:00pm</span>
            </div>
            <div className="flex justify-between">
              <span className="text-4xl font-bold">Saturday</span>
              <span className="text-4xl font-bold">-</span>
              <span className="text-4xl ">6:30am</span>
            </div>
            <div className="text-4xl font-bold text-[#FF9900] mt-5">WEEKDAYS</div>
          </div>
        </div>
        </div> */}

      {/* </div> */}

      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center  gap-5 w-screen  px-8 lg:px-[20rem] lg:p-[15rem] items-center justify-center"
        style={{
          backgroundImage: `url(${img1})`,
        }}
      >
        {/* Dark overlay */}
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
                  {" "}
                  <div className="text-lg lg:text-4xl font-bold">Parish Activities</div>
                  <div className="text-s lg:text-xl">
                    Mass times, sacraments and other schedules
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white z-10 flex flex-col items-center">
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
                  {" "}
                  <div className="text-xl lg:text-4xl font-bold">Daily Reading</div>
                  <div className="text-sm lg:text-xl">
                    Access and meditate on the readings for today{" "}
                  </div>
                </div>
              </div>
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
                  {" "}
                  <div className="text-xl lg:text-4xl font-bold">Office Hours</div>
                  <div className="text-sm lg:text-xl">
                    Learn ore about parish working hours
                  </div>
                </div>
              </div>
            </div>
            <div className="text-white z-10 flex flex-col items-center">
              <div
                className="w-full lg:w-[30rem] h-[8rem] lg:h-[15rem] bg-white rounded text-black flex items-center justify-center gap-8 px-5 lg:px-[3rem] cursor-pointer transition duration-200 ease-in hover:bg-yellow-500 hover:text-white"
                onMouseEnter={() => setIsCalenderHovered(true)}
                onMouseLeave={() => setIsCalenderHovered(false)}
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
                  {" "}
                  <div className="text-xl lg:text-4xl font-bold">Parish Calendar</div>
                  <div className="text-sm lg:text-xl">
                    Highlights of important dates for the year
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div 
         ref={newsContainerRef}
         onWheel={handleScroll}
      className="flex invisible lg:visible lg:flex-row w-screen  py-20  gap-10 px-[5rem]">
       
        <div className="text-2xl font-bold">Latest Updates</div>

        <div className="flex w-full overflow-x-auto lg:flex-row gap-x-[2%] gap-y-8 px-0.5 py-10">
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
        <div className="flex-shrink-0">
          <NewsCard />
        </div>
      </div>
      </div>

{/* <div 
        ref={newsContainerRef}
        className="flex w-full overflow-x-auto lg:flex-row gap-x-[2%] gap-y-8 py-2 px-0.5"
        onWheel={handleScroll}
        style={{
          // scrollSnapType: 'x mandatory',
        }}
      >
        <div className="flex-shrink-0">
          <NewsCard image={stn_image1} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image2} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
        <div className="flex-shrink-0">
          <NewsCard image={stn_image3} />
        </div>
    
      </div> */}

<div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute z-2 inset-0 bg-black opacity-60"></div>
        <div className="text-white z-10 flex flex-col justify-center m-auto">
          {/* <div>St. John the Evangelist Catholic Church</div> */}
          <div className="text-xl md:text-4xl text-center w-full mb-5 lg:mb-10  font-semibold flex items-center justify-center">Download Church E-Bulletin</div>
          <div 
          onClick={handleBulletinDownload}
          className=" w-full md:w-[30rem] h-[4rem] bg-blue-500 flex items-center justify-center font-bold text-xl rounded-full cursor-pointer hover:bg-yellow-500 transition duration-300 ease-in"> Click here to download</div>
        
        </div>
      </div>

    </div>
  );
};

export default Home;

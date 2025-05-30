import { motion, useReducedMotion } from "framer-motion";
import { useRef, useState, useEffect, lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaBible, FaCalendarAlt, FaChurch, FaUserClock, FaCross } from "react-icons/fa";
import { IoDocumentTextSharp } from "react-icons/io5";

// Import critical images directly
import homeBg from "../assets/home-bg.jpg";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import thePastor from "../assets/thePastor.png";
import stn_image4 from "../assets/societyimage.jpg";
import programme from "../assets/programme.jpg";
import programme1 from "../assets/programme1.jpg";
import programme2 from "../assets/programme2.jpg";
import programme3 from "../assets/programme3.jpg";

// Lazy load components
const HeroCarousel = lazy(() => import("../components/HeroCarousel"));
const ProgramCard = lazy(() => import("../components/ProgramCard"));
const MassScheduleSection = lazy(() => import("../components/Home/Mass"));
const PastorSection = lazy(() => import("../components/Home/PastorSection"));
const GallerySection = lazy(() => import("../components/Home/GallerySection"));
const TikTokSection = lazy(() => import("../components/Home/TikTokSection"));

// Easter popup
const EasterPopup = lazy(() => import("../components/EasterPopup"));

// Import AOS with reduced motion preference
import AOS from "aos";
import "aos/dist/aos.css";
// Create a loading placeholder component
const LoadingPlaceholder = () => (
  <div className="flex justify-center items-center py-20">
    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [isChurchHovered, setIsChurchHovered] = useState(false);
  const [isReadingHovered, setIsReadingHovered] = useState(false);
  const [isOfficeHovered, setIsOfficeHovered] = useState(false);
  const [isCalenderHovered, setIsCalenderHovered] = useState(false);
  const newsContainerRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const [imagesLoaded, setImagesLoaded] = useState({});
  // Easter popup state is now managed by EventNotification component
  const [showEasterPopup, setShowEasterPopup] = useState(false);

  // Easter popup bell position fallback
  const bellPosition = { top: 100, left: (typeof window !== 'undefined' ? window.innerWidth / 2 : 0) };

  // Optimize AOS for performance
  useEffect(() => {
    AOS.init({
      duration: prefersReducedMotion ? 0 : 800,
      once: true,
      easing: "ease-out",
      disable: window.innerWidth < 640, // Disable animations on small screens
    });
    
    // Clean up AOS on component unmount
    return () => {
      AOS.refresh();
    };
  }, [prefersReducedMotion]);

  const handleBulletinDownload = () => {
    const pdfUrl =
      "https://drive.google.com/file/d/19aR4o7fNhLSd9-bWaLQRDIzx1yGnDCgH/view?usp=sharing";
    window.open(pdfUrl, "_blank");
  };

  const handleScroll = (event) => {
    const container = newsContainerRef.current;
    container.scrollLeft += event.deltaY;
  };

  // Define slides directly with imported images
  const slides = [
    {
      image: homeBg,
      subtext: "ST JOHN THE EVANGELIST CATHOLIC CHURCH, ADENTA",
      maintext: "WELCOME HOME",
      buttonText: "I'm New Here",
    },
    {
      image: img1,
      subtext: "ST JOHN THE EVANGELIST CATHOLIC CHURCH, ADENTA",
      maintext: "Experience A Great Sense Of Community",
      buttonText: "Find Out More",
    },
    {
      image: img3,
      subtext: "JOIN OUR COMMUNITY",
      maintext: "Grow In Faith Together",
      buttonText: "Learn More",
    },
    {
      image: img2,
      subtext: "WORSHIP WITH US",
      maintext: "Come As You Are",
      buttonText: "Join Us",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <HeroCarousel slides={slides} />
      </Suspense>

      {/* Pastor Section - Lazy loaded */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <PastorSection image={thePastor} />
      </Suspense>
      {/* Quick Links Section */}
      <div
        className="relative bg-cover bg-center z-10 py-12 sm:py-20"
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
                    Mass times and other schedules
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
            {/* Papers and Publication Card */}
            <Link
              to={"/blog"}
              className="w-full lg:w-[30rem] text-black"
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
                  } text-[4.5rem] lg:text-[6rem] transition-all duration-300`}
                >
                  <IoDocumentTextSharp />
                </div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    News & Publication
                  </div>
                  <div className="text-sm lg:text-xl">
                    Access church documents and publications
                  </div>
                </div>
              </div>
            </Link>

            {/* Parish Calendar Card */}
            <Link
              to={"/sacrament"}
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
                  <FaCross/>
                </div>
                <div>
                  <div className="text-xl lg:text-4xl font-bold">
                    Sacraments{" "}
                  </div>
                  <div className="text-sm lg:text-xl">
                    Overview of the Sacraments of the Church
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Theme Section */}
      <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2" data-aos="fade-up">
          THEME FOR THE YEAR
        </h2>
        <div
          className="max-w-4xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Pilgrims Of Hope: A Year Of Discipleship.
            <br />
  
          </h3>
          <p className="text-lg text-yellow-400">ROMANS 5:5</p>
        </div>
      </div>

      {/* Societies Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative" data-aos="fade-right">
              <img
                src={stn_image4}
                alt="Church Society"
                className="w-full rounded-lg shadow-xl"
              />
            </div>
            <div className="space-y-6" data-aos="fade-left">
              <h4 className="text-lg text-blue-600 font-medium">FELLOWSHIP</h4>
              <h2 className="text-2xl md:text-3xl font-bold">Societies</h2>
              <p className="text-white-600 mb-16">
                At St John the Evangelist Catholic Church, we believe in the
                power of community and fellowship. Our diverse societies offer
                parishioners the opportunity to grow in their faith while
                serving others in meaningful ways. Whether you&apos;re looking
                to engage more deeply with your faith, participate in service
                projects, or simply connect with like-minded individuals,
                there&apos;s a place for you here.
              </p>
              <div className="mt-8">
                <Link to="/societies">
                  <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition-colors">
                    JOIN A SOCIETY
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lazy loaded sections */}
      <Suspense fallback={<LoadingPlaceholder />}>
        <MassScheduleSection />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>
        <TikTokSection />
      </Suspense>
      
      <Suspense fallback={<LoadingPlaceholder />}>  
        <GallerySection />
      </Suspense>
    </div>
  );
};

export default Home;

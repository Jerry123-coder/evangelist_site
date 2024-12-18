import React, { useEffect, useRef, useState } from "react";
// import animation from '../assets/animation/'
import lottie from "lottie-web";
import animationData from "../assets/animation/data.json";
import {
  ministries,
  societies,
  dayBorns,
  youthCouncil,
  childrenMinistries,
  devotionalGroups,
} from "../data";
import { IoPersonAddSharp } from "react-icons/io5";
import {
  FaAddressBook,
  FaCalendarAlt,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";

const Societies = () => {
  const animationContainer = useRef(null);
  const [isActive, setIsActive] = useState("Ave Maria Choir");
  const items = [
    "Ministries",
    "Societies",
    "Devotional Groups",
    "Day Borns",
    "Youth Council",
    "Children Ministries",
  ];
  const [category, setCategory] = useState("Ministries");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleItemDisplay = (item) => {
    setIsActive(item.name);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Use 'svg' or 'canvas'
      loop: true, // Set to true for loop, false for no loop
      autoplay: true, // Set to true to start playing automatically
      animationData: animationData, // Your animation JSON data
    });

    return () => {
      // Cleanup on unmount
      anim.destroy();
    };
  }, []);

  useEffect(() => {}, []);

  const handleCategorySelection = (selectedCategory) => {
    setCategory(selectedCategory);

    let firstItem;
    switch (selectedCategory) {
      case "Ministries":
        firstItem = ministries[0];
        break;
      case "Societies":
        firstItem = societies[0];
        break;
      case "Devotional Groups":
        firstItem = devotionalGroups[0];
        break;
      case "Day Borns":
        firstItem = dayBorns[0];
        break;
      case "Youth Council":
        firstItem = youthCouncil[0];
        break;
      case "Children Ministries":
        firstItem = childrenMinistries[0];
        break;
      default:
        firstItem = ministries[0];
    }

    setIsActive(firstItem?.name || "");
  };

  let currentItems = [];
  switch (category) {
    case "Ministries":
      currentItems = ministries;
      break;
    case "Societies":
      currentItems = societies;
      break;
    case "Devotional Groups":
      currentItems = devotionalGroups;
      break;
    case "Day Borns":
      currentItems = dayBorns;
      break;
    case "Youth Council":
      currentItems = youthCouncil;
      break;
    case "Children Ministries":
      currentItems = childrenMinistries;
      break;
    default:
      currentItems = ministries;
  }

  return (
    <main className="min-h-screen pb-6 md:pb-10">
      {/* Hero Section - Mobile Friendly */}
      <div className="relative flex flex-col bg-cover bg-center items-center w-full min-h-[12rem] md:h-[20rem] px-4 md:px-8 lg:px-[20rem] justify-center">
        <div className="absolute inset-0 bg-black opacity-80"></div>
        <div className="relative z-10 text-white text-center md:text-left w-full max-w-[65rem] mx-auto px-4">
          <span className="text-lg md:text-2xl block mb-3 md:mb-2 font-semibold opacity-75">
            All You Need To Know About
          </span>
          <span className="text-2xl md:text-3xl lg:text-6xl font-bold block">
            Our Groups and Societies
          </span>
        </div>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-[65rem] mx-auto px-4 md:px-8">
        {/* Navigation Tabs */}
        <div className="mt-6 md:mt-10 mb-5 ">
          <ul className="flex whitespace-nowrap md:gap-16 min-w-max md:min-w-0 pb-2 md:pb-0">
            {items.map((item) => (
              <li
                key={item}
                onClick={() => handleCategorySelection(item)}
                className={`font-bold cursor-pointer px-3 md:px-0 py-2 md:py-0 ${
                  category === item
                    ? "border-b-2 border-b-blue-500 text-blue-500"
                    : "text-gray-600"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Content Layout */}
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {/* Mobile Dropdown */}
          <div className="md:hidden w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="w-full px-4 py-3 bg-blue-950 text-white rounded-lg flex items-center justify-between"
            >
              <span className="text-lg">{isActive}</span>
              {isMenuOpen ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {isMenuOpen && (
              <div className="absolute left-0 right-0 mt-2 mx-4 bg-blue-900 rounded-lg shadow-lg z-50">
                {currentItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleItemDisplay(item);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-left px-4 py-3 text-white hover:bg-blue-800 first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Sidebar */}
          <div className="hidden md:block md:w-1/4">
            <div className="">
              {currentItems.map((item, index) => (
                <div
                  key={item.name}
                  onClick={() => handleItemDisplay(item)}
                  className={`w-full text-left px-6 py-4 text-lg transition-colors cursor-pointer	 ${
                    isActive === item.name
                      ? "bg-blue-900 text-white"
                      : "hover:bg-blue-900/30"
                  } ${index !== 0 && "border-t border-slate-950/10"}`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Content Area */}
          <div className="w-full md:w-3/4 bg-slate-100 rounded-lg">
            {/* Content Header */}
            <div className="p-4 md:p-6 border-b border-slate-900/10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                {currentItems.find((item) => item.name === isActive)?.name}
              </h2>
            </div>

            {/* Content Details */}
            <div className="p-4 md:p-6">
              {currentItems.map(
                (item) =>
                  item.name === isActive && (
                    <div key={item.name} className="prose max-w-none">
                      {item.details}
                    </div>
                  )
              )}
            </div>
            {/* Info Sections */}

            <div className="bg-blue-950 w-full p-10 flex flex-col space-y-20 px-14">
              <div className="flex  md:flex w-full ">
                <div className=" w-full md:w-1/3 flex md:items-center md:justify-center">
                  <span className="flex items-center justify-center md:w-[7rem] md:h-[7rem] w-[4rem] h-[4rem] rounded-full text-5xl bg-yellow-500 text-blue-950  ">
                    <IoPersonAddSharp />
                  </span>
                </div>

                <span className="text-white w-full border-b-2 border-white/40 pb-5">
                  <p className="text-sm md:text-xl font-bold">Who can join?</p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-base font-medium">
                          {item.details}
                        </div>
                      )
                  )}
                </span>
              </div>

              <div className="flex w-full ">
                <span className="text-white w-2/3 border-b-2 border-white/40 pb-5">
                  <p className="text-xl font-bold">Our Meeting days</p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-base font-medium">
                          {item.details}
                        </div>
                      )
                  )}
                </span>
                <div className="w-1/3 flex md:items-center md:justify-center">
                  <span className="flex items-center justify-center md:w-[7rem] md:h-[7rem] w-[4rem] h-[4rem] rounded-full text-5xl bg-yellow-500 text-blue-950  ">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>

              <div className="flex w-full">
                <div className="w-1/3  flex md:items-center md:justify-center">
                  <span className="flex items-center justify-center md:w-[7rem] md:h-[7rem] w-[4rem] h-[4rem] rounded-full text-5xl bg-yellow-500 text-blue-950 ">
                    <FaAddressBook />
                  </span>
                </div>

                <span className="text-white w-2/3 border-b-2 border-white/40 pb-5">
                  <p className="text-xl font-bold">
                    How you can become a part of us
                  </p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-base font-medium">
                          {item.details}
                        </div>
                      )
                  )}
                </span>
              </div>

              <div className="py-3 px-[3rem] border-t-2 rounded-full bg-white text-slate-900  text-sm text-center">
                For More details kindly contact: 0234567890 // 0598765432
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Societies;

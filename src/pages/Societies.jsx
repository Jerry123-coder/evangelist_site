import React, { useState } from "react";
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

  // Helper function to render meeting days with line breaks
  const renderMeetingDays = (text) => {
    if (!text) return null;
    return text.split('\n').map((line, index) => (
      <div key={index} className="mb-1">{line}</div>
    ));
  };

  return (
    <main className="min-h-screen pb-6 md:pb-10">
      {/* Hero Section - Mobile Friendly */}
      <div className="relative flex flex-col bg-cover bg-center items-center w-full min-h-[12rem] md:h-[20rem] px-4 md:px-8 lg:px-[20rem] justify-center">
        <div className="absolute inset-0 bg-blue-600 opacity-70"></div>
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
        <div className="mt-6 md:mt-10 mb-5 overflow-x-auto w-full">
          <div className="w-max min-w-full md:w-full">
            <ul className="flex space-x-4 md:space-x-0 md:gap-16 w-max min-w-full md:w-full md:min-w-0 pb-2 md:pb-0 px-4 md:px-0">
              {items.map((item) => (
                <li
                  key={item}
                  onClick={() => handleCategorySelection(item)}
                  className={`whitespace-nowrap font-bold cursor-pointer px-3 py-2 md:px-0 md:py-0 ${
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
              <div className="absolute left-0 right-0 mt-1 mx-4 bg-white dark:bg-gray-800 border border-blue-200 dark:border-gray-600 rounded-lg shadow-lg z-50 overflow-hidden">
                {currentItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => {
                      handleItemDisplay(item);
                      setIsMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 
                      text-gray-800 dark:text-gray-200 
                      hover:bg-blue-100 dark:hover:bg-gray-700 
                      transition-colors 
                      ${isActive === item.name ? 'bg-blue-50 dark:bg-gray-700 font-semibold' : ''}`}
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
                  }`}
                >
                  {item.name}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content Area */}
          <div className="md:w-3/4">
            {/* Content Header */}
            <div className="bg-blue-100 p-4 md:p-8">
              <div className="text-blue-900 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">
                  {isActive}
                </h2>
                {currentItems.map(
                  (item) =>
                    item.name === isActive && (
                      <div key={item.name} className="text-base font-medium">
                        {item.details}
                      </div>
                    )
                )}
              </div>
            </div>

            <div className="bg-blue-50 w-full p-4 md:p-10 flex flex-col space-y-10 md:space-y-20">
              {/* First Section - Who can join */}
              <div className="flex flex-col md:flex-row w-full items-center gap-4 pb-5 border-b-2 border-blue-200">
                <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-full h-full rounded-full text-3xl md:text-5xl bg-yellow-500 text-blue-950">
                    <IoPersonAddSharp />
                  </span>
                </div>
                <div className="text-blue-900 w-full">
                  <p className="text-lg md:text-xl font-bold text-center md:text-left">Who can join?</p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-sm md:text-base font-medium text-center md:text-left">
                          {item.whoCanJoin || item.details}
                        </div>
                      )
                  )}
                </div>
              </div>

              {/* Second Section - Meeting Days */}
              <div className="flex flex-col-reverse md:flex-row w-full items-center gap-4 pb-5 border-b-2 border-blue-200">
                <div className="text-blue-900 w-full">
                  <p className="text-lg md:text-xl font-bold text-center md:text-left">Our Meeting days</p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-sm md:text-base font-medium text-center md:text-left">
                          {renderMeetingDays(item.meetingDays || item.details)}
                        </div>
                      )
                  )}
                </div>
                <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-full h-full rounded-full text-3xl md:text-5xl bg-yellow-500 text-blue-950">
                    <FaCalendarAlt />
                  </span>
                </div>
              </div>

              {/* Third Section - How to join */}
              <div className="flex flex-col md:flex-row w-full items-center gap-4 pb-5 border-b-2 border-blue-200">
                <div className="w-16 h-16 md:w-28 md:h-28 flex-shrink-0 flex items-center justify-center">
                  <span className="flex items-center justify-center w-full h-full rounded-full text-3xl md:text-5xl bg-yellow-500 text-blue-950">
                    <FaAddressBook />
                  </span>
                </div>
                <div className="text-blue-900 w-full">
                  <p className="text-lg md:text-xl font-bold text-center md:text-left">
                    How you can become a part of us
                  </p>
                  {currentItems.map(
                    (item) =>
                      item.name === isActive && (
                        <div key={item.name} className="text-sm md:text-base font-medium text-center md:text-left">
                          {item.howToJoin || item.details}
                        </div>
                      )
                  )}
                </div>
              </div>

              <div className="py-3 px-4 md:px-12 border-t-2 rounded-full bg-blue-600 text-white text-xs md:text-sm text-center">
                {currentItems.map(
                  (item) =>
                    item.name === isActive && (
                      <div key={item.name}>
                        For More details kindly contact: {item.contactInfo || "0234567890 // 0598765432"}
                      </div>
                    )
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Societies;

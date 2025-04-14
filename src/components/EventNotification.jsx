import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";

// This component is meant to be used within the NavBar
const EventNotification = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(2); // Number of unread notifications
  const navigate = useNavigate();

  // Handle click outside to close the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.notification-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Navigate to blog page when notification is clicked
  const handleNotificationClick = () => {
    navigate("/blog");
    setIsOpen(false);
    setUnreadCount(0); // Mark as read when clicked
  };

  // Toggle notification popup
  const toggleNotification = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    if (!isOpen) {
      // When opening, don't reset unread count yet
    } else {
      setUnreadCount(0); // Mark as read when closing
    }
  };

  // Sample upcoming events - replace with actual data from your CMS or API
  const upcomingEvents = [
    {
      title: "Easter Sunday Mass",
      date: "April 17, 2025",
      location: "Main Church",
    },
    {
      title: "Parish Council Meeting",
      date: "April 20, 2025",
      location: "Parish Hall",
    }
  ];

  return (
    <div className={`notification-container relative ${className}`}>
      {/* Bell icon with notification indicator */}
      <button
        onClick={toggleNotification}
        className="relative p-1 rounded-full bg-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none group"
        aria-label="Notifications"
      >
        <IoIosNotifications className="text-blue-600 group-hover:text-white text-2xl transition-colors duration-200" />
        
        {/* Notification badge */}
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Notification popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-2xl overflow-hidden z-50 border border-blue-100"
            style={{ transformOrigin: 'top right' }}
          >
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <IoIosNotifications className="mr-2 text-yellow-300" />
                <h3 className="font-semibold text-sm">Upcoming Events</h3>
              </div>
              <span className="text-xs bg-blue-700/30 px-2 py-1 rounded-full text-blue-50">Click for details</span>
            </div>

            {/* Events list with enhanced styling */}
            <div className="max-h-[250px] overflow-y-auto px-2 py-2">
              {upcomingEvents.map((event, index) => (
                <div 
                  key={index}
                  onClick={handleNotificationClick}
                  className="p-3 mb-2 rounded-lg border border-blue-50 hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer transition-all duration-200 shadow-sm hover:shadow"
                >
                  <h4 className="font-semibold text-sm text-gray-800">{event.title}</h4>
                  <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2">
                    <div className="flex items-center bg-blue-50 rounded-full px-2 py-1 mr-2 mb-1">
                      <FaCalendarAlt className="mr-1 text-blue-500" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center bg-blue-50 rounded-full px-2 py-1 mb-1">
                      <FaMapMarkerAlt className="mr-1 text-blue-500" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Footer */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 text-center">
              <button
                onClick={handleNotificationClick}
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-medium py-1.5 px-4 rounded-full transition-all duration-200 hover:shadow-md flex items-center justify-center mx-auto"
              >
                <span>View all announcements</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventNotification;

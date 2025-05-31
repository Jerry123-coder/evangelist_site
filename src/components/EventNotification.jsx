import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { getUnreadCount, markEventsAsRead } from "../services/notificationService";
import { getAnnouncementPosts } from "../services/blogService";
import "../styles/scrollbar.css";
import EasterPopup from "./EasterPopup";

// This component is meant to be used within the NavBar
const EventNotification = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // Set to 1 for Pentecost Novena
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showEasterPopup, setShowEasterPopup] = useState(false);
  const [showBellIcon, setShowBellIcon] = useState(false);
  const [bellPosition, setBellPosition] = useState({ top: 0, left: 0 });
  const notificationRef = React.useRef(null);
  const navigate = useNavigate();
  
  // Fetch upcoming events and unread count on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [announcementPosts, unreadCountData] = await Promise.all([
          getAnnouncementPosts(),
          getUnreadCount()
        ]);
        // Filter out past events (only show today or future)
        const today = new Date();
        const upcoming = announcementPosts.filter(event => {
          if (!event.date) return false;
          // Acceptable date formats: 'April 21, 2025', etc.
          const eventDate = new Date(event.date);
          // If event has multiple times (e.g., '7:00AM and 9:30AM'), still just compare the date
          return eventDate >= today;
        });
        
        // Add Pentecost Novena as a static event
        const pentecostNovena = {
          id: 'pentecost-novena-2025',
          title: 'Pentecost Novena',
          date: 'May 30 - June 7, 2025',
          time: '6:30 PM Daily',
          location: 'St. John the Evangelist Church',
          summary: 'Join us for our 9-day Novena to the Holy Spirit',
          isHighPriority: true,
          isPentecost: true
        };
        
        // Add Pentecost Novena at the beginning of the events array
        setEvents([pentecostNovena, ...upcoming]);
        // Always show 1 unread notification for the Pentecost Novena
        setUnreadCount(1);
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching notification data:", err);
        setError("Failed to load notifications");
        setIsLoading(false);
      }
    };
    
    fetchData();
    
    // Check if we're on the homepage and if the user hasn't seen the popup before
    const isHomePage = location.pathname === '' || location.pathname === '/';
    const hasSeenPopup = localStorage.getItem('hasSeenEasterPopup');
  
    if (isHomePage && !hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowEasterPopup(true);
      }, 1000); // Show popup after 1 second
      return () => clearTimeout(timer);
    }
  }, []);

  // Handle click/touch outside to close the popup
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('.notification-container')) {
        setIsOpen(false);
      }
    };

    // Add both mouse and touch event listeners for mobile compatibility
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  // Navigate to blog page when notification is clicked
  const handleNotificationClick = async () => {
    try {
      // Mark all events as read in the backend
      await markEventsAsRead(events.map(event => event.id));
      setUnreadCount(0);
      navigate("/blog");
      setIsOpen(false);
    } catch (err) {
      console.error("Error marking notifications as read:", err);
      // Still navigate even if marking as read fails
      navigate("/blog");
      setIsOpen(false);
    }
  };

  // Toggle notification popup
  const toggleNotification = async (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    
    if (isOpen && unreadCount > 0) {
      try {
        // Mark all events as read when closing the popup
        await markEventsAsRead(events.map(event => event.id));
        setUnreadCount(0);
      } catch (err) {
        console.error("Error marking notifications as read:", err);
      }
    }
  };
  
  // Get bell position for animation with improved mobile compatibility
  useEffect(() => {
    const updateBellPosition = () => {
      if (notificationRef.current) {
        const rect = notificationRef.current.getBoundingClientRect();
        setBellPosition({
          top: rect.top,
          left: rect.left + rect.width / 2
        });
      }
    };
    
    // Update position initially
    updateBellPosition();
    
    // Update position on resize and orientation change for mobile
    window.addEventListener('resize', updateBellPosition);
    window.addEventListener('orientationchange', updateBellPosition);
    
    return () => {
      window.removeEventListener('resize', updateBellPosition);
      window.removeEventListener('orientationchange', updateBellPosition);
    };
  }, []);
  
  // Handle Easter popup close
  const handleClosePopup = () => {
    setShowEasterPopup(false);
    localStorage.setItem('hasSeenEasterPopup', 'true');
    
    // Show bell icon after popup is closed
    setTimeout(() => {
      setShowBellIcon(true);
    }, 300);
  };
  
  // Handle Easter bell click
  const handleEasterBellClick = (e) => {
    e.stopPropagation();
    setShowEasterPopup(true);
  };



  return (
    <>
      <EasterPopup 
        isOpen={showEasterPopup} 
        onClose={handleClosePopup}
        bellPosition={bellPosition}
      />
      <div className={`notification-container relative ${className}`} ref={notificationRef}>
      {/* Bell icon with notification indicator */}
      {showBellIcon || !showEasterPopup ? (
        <motion.button
          initial={!showBellIcon ? { scale: 0, rotate: -45 } : false}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20
          }}
          onClick={toggleNotification}
          onDoubleClick={handleEasterBellClick}
          className="relative p-1 rounded-full bg-white hover:bg-gray-800 transition-colors duration-200 focus:outline-none group"
          aria-label="Notifications"
        >
        <IoIosNotifications className="text-blue-600 group-hover:text-white text-2xl transition-colors duration-200" />
        
        {/* Notification badge */}
        {(unreadCount > 0 || localStorage.getItem('hasSeenEasterPopup')) && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
            {unreadCount > 0 ? unreadCount : '!'}
          </span>
        )}
      </motion.button>
      ) : null}

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
              <span className="text-xs bg-blue-700/30 px-2 py-1 rounded-full text-blue-50">
                {isLoading ? 'Loading...' : 'Click for details'}
              </span>
            </div>

            {/* Events list with enhanced styling */}
            <div className="max-h-[250px] overflow-y-auto px-2 py-2 scrollbar-hide">
              {isLoading ? (
                <div className="flex justify-center items-center py-6">
                  <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-blue-500"></div>
                </div>
              ) : error ? (
                <div className="p-3 text-center text-red-500">
                  <p className="text-sm">{error}</p>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="mt-2 text-xs bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Retry
                  </button>
                </div>
              ) : events.length === 0 ? (
                <div className="p-3 text-center text-gray-500">
                  <p className="text-sm">No upcoming events</p>
                </div>
              ) : (
                events.map((event) => {
                  const isEaster = event.title?.toLowerCase().includes("easter") ||
                    event.summary?.toLowerCase().includes("easter") ||
                    event.category?.toLowerCase().includes("easter");
                  const isPentecost = event.isPentecost || 
                    event.title?.toLowerCase().includes("pentecost") ||
                    event.summary?.toLowerCase().includes("pentecost");
                  return (
                    <div
                      key={event.id}
                      onClick={handleNotificationClick}
                      className={`p-3 mb-2 rounded-lg border hover:border-blue-200 hover:bg-blue-50/50 cursor-pointer transition-all duration-200 shadow-sm hover:shadow ${
                        isEaster ? 'bg-yellow-50 border-yellow-300' : 
                        isPentecost ? 'bg-purple-50 border-purple-300' : 
                        'border-blue-50'
                      }`}
                    >
                      <h4 className={`font-semibold text-sm ${
                        isEaster ? 'text-yellow-700' : 
                        isPentecost ? 'text-purple-700' : 
                        'text-gray-800'
                      }`}>
                        {event.title}
                      </h4>
                      <div className="flex flex-wrap items-center text-xs text-gray-500 mt-2">
                        <div className={`flex items-center rounded-full px-2 py-1 mr-2 mb-1 ${
                          isPentecost ? 'bg-purple-100' : 'bg-blue-50'
                        }`}>
                          <FaCalendarAlt className={`mr-1 ${isPentecost ? 'text-purple-500' : 'text-blue-500'}`} />
                          <span>{event.date}</span>
                          {event.time && <span className="ml-1">• {event.time}</span>}
                        </div>
                        {event.location && (
                          <div className={`flex items-center rounded-full px-2 py-1 mb-1 ${
                            isPentecost ? 'bg-purple-100' : 'bg-blue-50'
                          }`}>
                            <FaMapMarkerAlt className={`mr-1 ${isPentecost ? 'text-purple-500' : 'text-blue-500'}`} />
                            <span>{event.location}</span>
                          </div>
                        )}
                      </div>
                      {isEaster && (
                        <div className="mt-1 flex">
                          <span className="text-xs bg-yellow-200 text-yellow-800 px-2 py-0.5 rounded-full mr-2">
                            Easter Event
                          </span>
                        </div>
                      )}
                      {isPentecost && (
                        <div className="mt-1 flex">
                          <span className="text-xs bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full mr-2">
                            Pentecost Novena
                          </span>
                        </div>
                      )}
                      {event.isHighPriority && (
                        <div className="mt-1 flex">
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded-full">
                            Important
                          </span>
                        </div>
                      )}
                    </div>
                  );
                })
              )}
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
    </>
  );
};

export default EventNotification;

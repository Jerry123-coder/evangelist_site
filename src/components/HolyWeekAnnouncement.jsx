import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaMapMarkerAlt, FaClock, FaGoogle, FaApple, FaDownload } from 'react-icons/fa';
import { createHolyWeekEvents, downloadCalendarEvent, createGoogleCalendarUrl } from '../utils/calendarUtils';

// Calendar dropdown component
const CalendarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const holyWeekEvents = createHolyWeekEvents();
  const dropdownRef = React.useRef(null);
  
  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  
  // Create a single .ics file with all Holy Week events
  const handleDownloadAllEvents = () => {
    // For simplicity, we're downloading the first event
    // In a production environment, you would create a single .ics file with all events
    downloadCalendarEvent({
      title: "Holy Week Schedule 2025",
      description: "Complete Holy Week schedule at St. John the Evangelist Catholic Church",
      startDate: new Date('2025-04-13T07:00:00'), // Palm Sunday
      endDate: new Date('2025-04-21T15:00:00'),   // End of Easter Picnic
      location: "St. John the Evangelist Catholic Church, Adenta"
    });
  };
  
  // Add to Google Calendar
  const handleAddToGoogle = () => {
    // Open Google Calendar with the Palm Sunday event
    window.open(createGoogleCalendarUrl({
      title: "Holy Week 2025 - St. John the Evangelist",
      description: "Holy Week celebrations including Palm Sunday, Holy Thursday, Good Friday, Holy Saturday, Easter Sunday, and Easter Picnic",
      startDate: new Date('2025-04-13T07:00:00'),
      endDate: new Date('2025-04-21T15:00:00'),
      location: "St. John the Evangelist Catholic Church, Adenta"
    }), '_blank');
  };
  
  return (
    <div className="relative inline-block text-left z-[9999]" ref={dropdownRef}>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-2 px-6 rounded-full inline-flex items-center"
      >
        <FaCalendarAlt className="mr-2" />
        Add to Calendar
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9998]"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed z-[9999] mt-2 w-72 bg-white rounded-lg shadow-lg overflow-hidden"
            style={{ 
              left: '50%', 
              transform: 'translateX(-50%)',
              top: '30%',
              maxWidth: '320px',
              width: '90%'
            }}
          >
            <div className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Add Holy Week Events to Calendar</h3>
              
              <div className="space-y-4">
                <button 
                  onClick={handleAddToGoogle}
                  className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaGoogle className="mr-3 text-blue-600 text-xl" />
                  <span className="font-medium">Google Calendar</span>
                </button>
                
                <button 
                  onClick={handleDownloadAllEvents}
                  className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaApple className="mr-3 text-gray-800 text-xl" />
                  <span className="font-medium">Apple Calendar</span>
                </button>
                
                <button 
                  onClick={handleDownloadAllEvents}
                  className="w-full py-3 px-4 bg-blue-50 hover:bg-blue-100 text-blue-800 rounded-lg flex items-center justify-center transition-colors duration-200"
                >
                  <FaDownload className="mr-3 text-blue-600 text-xl" />
                  <span className="font-medium">Download .ics File</span>
                </button>
              </div>
            </div>
            

          </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

const HolyWeekAnnouncement = () => {
  const holyWeekEvents = [
    {
      day: 'SUNDAY',
      date: 'APRIL 13TH',
      title: 'PALM SUNDAY',
      details: 'MASS BEGINS AT ROWI',
      time: '7:00AM'
    },
    {
      day: 'THURSDAY',
      date: 'APRIL 17TH',
      title: 'HOLY THURSDAY',
      details: 'MASS OF THE LORD\'S SUPPER',
      time: '7:00PM'
    },
    {
      day: 'FRIDAY',
      date: 'APRIL 18TH',
      title: 'GOOD FRIDAY',
      details: [
        'STATIONS OF THE CROSS',
        'DIVINE MERCY NOVENA',
        'VENERATION OF THE CROSS'
      ],
      times: ['7:00AM', '2:30PM', '3:00PM']
    },
    {
      day: 'SATURDAY',
      date: 'APRIL 19TH',
      title: 'HOLY SATURDAY',
      details: 'MASS OF EASTER VIGIL',
      time: '7:00PM'
    },
    {
      day: 'SUNDAY',
      date: 'APRIL 20TH',
      title: 'EASTER SUNDAY',
      details: '',
      time: '7:00AM & 9:30AM'
    },
    {
      day: 'MONDAY',
      date: 'APRIL 21ST',
      title: 'EASTER PICNIC',
      details: 'BEGINS WITH HOLY MASS',
      time: '12:00PM'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-xl overflow-hidden shadow-xl mb-12"
    >
      <div className="p-6 text-white">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-white">HOLY WEEK & EASTER SCHEDULE</h2>
          <img 
            src="/easter-pop-up.jpg" 
            alt="Holy Week" 
            className="h-16 w-16 rounded-full object-cover border-2 border-yellow-500"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {holyWeekEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-800/50 p-4 rounded-lg border border-blue-700 hover:bg-blue-700/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="bg-yellow-500/90 text-blue-900 font-bold px-3 py-1 rounded text-sm">
                  {event.day}
                </div>
                <div className="text-blue-200 text-sm flex items-center">
                  <FaCalendarAlt className="mr-1" /> {event.date}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
              
              {event.details && !Array.isArray(event.details) && (
                <p className="text-blue-200 text-sm mb-2">{event.details}</p>
              )}
              
              {Array.isArray(event.details) && (
                <ul className="text-blue-200 text-sm mb-2">
                  {event.details.map((detail, i) => (
                    <li key={i} className="mb-1 flex items-start">
                      <span className="mr-2">•</span> {detail}
                      <span className="ml-auto text-yellow-300">{event.times[i]}</span>
                    </li>
                  ))}
                </ul>
              )}
              
              {!Array.isArray(event.details) && (
                <div className="flex items-center text-yellow-300 mt-2">
                  <FaClock className="mr-1" /> {event.time}
                </div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mt-6 text-center">
          <CalendarDropdown />
        </div>
      </div>
    </motion.div>
  );
};

export default HolyWeekAnnouncement;

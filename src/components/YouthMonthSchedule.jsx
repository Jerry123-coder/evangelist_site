import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const YouthMonthSchedule = () => {
  const [showAll, setShowAll] = useState(false);
  const youthPrograms = [
    {
      no: 1,
      activity: "Youth Month Launch",
      theme: "Youth: Pillars of Universal Hope",
      date: "Sunday, 13th July",
      time: "First & Second Mass",
      venue: "Parish"
    },
    {
      no: 2,
      activity: "Clean Up Exercise & Waakye Party Grotto Mass",
      theme: "Hope in Service",
      date: "Saturday, 2nd August 2025",
      time: "7:00am",
      venue: "Parish"
    },
    {
      no: 3,
      activity: "Rep Your School & Chop Gari Soakings Sunday Hour of Grace",
      theme: "Sent Forth in Hope Light of Hope",
      date: "Sunday, 3rd August 2025",
      time: "3:00pm 6:00pm 7:00",
      venue: "Parish"
    },
    {
      no: 4,
      activity: "Peduase Work-Out Experience",
      theme: "Hope in Action",
      date: "Saturday, 9th August 2025",
      time: "6:00am",
      venue: "Ayi Mensah - Peduase"
    },
    {
      no: 5,
      activity: "Rep Your Jersey Sunday",
      theme: "Light of Hope",
      date: "Sunday, 10th August 2025",
      time: "7:00am",
      venue: "Parish"
    },
    {
      no: 6,
      activity: "Mass & Fireside Chat with Rev. Father Joseph Effah Siaw",
      theme: "Ignite the fire within",
      date: "Friday, 15th August",
      time: "7:00pm",
      venue: "Parish"
    },
    {
      no: 7,
      activity: "Youth Mass & Inter-Societal Fair",
      theme: "Sent forth in Hope",
      date: "Sunday, 17th August 2025",
      time: "7:00am",
      venue: "Parish"
    },
    {
      no: 8,
      activity: "Evangelist Youth Retreat",
      theme: "Faith in Action",
      date: "Saturday, 23rd August 2025",
      time: "4:00am",
      venue: "Franciscan Valley, Saltpond Parish"
    },
    {
      no: 9,
      activity: "Cultural Sunday",
      theme: "Light of Hope",
      date: "Sunday, 24th August 2025",
      time: "7:00am",
      venue: "Parish"
    },
    {
      no: 10,
      activity: "Orphanage Donation",
      theme: "Hope in Service",
      date: "Saturday, 30th August 2025",
      time: "6:00am",
      venue: "Kressner Handmaids Children Home-Ofankor"
    },
    {
      no: 11,
      activity: "All White Sunday",
      theme: "Light of Hope",
      date: "Sunday, 31st August 2025",
      time: "7:00am",
      venue: "Parish"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 rounded-2xl overflow-hidden shadow-2xl mb-12 relative"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-400 to-transparent"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-white to-transparent rounded-full transform translate-x-32 translate-y-32"></div>
      </div>

      <div className="relative z-10 p-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full mb-4 shadow-lg p-2"
          >
            <img 
              src="/churchicon.png" 
              alt="Church Logo" 
              className="w-full h-full object-contain rounded-full"
            />
          </motion.div>
          
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            ST. JOHN THE EVANGELIST CATHOLIC CHURCH, ADENTANT
          </motion.h2>
          
          <motion.h3 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-2xl md:text-3xl font-semibold text-yellow-300 mb-2"
          >
            PARISH YOUTH COUNCIL
          </motion.h3>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-xl text-blue-100 mb-1"
          >
            Presents
          </motion.p>
          
          <motion.h4 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-3xl font-bold text-yellow-400 mb-2"
          >
            2025 YOUTH MONTH
          </motion.h4>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-white font-medium bg-white bg-opacity-20 inline-block px-6 py-2 rounded-full"
          >
            THEME - The Youth: Pillars of Universal Hope
          </motion.p>
        </div>

        {/* Schedule Grid */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid gap-4 md:gap-6"
        >
          {youthPrograms.slice(0, 5).map((program, index) => (
            <motion.div
              key={program.no}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.9 + (index * 0.1), duration: 0.5 }}
              className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-center gap-4">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {program.no}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-grow grid md:grid-cols-4 gap-3 md:gap-6">
                  {/* Activity */}
                  <div className="md:col-span-1">
                    <h4 className="text-white font-semibold text-lg mb-1 leading-tight">
                      {program.activity}
                    </h4>
                    <p className="text-yellow-200 text-sm italic">
                      {program.theme}
                    </p>
                  </div>

                  {/* Date */}
                  <div className="flex items-center">
                    <div className="bg-blue-600 bg-opacity-50 rounded-lg p-3 w-full">
                      <div className="flex items-center text-white">
                        <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium text-sm">{program.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* Time */}
                  <div className="flex items-center">
                    <div className="bg-teal-600 bg-opacity-50 rounded-lg p-3 w-full">
                      <div className="flex items-center text-white">
                        <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium text-sm">{program.time}</span>
                      </div>
                    </div>
                  </div>

                  {/* Venue */}
                  <div className="flex items-center">
                    <div className="bg-purple-600 bg-opacity-50 rounded-lg p-3 w-full">
                      <div className="flex items-center text-white">
                        <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                        </svg>
                        <span className="font-medium text-sm">{program.venue}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* Expandable Section */}
          <AnimatePresence>
            {showAll && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="grid gap-4 md:gap-6 overflow-hidden"
              >
                {youthPrograms.slice(5).map((program, index) => (
                  <motion.div
                    key={program.no}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white bg-opacity-15 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20 hover:bg-opacity-25 transition-all duration-300 group"
                  >
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      {/* Number Badge */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-yellow-400 text-blue-900 rounded-full flex items-center justify-center font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                          {program.no}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-grow grid md:grid-cols-4 gap-3 md:gap-6">
                        {/* Activity */}
                        <div className="md:col-span-1">
                          <h4 className="text-white font-semibold text-lg mb-1 leading-tight">
                            {program.activity}
                          </h4>
                          <p className="text-yellow-200 text-sm italic">
                            {program.theme}
                          </p>
                        </div>

                        {/* Date */}
                        <div className="flex items-center">
                          <div className="bg-blue-600 bg-opacity-50 rounded-lg p-3 w-full">
                            <div className="flex items-center text-white">
                              <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"/>
                              </svg>
                              <span className="font-medium text-sm">{program.date}</span>
                            </div>
                          </div>
                        </div>

                        {/* Time */}
                        <div className="flex items-center">
                          <div className="bg-teal-600 bg-opacity-50 rounded-lg p-3 w-full">
                            <div className="flex items-center text-white">
                              <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                              </svg>
                              <span className="font-medium text-sm">{program.time}</span>
                            </div>
                          </div>
                        </div>

                        {/* Venue */}
                        <div className="flex items-center">
                          <div className="bg-purple-600 bg-opacity-50 rounded-lg p-3 w-full">
                            <div className="flex items-center text-white">
                              <svg className="w-4 h-4 mr-2 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                              </svg>
                              <span className="font-medium text-sm">{program.venue}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          
          {/* Show More/Less Button */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="flex justify-center mt-6"
          >
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
            >
              <span>{showAll ? 'Show Less' : `Show ${youthPrograms.length - 5} More Programs`}</span>
              <motion.svg 
                className="w-5 h-5" 
                fill="currentColor" 
                viewBox="0 0 20 20"
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"/>
              </motion.svg>
            </button>
          </motion.div>
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-8 pt-8 border-t border-white border-opacity-20"
        >
          <p className="text-xl text-yellow-200 font-semibold mb-4">
            Join us in building hope for the future! 🌟
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg hover:bg-yellow-300 transition-colors duration-300">
              Youth: Pillars of Universal Hope
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default YouthMonthSchedule;

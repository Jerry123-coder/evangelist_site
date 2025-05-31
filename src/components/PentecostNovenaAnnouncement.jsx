import React from 'react';
import { motion } from 'framer-motion';

const PentecostNovenaAnnouncement = () => {
  const novenaSchedule = [
    {
      day: 'Day 1',
      date: 'Friday, May 30th',
      time: '6:30 PM',
      topic: 'Living Sacrifices: Serving Christ in Others',
      speaker: 'Rev. Fr. Joseph Effah Siaw'
    },
    {
      day: 'Day 2',
      date: 'Saturday, May 31st',
      time: '6:30 PM',
      topic: 'Christ’s Life Manifested in Us',
      speaker: 'Bro. Tony Minnah'
    },
    {
      day: 'Day 3',
      date: 'Sunday, June 1st',
      time: '6:30 PM',
      topic: 'The Hope of Glory Within',
      speaker: 'Bro. Isaac Oppong Kyekyeku'
    },
    {
      day: 'Day 4',
      date: 'Monday, June 2nd',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    },
    {
      day: 'Day 5',
      date: 'Tuesday, June 3rd',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    },
    {
      day: 'Day 6',
      date: 'Wednesday, June 4th',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    },
    {
      day: 'Day 7',
      date: 'Thursday, June 5th',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    },
    {
      day: 'Day 8',
      date: 'Friday, June 6th',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    },
    {
      day: 'Day 9',
      date: 'Saturday, June 7th',
      time: '6:30 PM',
      topic: 'To be announced',
      speaker: 'To be announced'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-r from-purple-800 to-red-800 rounded-xl overflow-hidden shadow-xl mb-12"
    >
      <div className="p-6 text-white">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-yellow-300 mb-2">PENTECOST NOVENA</h2>
            <p className="text-lg text-white">May 30th - June 7th, 2025</p>
          </div>
          <div className="mt-4 md:mt-0">
            <p className="text-yellow-200 font-medium">
              Daily at 6:30 PM
            </p>
            <p className="text-white">St. John the Evangelist Church premises</p>
          </div>
        </div>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-4 mb-6">
          <p className="text-center text-lg font-medium text-yellow-100 mb-2">
            Come and experience the indwelling of the Holy Spirit! 🔥💦
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white bg-opacity-10 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-white bg-opacity-20">
                <th className="py-3 px-4 text-left text-yellow-300 font-semibold">Day</th>
                <th className="py-3 px-4 text-left text-yellow-300 font-semibold">Date</th>
                <th className="py-3 px-4 text-left text-yellow-300 font-semibold">Time</th>
                <th className="py-3 px-4 text-left text-yellow-300 font-semibold">Topic</th>
                <th className="py-3 px-4 text-left text-yellow-300 font-semibold">Speaker</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white divide-opacity-20">
              {novenaSchedule.map((item, index) => (
                <tr key={index} className="hover:bg-white hover:bg-opacity-10 transition-colors">
                  <td className="py-3 px-4 font-medium text-white">{item.day}</td>
                  <td className="py-3 px-4 text-white">{item.date}</td>
                  <td className="py-3 px-4 text-white">{item.time}</td>
                  <td className="py-3 px-4 text-white">{item.topic}</td>
                  <td className="py-3 px-4 text-yellow-200">{item.speaker}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
};

export default PentecostNovenaAnnouncement;

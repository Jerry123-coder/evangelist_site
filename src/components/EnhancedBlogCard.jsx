import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaCalendarAlt, FaUser, FaMapMarkerAlt } from "react-icons/fa";

const EnhancedBlogCard = ({ post }) => {
  const { title, date, category, image, author, summary, url, featured, isEvent, location } = post;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`w-full rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 bg-white 
        ${featured ? 'border-2 border-yellow-400' : ''}`}
    >
      {/* Blog Image */}
      <div className="relative overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover object-center transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute top-0 right-0 ${category === 'Announcements' ? 'bg-yellow-500' : 'bg-blue-600'} text-white px-3 py-1 text-xs font-medium`}>
          {category}
        </div>
        {featured && (
          <div className="absolute top-0 left-0 bg-yellow-500 text-white px-3 py-1 text-xs font-medium">
            Featured
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        {/* Category and Event Badge */}
        <div className="flex justify-between items-start mb-2">
          <div className="flex flex-wrap gap-2">
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${category === 'Announcements' ? 'bg-yellow-500' : 'bg-blue-600'} text-white`}>
              {category}
            </span>
            {isEvent && (
              <span className="text-xs font-semibold px-2 py-1 rounded-full bg-red-500 text-white">
                Event
              </span>
            )}
          </div>
        </div>
        
        {/* Date, Location and Author */}
        <div className="flex flex-wrap gap-2 mb-3">
          {/* Date */}
          <div className="flex items-center text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-1">
            <FaCalendarAlt className="h-3 w-3 mr-1" />
            <span>{date}</span>
          </div>
          
          {/* Location - Only shown for events */}
          {isEvent && location && (
            <div className="flex items-center text-xs text-blue-600 bg-blue-50 rounded-full px-2 py-1">
              <FaMapMarkerAlt className="h-3 w-3 mr-1" />
              <span>{location}</span>
            </div>
          )}
          
          {/* Author */}
          <div className="flex items-center text-xs text-gray-500 bg-gray-100 rounded-full px-2 py-1">
            <FaUser className="h-3 w-3 mr-1" />
            <span>{author}</span>
          </div>
        </div>

        {/* Title */}
        <h2 className={`text-xl font-bold mb-2 line-clamp-2 ${isEvent ? 'text-red-700' : category === 'Announcements' ? 'text-yellow-700' : 'text-gray-800'}`}>{title}</h2>

        {/* Summary */}
        <p className="text-gray-600 mb-4 line-clamp-4">{summary}</p>

        {/* Read More Button */}
        <div className="flex justify-end">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Read More
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default EnhancedBlogCard;

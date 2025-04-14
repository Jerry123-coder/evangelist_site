import React from "react";
import { motion } from "framer-motion";

const EnhancedBlogCard = ({ post }) => {
  const { title, date, category, image, author, summary, url, featured } = post;

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

      <div className="p-5">
        {/* Date and Author */}
        <div className="flex justify-between items-center mb-3 text-sm text-gray-500">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>{date}</span>
          </div>
          <span className="text-blue-600 font-medium">{author}</span>
        </div>

        {/* Title */}
        <h2 className={`text-xl font-bold mb-2 line-clamp-2 ${category === 'Announcements' ? 'text-yellow-700' : 'text-gray-800'}`}>{title}</h2>

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

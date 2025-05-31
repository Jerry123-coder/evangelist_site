import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const EasterPopup = ({ isOpen, onClose, bellPosition }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 300); // Animation duration
  };

  if (typeof document === 'undefined') {
    return null;
  }

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-[9999]"
            onClick={handleClose}
          />
          
          {/* Popup */}
          <div className="fixed inset-0 flex items-center justify-center p-4 z-[10000] pointer-events-none">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
              }}
              exit={bellPosition?.top ? { 
                scale: 0.1, 
                opacity: 0,
                x: bellPosition.left - (window.innerWidth / 2),
                y: bellPosition.top - 70,
                transition: { duration: 0.6, ease: "easeInOut" }
              } : {
                scale: 0.8, 
                opacity: 0,
                transition: { duration: 0.3 }
              }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="w-full max-w-md bg-white rounded-xl overflow-hidden shadow-2xl pointer-events-auto"
            >
              <div className="relative">
                <img 
                  src="/easter-pop-up.jpg" 
                  alt="Easter Special" 
                  className="w-full h-auto"
                />
                <motion.button
                  className="absolute top-3 right-3 bg-white/80 hover:bg-white text-gray-800 rounded-full p-1 shadow-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleClose}
                >
                  <IoMdClose size={24} />
                </motion.button>
              </div>
              <div className="p-4 text-center bg-gradient-to-b from-blue-50 to-white">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Pentecost Novena</h3>
                <p className="text-gray-700">Our 9-day Novena to the Holy Spirit begins this <strong>Friday, May 30th, to June 7th</strong>, every day at 6:30 pm at the St. John the Evangelist Church premises</p>
                <Link to="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                  >
                    Read More
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default EasterPopup;

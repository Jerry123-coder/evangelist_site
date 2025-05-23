import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';
import styles from './EasterPopup.module.css';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const EasterPopup = ({ isOpen, onClose, bellPosition }) => {
  const [isClosing, setIsClosing] = useState(false);
  
  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, 600); // Animation duration
  };
  return (
    typeof document !== 'undefined'
      ? ReactDOM.createPortal(
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
                <motion.div
                  initial={{ scale: 0.8, opacity: 0, y: -50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  exit={bellPosition.top && typeof window !== 'undefined' ? { 
                    scale: 0.1, 
                    opacity: 0,
                    x: bellPosition.left - (typeof window !== 'undefined' ? window.innerWidth/2 : 0),
                    y: bellPosition.top - 70,
                    transition: { duration: 0.6, ease: "easeInOut" }
                  } : {
                    scale: 0.8, 
                    opacity: 0,
                    y: -100,
                    transition: { duration: 0.3 }
                  }}
                  transition={{ type: "spring", damping: 25, stiffness: 300 }}
                  className={`bg-white rounded-xl overflow-hidden shadow-2xl ${styles.popupCenter}`}
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
                    <h3 className="text-xl font-bold text-blue-600 mb-2">Easter Celebration</h3>
                    <p className="text-gray-700">Join us for our special Easter celebration services!</p>
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
              </>
            )}
          </AnimatePresence>,
          document.body
        )
      : null
  );
};

export default EasterPopup;

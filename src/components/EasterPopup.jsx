import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoMdClose } from 'react-icons/io';

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
            exit={bellPosition.top ? { 
              scale: 0.1, 
              opacity: 0,
              x: bellPosition.left - window.innerWidth/2,
              y: bellPosition.top - 70,
              transition: { duration: 0.6, ease: "easeInOut" }
            } : {
              scale: 0.8, 
              opacity: 0,
              y: -100,
              transition: { duration: 0.3 }
            }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 10000,
              width: '90%',
              maxWidth: '600px',
              margin: '0 auto'
            }}
            className="bg-white rounded-xl overflow-hidden shadow-2xl"

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
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-3 px-6 py-2 bg-blue-500 text-white rounded-full font-medium hover:bg-blue-600 transition-colors"
                onClick={handleClose}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default EasterPopup;

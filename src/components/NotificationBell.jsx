import React from 'react';
import { motion } from 'framer-motion';
import { FaBell } from 'react-icons/fa';

const NotificationBell = ({ onClick, hasNotification = true }) => {
  return (
    <motion.div
      className="relative cursor-pointer"
      initial={{ scale: 0, rotate: -45 }}
      animate={{ scale: 1, rotate: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={onClick}
    >
      <FaBell className="text-xl text-blue-500 hover:text-blue-600" />
      
      {hasNotification && (
        <motion.div 
          className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        />
      )}
    </motion.div>
  );
};

export default NotificationBell;

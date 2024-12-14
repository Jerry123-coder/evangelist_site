import React, { useState } from "react";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* WhatsApp Floating Button */}
      <button
        onClick={toggleCard}
        className="fixed bottom-4 right-4 bg-green-500 w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-green-600 transition-transform hover:scale-110 z-50"
      >
        {isOpen ? <FaTimes size={24} /> : <FaWhatsapp size={24} />}
      </button>

      {/* Expandable Chat Card */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white w-72 shadow-lg rounded-lg p-4 z-40 animate-slide-up">
          <div className="flex items-center space-x-2 mb-3">
            <FaWhatsapp className="text-green-500  text-2xl" />
            <h2 className="font-semibold text-gray-700">Start a Conversation</h2>
          </div>
          <p className="text-sm text-gray-500">
            Hi! Click below to chat with us on{" "}
            <span className="font-medium text-green-600">WhatsApp</span>.
          </p>
          <div className="flex items-center mt-4 bg-green-100 p-2 rounded">
            <FaWhatsapp className="text-green-500 text-3xl mr-2" />
            <div>
              <h3 className="text-sm font-semibold text-gray-700">MMGC</h3>
              <span className="text-xs text-gray-500">Online Chat</span>
            </div>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-auto text-green-500 hover:text-green-600"
            >
              <FaWhatsapp size={24} />
            </a>
          </div>
          <p className="text-xs text-gray-400 mt-2">
            The team typically replies in a few minutes.
          </p>
        </div>
      )}
    </div>
  );
};

export default WhatsAppButton;

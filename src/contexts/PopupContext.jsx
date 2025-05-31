import React, { createContext, useState, useContext, useEffect } from 'react';

const PopupContext = createContext();

export const usePopup = () => {
  return useContext(PopupContext);
};

export const PopupProvider = ({ children }) => {
  const [showEasterPopup, setShowEasterPopup] = useState(false);
  const [hasInitialized, setHasInitialized] = useState(false);

  useEffect(() => {
    // Only run this effect once when the app loads
    if (hasInitialized) return;
    
    const hasSeenPopup = localStorage.getItem('hasSeenEasterPopup');
    const isHomePage = window.location.pathname === '/' || window.location.pathname === '';
    
    if (isHomePage && !hasSeenPopup) {
      const timer = setTimeout(() => {
        setShowEasterPopup(true);
        localStorage.setItem('hasSeenEasterPopup', 'true');
        setHasInitialized(true);
      }, 1000);
      
      return () => clearTimeout(timer);
    }
    
    setHasInitialized(true);
  }, [hasInitialized]);

  const closePopup = () => {
    setShowEasterPopup(false);
  };

  return (
    <PopupContext.Provider value={{ showEasterPopup, closePopup, setShowEasterPopup }}>
      {children}
    </PopupContext.Provider>
  );
};

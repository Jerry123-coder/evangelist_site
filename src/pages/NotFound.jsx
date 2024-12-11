import React, { useEffect, useRef } from "react";
// import animation from '../assets/animation/'
import lottie from "lottie-web";
import animationData from "../assets/animation/data.json";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const NotFound = () => {
  const animationContainer = useRef(null);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
    },
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
  };

  useEffect(() => {
    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg", // Use 'svg' or 'canvas'
      loop: true, // Set to true for loop, false for no loop
      autoplay: true, // Set to true to start playing automatically
      animationData: animationData, // Your animation JSON data
    });

    return () => {
      // Cleanup on unmount
      anim.destroy();
    };
  }, []);

  return (
    <main>
      {" "}
      <Navbar />
      <div className="flex flex-col h-screen w-screen justify-center items-center font-bold text-4xl text-white/50 bg-slate-900">
        <div ref={animationContainer} />
        <div>So sorry, page still under construction...</div>
      </div>
    </main>
  );
};

export default NotFound;

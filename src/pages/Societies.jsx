import React, { useEffect, useRef, useState } from "react";
// import animation from '../assets/animation/'
import lottie from "lottie-web";
import animationData from "../assets/animation/data.json";

const Societies = () => {
  const animationContainer = useRef(null);
  const [isActive, setIsActive]=useState("Knights of St. John International")

  const handleSocietyDisplay = (society) => {
    setIsActive(society.name)
  }

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

  const societies = [
    {
      name: "Knights of St. John International",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Knights of Marshal",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Chrstian Mothers",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "St. Theresas",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Legion of Mary",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Knights and Ladies of the Alter",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Christian Sons",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
    {
      name: "Christian Daughters",
      details:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore officia iste maxime! Dolorem perferendis odio corporis voluptatum corrupti, molestiae fugiat pariatur similique expedita, quas obcaecati ab at, aut non sunt?",
    },
  ];

  return (
    <div className='flex flex-col h-screen w-screen justify-center items-center font-bold text-4xl text-white/50 bg-slate-900'>
        <div ref={animationContainer} />
        <div className="px-10 text-center md:text-left text-3xl">Sorry, page still under construction...</div>
    </div>

    // <div className="flex h-screen w-screen font-bold text-4xl  px-[10vw] py-[5rem]">
    //   <div className="w-1/4 flex flex-col bg-blue-100">
    //     <div className="text-lg flex jusitfy-between w-full h-20">
    //       <div className="flex items-center justify-center px-6 hover:bg-blue-400 rounded-t-xl cursor-pointer shadow-inner ">Ministries</div>
    //       <div  className="flex items-center justify-center px-6">Societies</div>
    //       <div  className="flex items-center justify-center px-6">Day Borns</div>
    //     </div>
    //     {societies.map((society) => (
    //       <div
    //         // key={index}
    //         onClick={() => handleSocietyDisplay(society)}
    //         className={`text-lg font-base flex items-center pl-20 hover:bg-blue-400 cursor-pointer duration-200 transition ease-in py-5 hover:shadow-lg hover:shadow-black/20 rounded ${isActive == society.name && 'bg-blue-400 rounded-r-none' }`}
    //       >
    //         {society.name}
    //       </div>
    //     ))}
    //   </div>
    //   <div className="w-3/4 bg-slate-100">
    //     <div className="w-full py-5">
    //       {/* {
    //         societies.map((society) => (
    //           // <div className="text-base font-medium">{society.details}</div>
    //         ))
    //       } */}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Societies;

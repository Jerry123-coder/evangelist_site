import React, { useEffect, useRef } from 'react'
// import animation from '../assets/animation/'
import lottie from 'lottie-web';
import animationData from '../assets/animation/data.json';

const Gallery = () => {

    const animationContainer = useRef(null);

    useEffect(() => {
      // Initialize Lottie animation
      const anim = lottie.loadAnimation({
        container: animationContainer.current,
        renderer: 'svg', // Use 'svg' or 'canvas'
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
    
    <div className='flex flex-col h-screen w-screen justify-center items-center font-bold text-4xl text-white/50 bg-slate-900'>
    <div ref={animationContainer} />
    <div className="px-10 text-center md:text-left text-3xl">Sorry, page still under construction...</div>
</div>
  )
}

export default Gallery
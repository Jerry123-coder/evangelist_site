import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const HeroCarousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 30000);

    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <AnimatePresence initial={false}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
            style={{
              backgroundImage: `url(${slides[currentIndex].image})`,
              backgroundSize: slides[currentIndex].maintext === "Come As You Are" ? '100% auto' : 'cover',
              backgroundPosition: 'center',
              backgroundColor: '#000',
              width: '100%',
              height: '100%',
              minWidth: slides[currentIndex].maintext === "Come As You Are" ? '100vw' : 'auto',
              minHeight: slides[currentIndex].maintext === "Come As You Are" ? '100%' : 'auto'
            }}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
          </div>

          <div className="relative h-full flex items-center justify-center">
            <div className="text-white text-center z-10 w-[60rem] flex flex-col gap-5 p-8 lg:p-0">
              <div className="text-xs lg:text-2xl px-8 invisible lg:visible lg:mb-8 font-base">
                {slides[currentIndex].subtext}
              </div>
              <p className="text-4xl md:text-6xl lg:text-8xl font-bold w-full">
                {slides[currentIndex].maintext}
              </p>
              <div className="flex space-x-10 justify-center md:mt-10">
                <button className="bg-blue-500 w-[12rem] h-[3rem] text-lg text-white rounded-full hover:scale-105 hover:bg-blue-600 transition-all duration-300">
                  {slides[currentIndex].buttonText}
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        <FaChevronLeft className="text-white text-base" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-2 z-20"
      >
        <FaChevronRight className="text-white text-base" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

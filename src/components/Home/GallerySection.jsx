import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import masspic from "../../assets/masspic.jpg";
import masspic2 from "../../assets/masspic2.jpg";

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Images including view more
  const images = [
    { url: "/g1.jpg", alt: "Parish event 1" },
    { url: "/g2.jpg", alt: "Parish event 2" },
    { url: "/g3.jpg", alt: "Parish event 3" },
    { url: "/g4.jpg", alt: "Parish event 4" },
    { url: "/g5.jpg", alt: "Parish event 5" },
    { url: "/g6.jpg", alt: "Parish event 6" },
    { url: masspic, alt: "Mass celebration" },
    { url: masspic2, alt: "Mass celebration 2" },
  ];


  const totalImages = images.length;

  // Navigate to the next slide
  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  // Navigate to the previous slide
  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, [currentIndex]); // Add currentIndex to dependency array

  // Check if current slide is the view more slide
//   const isViewMoreSlide = images[currentIndex].isViewMore;

  return (
    <div className="mx-auto px-4 py-12 bg-white">
      {/* Header Section */}
      <div className="text-center mb-12">
        <p className="text-blue-900 font-semibold mb-4">GALLERY</p>
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Experience the Life of Our Parish Through Photos
        </h1>
        <p className="text-gray-700 max-w-3xl mx-auto">
          Welcome to the St John The Evangelist Catholic Church Gallery! Here, you can
          explore moments of faith, fellowship, and community captured through
          the lens. Our gallery showcases the vibrant life of our parish, from
          joyous celebrations to meaningful acts of service. Dive in and witness
          the spirit of Christ the King Catholic Church.
        </p>
      </div>

      {/* Carousel Section */}
      <div className="relative mb-12">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / 3)}%)` }}
          >
            {images.map((image, index) =>
           
                <div
                  key={index}
                  className="w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2"
                >
                  <div className="aspect-[4/3] text-black relative overflow-hidden rounded-lg">
                    <img
                      src={image.url}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
            )} 
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg -ml-4 z-10"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-800" />
        </button>

        {/* Conditional rendering for right arrow */}
        {/* {!isViewMoreSlide && ( */}
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg -mr-4 z-10"
          >
            <FaChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        {/* )} */}
      </div>

      {/* View More Button */}
      <div className="text-center mt-8">
        <Link
          to="/gallery"
          className="inline-block px-8 py-3 bg-white/5 backdrop-blur-sm border border-white/20 text-black font-semibold rounded-full hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 hover:-translate-y-1"
        >
          View More Photos
        </Link>
      </div>
    </div>
  );
};

export default GallerySection;

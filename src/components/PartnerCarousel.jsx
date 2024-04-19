import React from 'react';
// import Slider from 'react-slick';
import kad from '../assets/partner_logos/KAD.png';
import tla from '../assets/partner_logos/tla.png'
import vestermills from '../assets/partner_logos/vestermills.png'

const PartnerCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of icons to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Change icon every 3 seconds
  };

  const partnerIcons = [
    vestermills,
    kad,
    tla,
    // Add more partner icons here
  ];

    <div className='w-full'>
    <Slider {...settings}>
      {partnerIcons.map((icon, index) => (
        <div key={index} className="px-2 w-10 h-10">
          <img src={(`../assets/${icon}`).default} alt={`Partner ${index + 1}`} />
        </div>
      ))}
    </Slider>
    </div>
  
};

export default PartnerCarousel;

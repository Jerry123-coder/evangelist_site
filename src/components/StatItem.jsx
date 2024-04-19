import React, { useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';


const Statistic = ({ value, label }) => {
    const [isVisible, setIsVisible] = useState(false);


  return (
   <div className="flex items-center gap-5 text-center text-white text-3xl font-bold z-10 w-full justify-center">
    <div className='bg-white/30 px-6 py-10 rounded-full'>Icons</div>
      <div className='flex flex-col justify-start text-left w-full'>
      <VisibilitySensor
        onChange={(isVisible) => {
          if (isVisible) {
            setIsVisible(true);
          }
        }}
      >
        
        <CountUp end={isVisible ? value : 0} duration={2} separator="," />
      </VisibilitySensor>
      <p className="text-white text-xl font-normal mt-4">{label}</p>
      </div>
    </div>
  );
};

export default Statistic;

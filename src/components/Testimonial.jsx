import React from 'react';

const Testimonial = () => {
  return (
    <div className="relative flex flex-col w-[23rem] h-[25rem] bg-white rounded-lg shadow-lg p-4 mx-2">
      
      <div className="absolute -top-12 left-32 mr-4">
          <img
            src="https://i0.wp.com/kadmanufacturing.com/wp-content/uploads/2021/08/9P5fmv6g_400x400-150x150-1.jpg?fit=150%2C150&amp;ssl=1"
            alt="Testimonial"
            className="w-[7rem] h-[7rem] rounded-full"
          />
        </div>
      <div className="flex items-center mb-4">
       
        <div className='flex w-full items-center justify-center mt-20'>
          <h6 className="   text-2xl font-bold">Queiroz Galvão</h6>
        </div>
      </div>
      <div className="text-gray-700 mt-8">
        <blockquote className="text-base mb-4 flex flex-col justify-center">
          <p className="mb-6 w-full text-center text-xl font-md">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <img
            src="https://i0.wp.com/kadmanufacturing.com/wp-content/uploads/2019/05/quote.png?resize=32%2C24&amp;ssl=1"
            alt="Quote"
            className="w-8 h-6 mx-auto"
          />
        </blockquote>
      </div>
    </div>
  );
};

export default Testimonial;

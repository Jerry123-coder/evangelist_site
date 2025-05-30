const PastorSection = ({ image }) => {
  return (
    <div className="py-12 lg:py-16 px-4 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center">
        <div
          className="w-full lg:w-1/2 h-[30rem] lg:h-[35rem] mb-8 lg:mb-0 flex items-center justify-center"
          data-aos="fade-right"
        >
          <img
            src={image}
            alt="Image of Pastor"
            className="max-w-full max-h-full object-contain"
          />
        </div>

        <div className="flex flex-col justify-center w-full lg:w-1/2 lg:pl-12">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-6 text-center lg:text-left"
            data-aos="fade-left"
          >
            A Message From The Pastor
          </h2>
          
          <p 
            className="text-lg mb-6 text-justify lg:text-left"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            I am delighted to warmly welcome you to our homepage. You have come to the right place at the right time. 
            Here, we are very passionate about your eternal destiny and committed to your spiritual welfare.
          </p>
          
          <p 
            className="text-lg mb-8 text-justify lg:text-left"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            As you continue to explore and enjoy the riches of grace uncovered through our numerous materials and 
            online resources, may the Lord continue to richly bless you (Amen).
          </p>
          
          <div 
            className="border-t border-gray-300 pt-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <p className="font-semibold">Very Rev. Fr. Edmund Donkor-Baine</p>
            <p className="text-sm text-gray-600">Parish Priest</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastorSection;

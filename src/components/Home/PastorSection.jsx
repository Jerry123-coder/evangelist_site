const PastorSection = ({ image }) => {
  return (
    <div className="flex flex-col lg:flex-row h-[90vh] w-screen lg:pt-[3rem] px-8 lg:px-[10rem]">
      <div
        className="hidden lg:relative lg:flex w-full lg:w-1/2 h-[40rem] z-30"
        data-aos="fade-left"
      >
        <img
          src={image}
          alt="Image of Pastor"
          className="px-10 pt-10 h-full object-cover "
        />
      </div>


      <div className="flex flex-col justify-center lg:justify-start items-center w-full lg:w-1/2 lg:pr-10 py-20">
        <h3
          className="text-3xl uppercase lg:text-3xl font-bold pb-5 lg:w-full text-white text-center flex flex-col lg:flex-row"
          data-aos="fade-down"
        >
          <span>A Message From </span>
          <span> The Pastor</span>
        </h3>
        <p
          className="flex flex-col text-lg mb-5 text-justify lg:text-left"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <span>
            I am delighted to warmly welcome you to our homepage. You have come
            to the right place at the right time. Here, we are very passionate
            about your eternal destiny and committed to your spiritual welfare.
          </span>
          <span className="mt-5">
            As you continue to explore and enjoy the riches of grace uncovered
            through our numerous materials and online resources, may the Lord
            continue to richly bless you (Amen).
          </span>
        </p>
        <div
          className="flex flex-col lg:w-full text-slate-900"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <span className="font-bold text-lg text-white/40">
            Very Rev. Fr. Edmund Donkor-Baine
          </span>
          <span className="text-sm text-white/40">Parish Priest</span>
        </div>
      </div>
    </div>
  );
};
export default PastorSection;

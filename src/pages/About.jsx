import Statistic from "../components/StatItem"
import statImage from "../assets/stn_image2.jpg";

const About = () => {
  return (
  <div>
    <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
        <div className="text-white z-10 flex flex-col items-center">
          <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">All About</span>
          <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">St. John The Evangelist Catholic Church, <span className="text-blue-500">Adenta</span></span>
        </div>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
      <span className="text-3xl font-bold text-left w-full">Our Story</span>
      <span>
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      <span className="">
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
      <span className="text-3xl font-bold text-left w-full">What do we do?</span>
      <span>
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      <span className="">
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      </div>

      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
      <span className="text-3xl font-bold text-left w-full">How can you hop on?</span>
      <span>
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      <span className="">
      The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives. The Seed Transformation Program is a yearlong, on-the-ground leadership program for established founders and CEOs in emerging economies focused on growing their businesses and increasing the positive impact they have in their communities. Seed operates regional and satellite centers in West Africa, East Africa, Southern Africa, and India.
      </span>
      </div>


      <div className="relative flex flex-col  bg-cover bg-center items-center gap-5 w-screen py-10 px-8 lg:px-[20rem]">
      <span className="text-3xl font-bold text-left w-full">Meet Our Leadership</span>
      <div className="flex w-full gap-8">
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
      </div>
      <div className="flex w-full gap-4">
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
        <div className="bg-slate-200 h-[30rem] flex-1 rounded-lg"></div>
      </div>
      </div>
  </div> 
    
  )
}

export default About
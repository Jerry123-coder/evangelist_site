import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import BlogCard from "../components/BlogCard";
import ProgramCard from "../components/ProgramCard";
import { project1, project2, project3, project4, project5} from ".";
import school1 from "../assets/gallery/shs/school1.jpeg";
import school2 from "../assets/gallery/shs/school2.jpeg";
import school3 from "../assets/gallery/shs/school3.jpeg";
import school4 from "../assets/gallery/shs/school4.jpeg";
import school5 from "../assets/gallery/shs/school5.jpeg";
import school6 from "../assets/gallery/shs/school6.jpg";
import school7 from "../assets/gallery/shs/school7.jpg";
import school8 from "../assets/gallery/shs/school8.jpg";
import school9 from "../assets/gallery/shs/school9.jpg";
import school10 from "../assets/gallery/shs/school10.jpg";
import school11 from "../assets/gallery/shs/school11.jpg";
import school12 from "../assets/gallery/shs/school12.jpg";
import school13 from "../assets/gallery/shs/school13.jpg";
import school14 from "../assets/gallery/shs/school14.jpg";
import in1 from "../assets/gallery/building/in1.jpeg";
import in2 from "../assets/gallery/building/in2.jpeg";
import in3 from "../assets/gallery/building/in3.jpeg";
import in4 from "../assets/gallery/building/in4.jpeg";
import in5 from "../assets/gallery/building/in5.jpeg";

import statue1 from "../assets/gallery/patron/statue1.jpeg";
import statue2 from "../assets/gallery/patron/statue2.jpeg";
import statue3 from "../assets/gallery/patron/statue3.jpeg";

import jhs1 from "../assets/gallery/jhs/jhs1.jpeg";
import jhs2 from "../assets/gallery/jhs/jhs2.jpeg";
import jhs3 from "../assets/gallery/jhs/jhs3.jpeg";

import out1 from "../assets/gallery/out/out1.jpeg";
import out2 from "../assets/gallery/out/out2.jpeg";
import out3 from "../assets/gallery/out/out3.jpeg";
import out4 from "../assets/gallery/out/out4.jpeg";
import out5 from "../assets/gallery/out/out5.jpeg";
import out7 from "../assets/gallery/out/out7.jpeg";
import out8 from "../assets/gallery/out/out8.jpeg";
import out9 from "../assets/gallery/out/out9.jpeg";
import out10 from "../assets/gallery/out/out10.jpeg";
import out11 from "../assets/gallery/out/out11.jpeg";
import out12 from "../assets/gallery/out/out12.jpeg";
import out13 from "../assets/gallery/out/out13.jpeg";
import out15 from "../assets/gallery/out/out15.jpeg";

import groto1 from "../assets/gallery/grotto/groto1.jpeg";
import groto2 from "../assets/gallery/grotto/groto2.jpeg";
import groto3 from "../assets/gallery/grotto/groto3.jpeg";

import credit1 from "../assets/gallery/credit/credit1.jpeg";
import credit2 from "../assets/gallery/credit/credit2.jpeg";

const Gallery = () => {

  const [userEmail, setUserEmail] = useState("");
  const [category, setCategory] = useState("View all");
  const items = ["Upcoming", "Programs", "Gallery"];

  const handleUserEmailChange = () => {
       setUserEmail('');
       alert("Email service unavailbale")
  };


  return (
<>
    <div
    className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
    style={{
      backgroundImage: `url(${statImage})`,
    }}
  >
    {/* Dark overlay */}
    <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
    <div className="text-white z-10 flex flex-col items-center">
      <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">Welcome To Our</span>
      <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">Photo Gallery</span>
    </div>
  </div>
  <div className="flex flex-col space-y-5 w-full pb- px-8 lg:px-[20rem] mb-16">

<div className="border-b border-b-slate-300 my-10">
<ul className="flex md:gap-16 justify-between md:justify-start">
     {items.map((item) => (
          <div key={item}>
               <li
                    onClick={() => {
                         setCategory(item);
                    }}
                    className={`font-bold cursor-pointer ${category === item
                              ? "border-b-2 border-b-blue-500 text-blue-500"
                              : ""
                         } `}
               >
                    {item}
               </li>
          </div>
     ))}
</ul>
</div>
{/* <div className='flex flex-wrap justify-center lg:flex-row lg:justify-center gap-x-[2%] gap-y-8 overflow-x-auto w-full  py-2 px-0.5'>
<ProgramCard />
<ProgramCard />
<ProgramCard />
<ProgramCard />
<ProgramCard />
<ProgramCard />
</div> */}

<div>
<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">Chapel Interior</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[in1, in2, in3, in4, in5].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="Church Interior Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">Chapel Exterior</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[out3, out4, out5, out15, out8, out7, out9, out10, out11, out12, out13, out1, out2].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="Church Exterior Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">Statue of Patron Saint</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[statue1, statue3, statue2].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="Statue of Patron Saint Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">Our Lady of Knock Grotto</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[groto1, groto2, groto3].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="Our Lady of Knock Grotto Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">JHS Block</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[jhs1, jhs2, jhs3].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="JHS Block Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-10">
  <h2 className="text-2xl font-bold mb-4 mt-10">Credit Union</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[credit1, credit2].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="Credit Union Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section mb-8">
  <h2 className="text-2xl font-bold mb-4">JHS Block Construction</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[project1, project2, project3, project4, project5].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="JHS Construction Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>

<div className="gallery-section">
  <h2 className="text-2xl font-bold mb-4 mt-10">SHS Visitation</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {[school1, school2, school3, school4, school5, school6, school7, school8, school9, school10, school11, school12, school13, school14].map((img, index) => (
      <div key={index} className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg group">
        <img 
          src={img} 
          alt="School Visitation Gallery" 
          className="w-full h-full object-cover transform transition-all duration-[2000ms] ease-out group-hover:scale-125 group-hover:rotate-2"
        />
      </div>
    ))}
  </div>
</div>
</div>

<div className="lg:w-full flex justify-center">
{/* <div 

className="bg-[#A61D37] hover:bg-[#d40d32] w-[10rem] h-[2.5rem] mt-10 rounded-full  text-white text-xl font-bold flex items-center justify-center cursor-pointer  hover:scale-105 transition-all duration-200 ease-in-out">
See More
</div> */}
</div>
</div>
</>
  )
}

export default Gallery
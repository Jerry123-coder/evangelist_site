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
<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">Chapel Interior</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={in1} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={in2} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={in3} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={in4} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={in5} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">Chapel Exterior</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    
    <img src={out3} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out4} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out5} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out15} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out8} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out7} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    
    
    <img src={out9} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out10} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    
    <img src={out11} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out12} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out13} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
   
    
    <img src={out1} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
    <img src={out2} alt="CHurch Exterior Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">Statue of Patron Saint</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={statue1} alt="Statue of Patron Saint Gallery" class="w-full h-auto rounded-lg" />
    <img src={statue3} alt="Statue of Patron Saint Gallery" class="w-full h-auto rounded-lg" />
    <img src={statue2} alt="Statue of Patron Saint Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">Our Lady of Knock Grotto</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={groto1} alt="Our Lady of Knock Grotto Gallery" class="w-full h-auto rounded-lg" />
    <img src={groto2} alt="Our Lady of Knock Grotto Gallery" class="w-full h-auto rounded-lg" />
    <img src={groto3} alt="Our Lady of Knock Grotto Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">JHS Block</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={jhs1} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={jhs2} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
    <img src={jhs3} alt="CHurch Interior Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

<div class="gallery-section mb-10">
  <h2 class="text-2xl font-bold mb-4 mt-10">Credit Union</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={credit1} alt="Credit Union Gallery" class="w-full h-auto rounded-lg" />
    <img src={credit2} alt="Credit Union Gallery" class="w-full h-auto rounded-lg" />
  </div>
</div>

    <div class="gallery-section mb-8">
  <h2 class="text-2xl font-bold mb-4">JHS Block Construction</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your first set of 20 pictures here --> */} 
    <img src={project1} alt="Credit Union Gallery" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project2} alt="Credit Union Gallery" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project3} alt="Credit Union Gallery" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project4} alt="Credit Union Gallery" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project5} alt="Credit Union Gallery" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    {/* <img src={project6} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project7} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project8} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project9} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project10} alt="Image 2" class="w-full h-auto rounded-lg" /> */}
    {/* <!-- Add more images --> */}
  </div>
</div>

<div class="gallery-section">
  <h2 class="text-2xl font-bold mb-4 mt-10">SHS Visitation</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src={school1} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school2} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school3} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school4} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school5} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school5} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school6} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school7} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school8} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school9} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school10} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school11} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school12} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school13} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    <img src={school14} alt="School Visitation Gallery" class="w-full h-auto rounded-lg" />
    {/* <!-- Add more images --> */}
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
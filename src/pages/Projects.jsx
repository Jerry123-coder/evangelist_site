import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import BlogCard from "../components/BlogCard";
import ProgramCard from "../components/ProgramCard";
import { project1, project2, project3, project4, project5, } from ".";

const Projects = () => {

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
      <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">All You Need To Know About</span>
      <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">On Going Projects</span>
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
    <div class="gallery-section mb-8">
  <h2 class="text-2xl font-bold mb-4">JHS Block Construction</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your first set of 20 pictures here --> */} 
    <img src={project1} alt="Image 1" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project2} alt="Image 2" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project3} alt="Image 2" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project4} alt="Image 2" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    <img src={project5} alt="Image 2" class="w-full h-auto rounded-lg hover:scale-1.3 cursor-pointer transition duration-200 ease-in " />
    {/* <img src={project6} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project7} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project8} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project9} alt="Image 2" class="w-full h-auto rounded-lg" />
    <img src={project10} alt="Image 2" class="w-full h-auto rounded-lg" /> */}
    {/* <!-- Add more images --> */}
  </div>
</div>

<div class="gallery-section">
  <h2 class="text-2xl font-bold mb-4">Gallery Section 2</h2>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
    {/* <!-- Add your second set of 20 pictures here --> */}
    <img src="image21.jpg" alt="Image 21" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
    <img src="image22.jpg" alt="Image 22" class="w-full h-auto rounded-lg" />
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

export default Projects
import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import BlogCard from "../components/BlogCard";
import ProgramCard from "../components/ProgramCard";
import programme from '../assets/programme.jpg'
import programme1 from '../assets/programme1.jpg'
import programme2 from '../assets/programme2.jpg'
import programme3 from '../assets/programme3.jpg'

const Programs = () => {

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
    className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[10rem] md:h-[20rem] px-8 lg:px-[20rem] justify-between"
    style={{
      backgroundImage: `url(${statImage})`,
    }}
  >
    {/* Dark overlay */}
    <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
    <div className="text-white z-10 flex flex-col items-center">
      <span className="text-2xl text-center w-full lg:text-left mb-5 lg:mb-2 font-semibold opacity-75 pt-10">All You Need To Know About</span>
      <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">Our Programs</span>
    </div>
  </div>
  <div className="flex flex-col space-y-5 w-full pb- px-8 lg:px-[20rem] mb-10">

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
<div className='flex flex-wrap justify-center lg:flex-row lg:justify-center gap-x-[2%] gap-y-8 overflow-x-auto w-full  py-2 px-0.5'>
<ProgramCard programme={programme} title={'25th Anniversary'} summary={'Celebrate 25 years of faith and community on Sunday, August 4th, 2024, marking a quarter-century of shared blessings and growth.'}/>
<ProgramCard programme={programme1}  title={'Evangelist School Visitation'} summary={'Engage with our vibrant Youth Council as they embark on meaningful school visitations, fostering connections and spreading the message of hope and love.'}/>
<ProgramCard programme={programme2}  title={'Pentecost Novena'} summary={'Join us in prayer and reflection during the Pentecost novena, from May 10th to May 17th, 2017, as we seek the guidance and inspiration of the Holy Spirit.'}/>
<ProgramCard programme={programme3}  title={'Youth Quiz'} summary={' Test your knowledge and camaraderie at the Youth Quiz on May 11th, 2024, a fun-filled event where learning and fellowship come together.a'}/>

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

export default Programs

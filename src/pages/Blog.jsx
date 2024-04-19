import { useState } from "react";
import BlogCard from "../components/BlogCard";

const Blog = () => {
     const [userEmail, setUserEmail] = useState("");
     const [category, setCategory] = useState("View all");
     const items = ["View all", "Life Style", "Business Trends", "Events"];

     const handleUserEmailChange = () => {
          setUserEmail('');
          alert("Email service unavailbale")
     };
     return (
          <div className="flex flex-col space-y-5 w-full pb- px-8 lg:px-[20rem] mb-16">
               <div className="flex flex-col lg:flex-row items-center w-full py-20">
                    <div className="w-full justify-center items-center lg:items-start lg:w-1/2 flex flex-col gap-8">
                         <h2 className="text-center md:text-left text-4xl lg:text-5xl font-bold">The STN Blog</h2>

                         <div className="flex space-x-4  mb-5 mx-auto md:mx-0 w-full md:w-[60vw] lg:w-full">
                              <div className="relative border-[1.5px] rounded-full border-slate-400 h-[3.65rem] w-full lg:w-[30vw] flex items-center">
                                   <input
                                        type="email"
                                        className="w-full h-full bg-none px-4 font-normal text-sm py-2 rounded-full border-1 bg-white border-gray-100 focus:outline-none focus:ring-2 focus:ring-[#A61D37] focus:border-[#A61D37]"
                                        value={userEmail}
                                        onChange={handleUserEmailChange}
                                        placeholder="Subscribe to our news letter"
                                   />
                                   <button className="bg-[#A61D37]  absolute text-white right-0 z-3 w-auto px-6 lg:px-12 focus:outline-none my-2 mx-2 rounded-full">
                                        Subscribe
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="flex place-content-center">
                         <p className="text-center md:text-left md:w-3/4">
                              Don't be left out! Catch all the news and updates about the STN right here.
                              <br /> 
                         </p>
                    </div>
               </div>
               <div className="border-b border-b-slate-300">
                    <ul className="flex md:gap-16 justify-between md:justify-start">
                         {items.map((item) => (
                              <div key={item}>
                                   <li
                                        onClick={() => {
                                             setCategory(item);
                                        }}
                                        className={`font-bold cursor-pointer ${category === item
                                                  ? "border-b-2 border-b-[#A61D37] text-[#A61D37]"
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
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
                    <BlogCard />
               </div>
               <div className="lg:w-full flex justify-center">
            <div 
            
            className="bg-[#A61D37] hover:bg-[#d40d32] w-[10rem] h-[2.5rem] mt-10 rounded-full  text-white text-xl font-bold flex items-center justify-center cursor-pointer  hover:scale-105 transition-all duration-200 ease-in-out">
              See More
            </div>
          </div>
          </div>
     );
};

export default Blog;

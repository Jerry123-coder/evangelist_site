// import React from "react";
import image from "../assets/blog-pic.jpg";

const BlogCard = () => {
     return (
          <div className="lg:max-w-sm rounded-2xl overflow-hidden shadow-lg pb-4 mt-10">
               {/* Blog Image */}
               <div className="relative">
                    <img
                         src={image} // Replace with the URL of the blog image
                         alt="Blog Image"
                         className="w-full h-58 object-cover object-center"
                    />

                    <div className="absolute flex justify-between items-start glass bottom-0 w-full rounded-0  px-6 py-4">
                         {/* Poster Name and Date */}
                         <div className="flex flex-col text-sm text-white">
                              <span className="font-semibold text-white text-lg">John Doe</span>
                              <span className="text-sm font-light">2023-07-26</span>
                         </div>

                         {/* Category */}
                         <div className="text-sm font-light text-white ">
                              Category: Health
                         </div>
                    </div>
               </div>

               <div className="px-6">
                    {/* Topic */}
                    <h2 className="text-xl text-900-slate font-bold mt-4">The MMR Journey</h2>

                    {/* Content/Summary */}
                    <p className="mt-1">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                         facilisi. Quisque dapibus nisi vitae mauris tincidunt, vel facilisis
                         elit congue...
                    </p>
               </div>

               {/* Read Post Button */}
               <div className="mt-5 flex justify-end px-6 pb-4">
                    <a
                         href="" // Replace with the URL of the full blog post
                         target="_blank"
                         rel="noopener noreferrer"
                         className="bg-[#A61D37] hover:bg-[#d40d32] hover:text-white text-white px-4 py-2 rounded-md transition duration 400 ease-in"
                    >
                         Read Post
                    </a>
               </div>
          </div>
     );
};

export default BlogCard;

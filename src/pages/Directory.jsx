import React from 'react'
// import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import members from '../members.json'
import { useNavigate } from 'react-router-dom';

const Directory = () => {
  const navigate = useNavigate();
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
      <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">Meet the businesses which form</span>
      <span className=" text-3xl text-center lg:text-left lg:text-6xl font-bold">Our Member <span className="text-[#A61D37]"> Directory</span></span>
    </div>
  </div>

 <div className='lg:px-[20rem] py-10 '>
    <div className="overflow-x-auto shadow-lg shadow-black/20">
      <table className="min-w-full table-auto shadow-lg">
        <thead>
          <tr className="bg-[#A61D37] text-white">
            <th className="px-4 py-2 text-left">COMPANY</th>
            <th className="px-4 py-2 text-left">FIRST NAME</th>
            <th className="px-4 py-2 text-left">LAST NAME</th>
            <th className="px-4 py-2 text-left">JOB TITLE</th>
            <th className="px-4 py-2 text-left">EMAIL</th>
            <th className="px-4 py-2 text-left">CONTACT ADDRESS</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member, index) => (
            <tr
              key={member.id}
              onClick={() => navigate('/directory/directoryDetails')}
              className={`${index % 2 === 0 ? "bg-white hover:bg-[#A61D37]/50" : "bg-[#A61D37]/10 hover:bg-[#A61D37]/50"} transition duration-500 ease-in-out cursor-pointer`}
            >
              <td className="px-4 py-2">{member.company}</td>
              <td className="px-4 py-2">{member.firstName}</td>
              <td className="px-4 py-2">{member.lastName}</td>
              <td className="px-4 py-2">{member.jobTitle}</td>
              <td className="px-4 py-2">{member.email}</td>
              <td className="px-4 py-2">{member.contactAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>


    </div>
  )
}

export default Directory
import React from "react";
// import {MMRLogo} from "../assets";
import STNLogo from "../assets/stn_logo.svg";
import evangelistLogo from '../assets/evangelist_logo.png' 
import { Link } from "react-router-dom";

const Footer = () => {
  const quickLinks = [
    { id: 1, name: "Home", link: "" },
    { id: 2, name: "About", link: "about" },
    { id: 3, name: "Programs", link: "programs" },
    { id: 5, name: "Blog", link: "blog" },
    // { id: 6, name: 'Contact', link: 'contact' },
  ];

  const usefulLinks = [
    { id: 1, name: "Terms and Conditions", link: "" },
    { id: 2, name: "Privacy Policy", link: "" },
    { id: 3, name: "News", link: "blog" },
    { id: 5, name: "Contact", link: "contact" },
  ];

  return (
    <div>
      <div className="w-screen lg:h-[40vh]  bg-gradient-to-r from-blue-500 to-black py-10 px-8 lg:py-4  flex flex-col lg:flex-row gap-14 items-center justify-center">
        <div className="lg:w-1/4 flex flex-col gap-3 ">
          <div className="w-full flex justify-center lg:justify-start">
            <Link to="">
              <img src={evangelistLogo} alt="" className="w-[10rem] lg:w-[20rem] " />
            </Link>
          </div>
   
        </div>
        <div className="lg:w-1/2 lg:pl-20 text-white/80 flex gap-20   ">
          <div className="flex-1 flex-col  ">
            <span className="flex-1 text-lg font-bold pb-10">Quick Links</span>
            <>
              {quickLinks.map((item) => (
                <Link to={item.link} key={item.id}>
                  <p className="flex flex-col font-light text-white  hover:font-bold transition-all duration-200 ease-in-out justify-between  h-[3rem]">
                    {item.name}
                  </p>
                </Link>
              ))}
            </>
          </div>
          <div className="flex-1">
            <span className="flex-1 text-lg font-bold pb-10">Useful Links</span>
            <>
              {usefulLinks.map((item) => (
                <Link to={item.link} key={item.id}>
                  <p className="flex flex-col font-light text-white/80  hover:font-bold transition-all duration-1a00 ease-in-out  h-[3rem]">
                    {item.name}
                  </p>
                </Link>
              ))}
            </>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Footer;



// import React from "react";
// import STNLogo from "../assets/stn_logo.svg";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const quickLinks = [
//     { id: 1, name: "Home", link: "" },
//     { id: 2, name: "About", link: "about" },
//     { id: 3, name: "Programs", link: "programs" },
//     { id: 5, name: "Blog", link: "blog" },
//   ];

//   const usefulLinks = [
//     { id: 1, name: "Terms and Conditions", link: "" },
//     { id: 2, name: "Privacy Policy", link: "" },
//     { id: 3, name: "News", link: "blog" },
//     { id: 5, name: "Contact", link: "contact" },
//   ];

//   // Contact information (placeholders)
//   const contactInfo = {
//     address: "123 Main Street, City, Country",
//     email: "contact@example.com",
//     phone: "+1 (123) 456-7890",
//   };

//   return (
//     <div>
//       <div className="w-screen lg:h-[40vh] bg-gradient-to-r from-[#A61D37] to-[#640617] py-10 px-8 lg:py-4 lg:px-[20rem] flex flex-col lg:flex-row gap-14 items-center justify-center">
//         <div>        <div className="w-1/2 flex flex-col gap-3">
//           <div className="">
//             <Link to="">
//               <img src={STNLogo} alt="" className="w-[10rem] lg:w-[10rem]" />
//             </Link>
//           </div>
//           <div className="text-white/80 text-sm font-light">
//             The Stanford Institute for Innovation in Developing Economics – known as Stanford Seed – is a Stanford Graduate School of Business-led initiative that is working to end the cycle of global poverty. Stanford Seed partners with entrepreneurs in emerging markets to build thriving enterprises that transform lives.
//           </div>
//         </div>
//         <div className="w-1/2 text-white/80 flex gap-20">
//           <div className="flex-1">
//             <span className="flex-1 text-lg font-bold pb-10">Quick Links</span>
//             <>
//               {quickLinks.map((item) => (
//                 <Link to={item.link} key={item.id}>
//                   <p className="font-light text-white hover:font-bold transition-all duration-200 ease-in-out">
//                     {item.name}
//                   </p>
//                 </Link>
//               ))}
//             </>
//           </div>
//           <div className="flex-1">
//             <span className="flex-1 text-lg font-bold pb-10">Useful Links</span>
//             <>
//               {usefulLinks.map((item) => (
//                 <Link to={item.link} key={item.id}>
//                   <p className="font-light text-white/80 hover:font-bold transition-all duration-200 ease-in-out">
//                     {item.name}
//                   </p>
//                 </Link>
//               ))}
//             </>
//           </div>
//         </div>
//         </div>
          
//       </div>
//               {/* Horizontal rule */}
//               <hr className="border-gray-300  mx-2" />

// {/* Contact details and social media icons */}
// <div className="w-screen bg-gray-900 py-10 px-8 lg:px-[20rem] flex flex-col lg:flex-row gap-14 items-center justify-center">
//   <div className="w-1/2 text-white">
//     <span className="text-lg font-bold pb-4">Contact Us</span>
//     <div className="text-white/80 text-sm">
//       <p>{contactInfo.address}</p>
//       <p>{contactInfo.email}</p>
//       <p>{contactInfo.phone}</p>
//     </div>
//   </div>
//   <div className="w-1/2 text-white flex justify-center gap-4">
//     {/* Add social media icons here */}
//     {/* Example: */}
//     <i className="fab fa-facebook text-2xl"></i>
//     <i className="fab fa-twitter text-2xl"></i>
//     <i className="fab fa-instagram text-2xl"></i>
//   </div>
// </div>   
     
     
//     </div>
//   );
// };

// export default Footer;

// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import {
//   FaInstagram,
//   FaYoutube,
//   FaFacebook,
//   FaTiktok,
//   FaPhone,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-out",
//     });
//   }, []);

//   const socialLinks = [
//     { icon: FaInstagram, href: "#instagram", label: "Instagram" },
//     { icon: FaYoutube, href: "#youtube", label: "Youtube" },
//     { icon: FaFacebook, href: "#facebook", label: "Facebook" },
//     { icon: FaTiktok, href: "#tiktok", label: "Tiktok" },
//   ];

//   const usefulLinks = [
//     { title: "Departments", href: "/departments" },
//     { title: "Home", href: "/" },
//     { title: "Churches", href: "/churches" },
//     { title: "Give", href: "/give" },
//     { title: "Join Us", href: "/join" },
//     { title: "Programs", href: "/programs" },
//   ];

//   const contactInfo = [
//     { icon: FaPhone, text: "Contact US", href: "tel:+1234567890" },
//     {
//       icon: FaMapMarkerAlt,
//       text: "St John the Evangelist Catholic Church, Adenta",
//       href: "https://maps.google.com",
//     },
//   ];

//   return (
//     <footer className="bg-gradient-to-r from-blue-600 to-blue-500">
//       <div className="max-w-6xl mx-auto px-4 md:px-6 md:pt-16 pb-4 md:pb-8 text-white">
//         {/* Subscription Box */}
//         <div
//           className="bg-blue-400/30 backdrop-blur-sm rounded-[50px] max-w-3xl mx-auto p-4 -mt-8 md:-mt-24 mb-8"
//           data-aos="fade-up"
//         >
//           <div className="flex flex-col md:flex-row items-center gap-4">
//             <h2 className="text-xl md:text-2xl font-semibold text-white text-center md:text-left">
//               Get The Latest Updates
//             </h2>
//             <div className="flex-1 relative w-full">
//               <input
//                 type="email"
//                 placeholder="Enter Email"
//                 className="w-full px-6 py-3 rounded-full bg-black/20 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 pr-32"
//               />
//               <button className="absolute right-1 top-1/2 -translate-y-1/2 px-6 bg-white text-blue-500 rounded-full font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap">
//                 SUBSCRIBE
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Footer Content */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
//           {/* Follow Us */}
//           <div
//             className="text-center md:text-left"
//             data-aos="fade-right"
//             data-aos-delay="100"
//           >
//             <h3 className="text-lg md:text-xl font-semibold mb-4">Follow Us</h3>
//             <div className="flex gap-4 justify-center md:justify-start">
//               {socialLinks.map((social, index) => {
//                 const Icon = social.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={social.href}
//                     aria-label={social.label}
//                     className="p-2 bg-white/10 rounded-full hover:bg-white/20 hover:text-yellow-500 transition-colors text-white"
//                     data-aos="zoom-in"
//                     data-aos-delay={150 + index * 100}
//                   >
//                     <Icon className="w-6 h-6" />
//                   </a>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Office Hours and Pastoral Staff */}
//           <div className="block text-center md:text-left">
//             <div className="mb-4">
//               <h3 className="text-base md:text-lg font-semibold mb-3 text-white">
//                 Office Hours
//               </h3>
//               <p className="text-white text-sm">
//                 Tuesdays to Fridays: 8:00am – 5:00pm
//               </p>
//             </div>
//             <div>
//               <h3 className="text-base md:text-lg font-semibold mb-3 text-white">
//                 Pastoral Staff
//               </h3>
//               <div className="space-y-1.5">
//                 <p className="text-white text-sm">
//                   Rev. Fr. Emmanuel Obeng Codjoe - Parish Priest
//                 </p>
//                 <p className="text-white text-sm">
//                   Rev. Fr. Kenneth Donkoh - Associate Priest
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Contact Us */}
//           <div
//             className="text-center md:text-left"
//             data-aos="fade-left"
//             data-aos-delay="300"
//           >
//             <h3 className="text-lg md:text-xl font-semibold mb-4">Contact Us</h3>
//             <div className="space-y-3">
//               {contactInfo.map((info, index) => {
//                 const Icon = info.icon;
//                 return (
//                   <a
//                     key={index}
//                     href={info.href}
//                     className="flex items-center text-white hover:text-yellow-500 gap-2 justify-center md:justify-start hover:underline text-sm md:text-base"
//                     data-aos="fade-left"
//                     data-aos-delay={350 + index * 100}
//                   >
//                     <Icon className="w-5 h-5" />
//                     <span>{info.text}</span>
//                   </a>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div
//           className="border-t border-white/10 pt-4 text-center text-xs md:text-sm text-white"
//           data-aos="fade-up"
//           data-aos-delay="400"
//         >
//           <p>CE Airport City . All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import {
  FaInstagram,
  FaYoutube,
  FaFacebook,
  FaTiktok,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  
  // Don't render the footer if we're on a parish-activities page
  // if (location.pathname.includes('/parish-activities')) {
  //   return null;
  // }

  const socialLinks = [
    { icon: FaInstagram, href: "https://www.instagram.com/stjohntheevangelist_adenta?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==", label: "Instagram" },
    { icon: FaYoutube, href: "https://www.youtube.com/@stjohnadenta3396", label: "Youtube" },
    { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100095031498641", label: "Facebook" },
    { icon: FaTiktok, href: "https://www.tiktok.com/@st.john.the.evang8?_t=8sG6vwR2qEn&_r=1", label: "Tiktok" },
  ];

  const contactInfo = [
    { icon: FaPhone, text: "Tel no: +233 549583231", href: "tel:+233549583231" },
    {
      icon: FaMapMarkerAlt,
      text: "St John the Evangelist Catholic Church, Adenta",
      href: "https://maps.google.com",
    },
  ];

  return (
    <footer className="bg-gradient-to-r relative from-blue-900 to-blue-500">
      {/* Email Subscription */}
      <div className="max-w-5xl mx-auto px-3 md:px-4 pt-12 md:pt-12 pb-3 md:pb-6 text-white">
        {/* Subscription Box */}
        <div className="bg-blue-400/30 backdrop-blur-sm rounded-[40px] max-w-2xl mx-auto p-3 -mt-6 md:-mt-20 mb-6">
          <div className="flex flex-col md:flex-row items-center gap-3">
            <h2 className="text-lg md:text-xl font-semibold text-white text-center md:text-left">
              Get The Latest Updates
            </h2>
            <div className="flex-1 relative w-full">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-4 py-2 rounded-full bg-black/20 border border-white/20 text-white placeholder:text-white/70 focus:outline-none focus:ring-2 focus:ring-white/30 pr-28 text-sm"
              />
              <button className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-1.5 bg-white text-blue-500 rounded-full font-semibold hover:bg-opacity-90 transition-colors whitespace-nowrap text-sm">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Follow Us */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3">Follow Us</h3>
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="p-1.5 bg-white/10 rounded-full hover:bg-white/20 hover:text-yellow-500 transition-colors text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Office Hours and Pastoral Staff */}
          <div className="block text-center md:text-left">
            <div className="mb-4">
              <h3 className="text-base md:text-lg font-semibold mb-3 text-white">
                Office Hours
              </h3>
              <p className="text-white text-sm">
                Tuesdays to Fridays: 10:00am – 5:00pm
              </p>
            </div>
            <div>
              <h3 className="text-base md:text-lg font-semibold mb-3 text-white">
                Pastoral Staff
              </h3>
              <div className="space-y-1.5">
                <p className="text-white text-sm">
                  V. Rev. Fr. Edmund Donkor Baine 
                </p>
                <p className="text-white text-sm">
                  Rev. Fr. Joseph Effah Siaw 
                </p>
              </div>
            </div>
          </div>

          {/* Contact Us */}
          <div className="text-center md:text-left">
            <h3 className="text-base md:text-lg font-semibold mb-3">Contact Us</h3>
            <div className="space-y-2">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-center text-white hover:text-yellow-500 gap-2 justify-center md:justify-start hover:underline text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{info.text}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-3 text-center text-xs text-white">
          <p>CE Airport City . All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
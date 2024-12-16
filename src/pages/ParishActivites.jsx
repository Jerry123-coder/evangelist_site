
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import STNLogo from "../assets/pastorUp.jpg";
import {
  IoCalendarOutline,
  IoTimeOutline,
  IoPeopleOutline,
  IoBookOutline,
  IoHeartOutline,
  IoWaterOutline,
  IoRibbonOutline,
  IoStarOutline,
} from "react-icons/io5";

const ParishActivities = () => {
  const middleColumnContent = [
    {
      title: "SUNDAY MASSES",
      icon: <IoTimeOutline className="text-3xl text-blue-950" />,
      content: (
        <div className="space-y-2">
          <p>– 1st Mass – 7:00 AM</p>
          <p>– 2nd Mass – 9:30 AM</p>
          <p>– 2nd Sunday of every month (One Mass) 8:00 AM</p>
        </div>
      ),
      delay: 200,
    },
    {
      title: "GROTTO DEVOTIONS",
      icon: <IoCalendarOutline className="text-3xl text-blue-950" />,
      content: 
      "1st Saturday of each month at 3pm",
      delay: 400,
    },
    {
      title: "HOLY HOUR",
      icon: <IoHeartOutline className="text-3xl text-blue-950" />,
      content:
        "– The first Thursday of every month at 6pm.",
      delay: 600,
    },
    {
      title: "CATECHISIS",
      icon: <IoBookOutline className="text-3xl text-blue-950" />,
      content: (
        <>
          <p>
            Catechisis class is done on Sundays after the 1st mass. For those
            preparing for first communion, the catechumen should be 10 years or
            older. For those preparing for confirmation, the catechumen should be
            13 years and above. 
          </p>
          <p className="mt-2">
            For more information kindly contact the parish office.
          </p>
        </>
      ),
      delay: 800,
    },
    // {
    //   title: "VISITATION OF THE SICK & HOMEBOUND",
    //   icon: <IoPeopleOutline className="text-3xl text-blue-950" />,
    //   content:
    //     "Kindly inform the Parish Office of anyone who is sick or unable to attend Mass and arrangements will be made for them to receive Holy Communion at home.",
    //   delay: 1000,
    // },
  ];

  const rightColumnContent = [
    {
      title: "WEEKDAY MASSES",
      icon: <IoCalendarOutline className="text-3xl text-blue-950" />,
      content: (
        <div className="space-y-2">
          <p>– Tuesdays – 6:00 AM</p>
          <p>– Wednesdays to Fridays – 7:00 PM</p>
          <p>– Saturdays – 6:30 AM</p>
        </div>
      ),
      delay: 200,
    },
    {
      title: "ADORATION (HOUR OF GRACE)",
      icon: <IoCalendarOutline className="text-3xl text-blue-950" />,
      content: 
      "1st Sunday of every month at 6pm",
      delay: 400,
    },
    {
      title: "INFANT BAPTISM",
      icon: <IoWaterOutline className="text-3xl text-blue-950" />,
      content:
        "Infant baptism takes place every 3rd Saturday of the month. Infant baptism is for babies to age 7. Teachings are done Thursday before the day of the infant baptism. Parents and godparents must attend. For more information kindly call the parish office",
      delay: 600,
    },
    // {
    //   title: "MARRIAGE COUNSELLING & MARRIAGE",
    //   icon: <IoRibbonOutline className="text-3xl text-blue-950" />,
    //   content:
    //     "Marriage counseling is done by a team of experts trained by the church. It is group counseling. Marriage counseling is a six months period. Those who are preparing for the sacrament of Holy matrimony must always have that in mind. You can only choose a date after you have gone through the counseling. To qualify to register for the counseling you must have been a parishioner for six months consistently and beyond. For more information kindly contact the priest.",
    //   delay: 400,
    // },
    // {
    //   title: "ADORATION",
    //   icon: <IoStarOutline className="text-3xl text-blue-950" />,
    //   content:
    //     "– First Friday of the month Adoration and Mass 6:30 P.M. Our adoration Chapel is open for personal prayer 24/7",
    //   delay: 600,
    // },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  const InfoCard = ({ title, content, icon, delay, isReversed = false }) => (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="flex flex-row gap-8 mx-10 items-start mb-12"
    >
      {!isReversed && (
        <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
          {icon}
        </div>
      )}
      <div className="flex-1">
        <h2 className="text-lg lg:text-xl font-bold mb-3  text-white ">
          {title}
        </h2>
        <div className="text-sm lg:text-base leading-relaxed  text-white">
          {content}
        </div>
        <div className="mt-4 h-px bg-gray-200" />
      </div>
      {isReversed && (
        <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
          {icon}
        </div>
      )}
    </div>
  );

  return (
    <main className="relative min-h-screen  bg-gradient-to-br from-blue-900 via-gray-900 to-black">

    {/* <main className="relative min-h-screen  bg-white"> */}
      {/* Background Image */}
      <div className="fixed inset-0 z-0 flex">
        <div className="lg:w-1/3 w-full relative">
          <img
            src={STNLogo}
            alt="Church Background Left"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen py-6 lg:py-12 mx-4 lg:px-8 overflow-x-hidden">
        {/* Left Column - Hidden on mobile */}
        <section className="hidden lg:block lg:w-1/3"></section>

        {/* Center Column */}
        <section className="w-full lg:w-1/3 space-y-6  lg:space-y-8 mb-6 lg:mb-0">
          {middleColumnContent.map((item, index) => (
            <InfoCard key={index} {...item} isReversed={index % 2 !== 0} />
          ))}
        </section>

        {/* Right Column */}
        <section className="w-full lg:w-1/3 space-y-6 lg:space-y-8">
          {rightColumnContent.map((item, index) => (
            <InfoCard key={index} {...item} isReversed={index % 2 !== 0} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default ParishActivities;


// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import STNLogo from "../assets/pastorUpWhite.jpg";
// import STNLogoMobile from "../assets/pastorUp.jpg";

// import {
//   IoCalendarOutline,
//   IoTimeOutline,
//   IoPeopleOutline,
//   IoBookOutline,
//   IoHeartOutline,
//   IoWaterOutline,
//   IoRibbonOutline,
//   IoStarOutline,
// } from "react-icons/io5";
// import { GiHolyHandGrenade } from "react-icons/gi";

// const ParishActivities = () => {
//   const allContent = [
//     {
//       title: "SUNDAY MASSES",
//       icon: <IoTimeOutline className="text-3xl text-blue-950" />,
//       content: (
//         <div className="space-y-2">
//           <p>– 1st Mass – 7:00 AM</p>
//           <p>– 2nd Mass – 9:30 AM</p>
//           <p>– 2nd Sunday of every month (One Mass) 8:00 AM</p>
//         </div>
//       ),
//       delay: 200,
//     },
//     {
//       title: "WEEKDAY MASSES",
//       icon: <IoCalendarOutline className="text-3xl text-blue-950" />,
//       content: (
//         <div className="space-y-2">
//           <p>– Tuesdays – 6:00 AM</p>
//           <p>– Wednesdays to Fridays – 7:00 PM</p>
//           <p>– Saturdays – 6:30 AM</p>
//         </div>
//       ),
//       delay: 300,
//     },
//     {
//       title: "GROTTO DEVOTIONS",
//       icon: <IoHeartOutline className="text-3xl text-blue-950" />,
//       content: "1st Saturday of each month at 3pm",
//       delay: 400,
//     },
//     {
//       title: "HOLY HOUR",
//       icon: <GiHolyHandGrenade className="text-3xl text-blue-950" />,
//       content: "– The first Thursday of every month at 6pm.",
//       delay: 500,
//     },
//     {
//       title: "ADORATION (HOUR OF GRACE)",
//       icon: <IoStarOutline className="text-3xl text-blue-950" />,
//       content: "1st Sunday of every month at 6pm",
//       delay: 600,
//     },
//     {
//       title: "INFANT BAPTISM",
//       icon: <IoWaterOutline className="text-3xl text-blue-950" />,
//       content:
//         "Infant baptism takes place every 3rd Saturday of the month. Infant baptism is for babies to age 7. Teachings are done Thursday before the day of the infant baptism. Parents and godparents must attend. For more information kindly call the parish office",
//       delay: 700,
//     },
//   ];

//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       once: true,
//       easing: "ease-out-cubic",
//     });
//   }, []);

//   return (
//     <main className="relative min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
//          {/* Background Image */}
//          <div className="fixed inset-0 z-0 flex">
//         <div className="w-full relative">
//           {/* Desktop Image */}
//           <img
//             src={STNLogo}
//             alt="Pastor Background"
//             className="hidden lg:block h-full w-full object-cover"
//           />
//           {/* Mobile Image */}
//           <img
//             src={STNLogoMobile}
//             alt="Pastor Background Mobile"
//             className="lg:hidden h-full w-full object-cover"
//           />
//           <div className="absolute inset-0"></div>
//         </div>
//       </div>
//       {/* Content */}
//       <div className="relative z-10 container mx-auto px-4 py-12">
//         {/* Desktop Layout */}
//         <div className="hidden lg:flex justify-end gap-8">
//           {/* First Column - 1 item */}
//           <div className="w-1/3 space-y-8">
//             {allContent.slice(0, 1).map((item, index) => (
//               <InfoCard key={index} {...item} />
//             ))}
//           </div>

//           {/* Second Column - 2 items */}
//           <div className="w-1/3  space-y-8">
//             {allContent.slice(1, 3).map((item, index) => (
//               <InfoCard key={index} {...item} />
//             ))}
//           </div>

//           {/* Third Column - 3 items */}
//           <div className="w-1/3 space-y-14  ">
//             {allContent.slice(3, 6).map((item, index) => (
//               <InfoCard key={index} {...item} />
//             ))}
//           </div>
//         </div>

//         {/* Mobile Layout */}
//         <div className="lg:hidden">
//           {allContent.map((item, index) => (
//             <InfoCard key={index} {...item} />
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// const InfoCard = ({ title, content, icon, delay }) => (
//   <div
//     data-aos="zoom-in"
//     data-aos-delay={delay}
//     className="flex flex-row gap-8 items-start md:pb-20  pb-5 mx-2 justify-end"
//   >
//     <div className="flex-1">
//       <h2 className="text-lg lg:text-xl font-bold mb-3 text-white lg:text-blue-900">
//         {title}
//       </h2>
//       <div className="text-sm lg:text-base leading-relaxed text-white/80 lg:text-blue-800">
//         {content}
//       </div>
//       <div className="mt-4 h-px bg-gray-200/20" />
//     </div>
//     <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
//       {icon}
//     </div>
//   </div>
// );


// export default ParishActivities;



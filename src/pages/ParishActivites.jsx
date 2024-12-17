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
  IoHourglassOutline,
} from "react-icons/io5";
import { FaPray } from "react-icons/fa";
import { LiaPraySolid } from "react-icons/lia";
import { TbClockHour10 } from "react-icons/tb";

const ParishActivities = () => {
  const middleColumnContent = [
    {
      title: "SUNDAY MASSES",
      icon: <IoTimeOutline className="text-3xl text-blue-950" />,
      content: (
        <div className="space-y-2">
          <p>– 1st Mass – 7:00 AM</p>
          <p>– 2nd Mass – 9:30 AM</p>
          <p> </p>

          <b><h3>CHILDREN'S MASS</h3></b>
          <p>– 3rd Sunday of each month at 7:30am</p>
        </div>
      ),
      delay: 200,
    },
    {
      title: "GROTTO DEVOTIONS",
      icon: <LiaPraySolid className="text-3xl text-blue-950" />,
      content: "1st Saturday of each month at 3pm",
      delay: 400,
    },
    {
      title: "HOLY HOUR",
      icon: <IoHourglassOutline className="text-3xl text-blue-950" />,
      content: "– The first Thursday of every month at 6pm.",
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
            older. For those preparing for confirmation, the catechumen should
            be 13 years and above.
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
      icon: <TbClockHour10 className="text-3xl text-blue-950" />,
      content: "1st Sunday of every month at 6pm",
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

  const InfoCard = ({ title, content, icon, delay }) => (
    <div
      data-aos="zoom-in"
      data-aos-delay={delay}
      className="flex flex-row gap-8 mx-10 items-start mb-12"
    >
      <div className="w-10 h-10 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center flex-shrink-0 shadow-lg">
        {icon}
      </div>
      <div className="flex-1">
        <h2 className="text-lg lg:text-xl font-bold mb-3  text-white ">
          {title}
        </h2>
        <div className="text-sm lg:text-base leading-relaxed  text-white">
          {content}
        </div>
        <div className="mt-4 h-px bg-gray-200" />
      </div>
    </div>
  );

  return (
    <main className="relative min-h-screen  bg-gradient-to-br from-blue-900 via-gray-900 to-black">

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
        <section className="w-full lg:w-1/3 space-y-6  lg:space-y-8 mb-6 lg:mb-0 border-r border-white/20">
          {middleColumnContent.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </section>

        {/* Right Column */}
        <section className="w-full lg:w-1/3 space-y-6 lg:space-y-8">
          {rightColumnContent.map((item, index) => (
            <InfoCard key={index} {...item} />
          ))}
        </section>
      </div>
    </main>
  );
};

export default ParishActivities;

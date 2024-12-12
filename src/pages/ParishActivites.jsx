// import { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import STNLogo from "../assets/pastorUp.jpg";

// const ParishActivities = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000,
//       once: true,
//       easing: "ease-in-out",
//     });
//   }, []);

//   return (
//     <main className="flex flex-col lg:flex-row min-h-screen bg-white">
//       {/* Left Column */}
//       <section
//         className="w-full lg:w-1/3 p-4 lg:p-8 space-y-14"
//         data-aos="fade-right"
//       >
//         <div className="space-y-14">
//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">WEEKDAY MASSES</h2>
//             <p className="text-gray-600 text-sm lg:text-base">– Mondays to Saturdays – 6:30 AM</p>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">SUNDAY MASSES</h2>
//             <div className="space-y-2 text-gray-600 text-sm lg:text-base">
//               <p>– 1st Mass – 6:30 AM</p>
//               <p>– 2nd Mass – 9:00 AM</p>
//               <p>– 2nd Sunday of every month (One Mass) 8:00 AM</p>
//             </div>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">CONFESSIONS</h2>
//             <p className="text-gray-600 text-sm lg:text-base">– Every Saturday Confessions: 5:00 PM to 6:00 PM and Also available on request</p>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">CATECHISM</h2>
//             <p className="text-gray-600 text-sm lg:text-base">Catechism class is done on Sundays after the second mass. For those preparing for first communion, the catechumen should be 8 years or more. For those preparing for confirmation, the catechumen should be 12 years and above.</p>
//             <p className="text-gray-600 text-sm lg:text-base mt-2">For more information kindly contact the parish office.</p>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">VISITATION OF THE SICK & HOMEBOUND</h2>
//             <p className="text-gray-600 text-sm lg:text-base">Kindly inform the Parish Office of anyone who is sick or unable to attend Mass and arrangements will be made for them to receive Holy Communion at home.</p>
//           </div>
//         </div>
//       </section>

//       {/* Center Image */}
//       <section className="w-full lg:w-1/3 h-[300px] lg:h-auto relative">
//         <img
//           src={STNLogo}
//           alt="Church"
//           className="w-full h-full object-cover"
//           data-aos="fade-up"
//         />
//       </section>

//       {/* Right Column */}
//       <section
//         className="w-full lg:w-1/3 p-4 lg:p-8 space-y-14"
//         data-aos="fade-left"
//       >
//         <div className="space-y-14">
//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">INFANT BAPTISM</h2>
//             <p className="text-gray-600 text-sm lg:text-base">Infant baptism takes place every third Saturday of the month. Infant baptism is for babies to age 7. Teachings are done Thursday before the day of the infant baptism. Parents and godparents must attend. For more information kindly call the parish office</p>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">MARRIAGE COUNSELLING & MARRIAGE</h2>
//             <p className="text-gray-600 text-sm lg:text-base">Marriage counseling is done by a team of experts trained by the church. It is group counseling. Marriage counseling is a six months period. Those who are preparing for the sacrament of Holy matrimony must always have that in mind. You can only choose a date after you have gone through the counseling. To qualify to register for the counseling you must have been a parishioner for six months consistently and beyond. For more information kindly contact the priest.</p>
//           </div>

//           <div>
//             <h2 className="text-red-600 font-bold text-lg mb-2">ADORATION</h2>
//             <p className="text-gray-600 text-sm lg:text-base">– First Friday of the month Adoration and Mass 6:30 P.M. Our adoration Chapel is open for personal prayer 24/7</p>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default ParishActivities;import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import STNLogo from "../assets/pastorUp.jpg";
import { useEffect } from "react";

const ParishActivities = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <main className="relative min-h-screen ">
      {/* Background Image */}
      <div className="fixed inset-0 z-0 ">
        <img
          src={STNLogo}
          alt="Church Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row min-h-screen py-6 lg:py-12 mx-4 lg:px-8 overflow-x-hidden">
        {/* Left Column */}
        <section
          className="w-full lg:w-1/3 space-y-6 lg:space-y-14 mb-6 lg:mb-0"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <div className="space-y-6 lg:space-y-14">
            {[
              {
                title: "WEEKDAY MASSES",
                content: "– Mondays to Saturdays – 6:30 AM",
                delay: 200,
              },
              {
                title: "SUNDAY MASSES",
                content: (
                  <div className="space-y-2">
                    <p>– 1st Mass – 6:30 AM</p>
                    <p>– 2nd Mass – 9:00 AM</p>
                    <p>– 2nd Sunday of every month (One Mass) 8:00 AM</p>
                  </div>
                ),
                delay: 400,
              },
              {
                title: "CONFESSIONS",
                content:
                  "– Every Saturday Confessions: 5:00 PM to 6:00 PM and Also available on request",
                delay: 600,
              },
              {
                title: "CATECHISM",
                content: (
                  <>
                    <p>
                      Catechism class is done on Sundays after the second mass.
                      For those preparing for first communion, the catechumen
                      should be 8 years or more. For those preparing for
                      confirmation, the catechumen should be 12 years and above.
                    </p>
                    <p className="mt-2">
                      For more information kindly contact the parish office.
                    </p>
                  </>
                ),
                delay: 800,
              },
              {
                title: "VISITATION OF THE SICK & HOMEBOUND",
                content:
                  "Kindly inform the Parish Office of anyone who is sick or unable to attend Mass and arrangements will be made for them to receive Holy Communion at home.",
                delay: 1000,
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="hover:-translate-y-1 transition-all duration-300 backdrop-blur-md bg-white/30 p-4 lg:p-6 rounded-lg shadow-lg hover:bg-white/40 max-w-md mx-auto w-full"
              >
                <h2 className="text-red-600 font-bold text-base lg:text-lg mb-2">
                  {item.title}
                </h2>
                <div className="text-white text-sm lg:text-base leading-relaxed">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Center Column - Hidden on mobile */}
        <section className="hidden lg:block lg:w-1/3"></section>

        {/* Right Column */}
        <section
          className="w-full lg:w-1/3 space-y-6 lg:space-y-14"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <div className="space-y-6 lg:space-y-14">
            {[
              {
                title: "INFANT BAPTISM",
                content:
                  "Infant baptism takes place every third Saturday of the month. Infant baptism is for babies to age 7. Teachings are done Thursday before the day of the infant baptism. Parents and godparents must attend. For more information kindly call the parish office",
                delay: 200,
              },
              {
                title: "MARRIAGE COUNSELLING & MARRIAGE",
                content:
                  "Marriage counseling is done by a team of experts trained by the church. It is group counseling. Marriage counseling is a six months period. Those who are preparing for the sacrament of Holy matrimony must always have that in mind. You can only choose a date after you have gone through the counseling. To qualify to register for the counseling you must have been a parishioner for six months consistently and beyond. For more information kindly contact the priest.",
                delay: 400,
              },
              {
                title: "ADORATION",
                content:
                  "– First Friday of the month Adoration and Mass 6:30 P.M. Our adoration Chapel is open for personal prayer 24/7",
                delay: 600,
              },
            ].map((item, index) => (
              <div
                key={index}
                data-aos="zoom-in"
                data-aos-delay={item.delay}
                className="hover:-translate-y-1 transition-all duration-300 backdrop-blur-md bg-white/30 p-4 lg:p-6 rounded-lg shadow-lg hover:bg-white/40 max-w-md mx-auto  w-full"
              >
                <h2 className="text-red-600 font-bold text-base lg:text-lg mb-2">
                  {item.title}
                </h2>
                <p className="text-white text-sm lg:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default ParishActivities;

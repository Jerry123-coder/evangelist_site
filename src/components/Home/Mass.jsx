{
  /* Mass Schedule Section */
}
{
  /* <div className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8" data-aos="fade-right">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Join Us For Mass</h2>
              <p className="text-gray-200">
                We warmly invite you to join us for Mass and experience the richness of our liturgical celebrations. Our Mass schedule is designed to accommodate the diverse needs of our community. Whether you prefer morning, midday, or evening services, you will find a time that suits you.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-yellow-400">SUNDAY MASS SCHEDULE</h3>
                <ul className="space-y-2">
                  <li>• Early Morning Mass - 7:00am</li>
                  <li>• Main Mass - 9:30am</li>
                </ul>
                <h3 className="text-xl font-semibold text-yellow-400 mt-6">DAILY MASS SCHEDULE</h3>
                <ul className="space-y-2">
                  <li>• Tuesdays - 6:00am</li>
                  <li>• Wednesday to Friday - 7:00pm</li>
                  <li>• Saturday - 6:30am</li>
                </ul>
              </div>
            </div>
            <div className="relative" data-aos="fade-left">
              <img
                src={stn_image3}
                alt="Mass Celebration"
                className="w-full h-[400px] object-cover rounded-lg shadow-xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-900 p-6">
                <h3 className="text-xl font-bold mb-2">Join Us</h3>
                <p className="text-sm mb-4">Join us in the celebration of the Holy Mass and be part of our Mass schedule.</p>
                <button className="bg-yellow-400 text-blue-900 px-6 py-2 rounded font-semibold hover:bg-yellow-500 transition-colors">
                  LEARN MORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */
}
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import joinformass from "../../assets/joinformass.jpg";
import stn_image3 from "../../assets/stn_image3.jpg";

const MassScheduleSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      {/* Header Section */}
      <div
        className="max-w-4xl mx-auto text-center mb-8 lg:mb-16"
        data-aos="fade-down"
      >
        <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4 lg:mb-6">
          Join Us For Mass
        </h1>
        <p className="text-gray-800 leading-relaxed">
          We warmly invite you to join us for Mass and experience the richness
          of our liturgical celebrations. Our Mass schedule is designed to
          accommodate the diverse needs of our community. Whether you prefer
          morning, midday, or evening services, you will find a time that suits
          you.
        </p>
      </div>

      {/* Main Content Section */}
      <div className="max-w-6xl mx-auto relative">
        {/* Schedule Section */}
        <div
          className="static w-1/2 lg:absolute  lg:mt-20 z-10 bg-black/80 text-white p-6 lg:p-8 lg:max-w-md mb-6 lg:mb-0"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <div className="space-y-8">
            <div>
              <h3 className="text-blue-600 font-medium mb-4">
                SUNDAY MASS SCHEDULE
              </h3>
              <ul className="space-y-2">
                <li>• 1st Mass : 7:00am</li>
                <li>• 2nd Mass : 9:30am</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-600 font-medium mb-4">
                DAILY MASS SCHEDULE
              </h3>
              <ul className="space-y-2">
                <li>• Tuesdays: 6:00am </li>
                <li>• Wednesdays to Fridays: 7:00pm</li>
                <li>• Saturdays: 6:30am </li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-600 font-medium mb-4">HOLY HOUR</h3>
              <ul className="space-y-2">
                <li>• The 1st Thursday of every month: 6:00pm</li>
              </ul>
            </div>

            <div>
              <h3 className="text-blue-600 font-medium mb-4">
                ADORATION (HOUR OF GRACE)
              </h3>
              <p>1st Sunday of every month at 6pm</p>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div
          className=" flex justify-center items-center"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <img
            src={joinformass}
            alt="Mass celebration"
            className="w-2/3 h-2/3 object-cover"
          />

          {/* Join Us Overlay */}
          <div
            className="static lg:absolute lg:top-1/3 lg:-right-10 bg-blue-600 text-white p-6 lg:p-8 mt-6 lg:mt-0 lg:max-w-sm"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">Join Us</h2>
            <p className="mb-6">
              Join us in the celebration of the Holy Eucharist at any of our
              Mass Schedules.
            </p>
            <Link to="/parish-activities">
              <button className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors">
                LEARN MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MassScheduleSection;

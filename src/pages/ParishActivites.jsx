import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import STNLogo from "../assets/stn_image4.jpg";

const ParishActivities = () => {
  const middleColumnData = [
    {
      id: 1,
      title: "Section One",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      delay: 200,
    },
    {
      id: 2,
      title: "Section Two",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
      delay: 400,
    },
  ];

  const rightColumnData = [
    {
      id: 1,
      title: "Grid Item 1",
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      delay: 200,
    },
    {
      id: 2,
      title: "Grid Item 2",
      content:
        "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.",
      delay: 400,
    },
    {
      id: 3,
      title: "Grid Item 3",
      content:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum.",
      delay: 600,
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main className="min-h-screen  flex flex-col lg:flex-row">
      {/* First Column - Image */}
      <section
        className="w-full lg:w-1/3 h-[50vh] lg:h-screen relative"
        data-aos="fade-right"
      >
        <img
          src={STNLogo}
          alt="Full height"
          className="w-full h-full object-cover"
        />
      </section>

      {/* Second Column */}
      <section className="w-full lg:w-1/3 min-h-[50vh] lg:h-screen overflow-y-auto ">
        <div className="h-full p-4 lg:p-6 space-y-4 shadow-xl lg:space-y-6">
          {middleColumnData.map((section) => (
            <div
              key={section.id}
              className="bg-white rounded-lg shadow-md p-4 lg:p-6 flex flex-col justify-center min-h-[200px] lg:min-h-[300px]"
              data-aos="fade-up"
              data-aos-delay={section.delay}
            >
              <h2 className="text-xl lg:text-2xl font-bold mb-3 lg:mb-4 text-gray-800">
                {section.title}
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Third Column */}
      <section className="w-full lg:w-1/3 min-h-[50vh] lg:h-screen overflow-y-auto ">
        <div className="h-full p-4 lg:p-6 space-y-4 lg:space-y-6">
          {rightColumnData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-lg shadow-md p-4 lg:p-6 flex flex-col justify-center min-h-[150px] lg:min-h-[200px] hover:shadow-lg transition-shadow duration-300"
              data-aos="zoom-in"
              data-aos-delay={item.delay}
            >
              <h3 className="text-lg lg:text-xl font-semibold mb-2 lg:mb-3 text-gray-800">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm lg:text-base">
                {item.content}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default ParishActivities;

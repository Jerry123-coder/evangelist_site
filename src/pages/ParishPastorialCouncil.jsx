import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaPhone, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import statImage from "../assets/stn_image2.jpg";

const ParishPastorialCouncil = () => {
  const mainContent = [
    {
      title: "Youth Council Committees",
      content:
        "The Parish Youth Council operates through various committees, which are vital in organizing and executing specific programs, activities, and initiatives of the youth. Each committee is headed by a chairperson, who is appointed or elected to lead and manage the affairs of the committee, ensuring that its objectives align with the vision and goals of the Parish Youth Council. The committees work collaboratively under the general guidance of the council to deliver results effectively.",
      extraContent: {
        items: [
          "The Youth Council Organizer and Financial Secretary are automatic members of all committees. The Organizer plays a critical role in providing coordination oversight, acting as the main link between the Executive Team and each committee to ensure smooth communication and alignment of activities. Additionally, the Organizer assists in resolving challenges and ensures that the work of the committees integrates seamlessly into the overall operations of the council. The Financial Secretary, on the other hand, oversees committee finances, ensuring proper budgetary planning, expenditure monitoring, and reporting in line with the council’s financial policies. This structure fosters accountability, transparency, and efficiency in all committee operations. The committees and their committees are as follows:",
        ],
      },
    },
    {
      title: "Meetings",
      content:
        "The youth Council meets on the first Sunday of every month after the first Mass. The Youth Council may also meet at the at a different date communicated to council members.",
    },
    {
      title: "Programmes",
      content: "Details about programs and activities will be listed here...",
    },
  ];

  const sidebarContent = [
    {
      title: "Get Involved",
      type: "link",
      content: "Join Youth Council",
      link: "/societies",
      icon: <FaArrowRight />,
    },
    {
      title: "Resources",
      type: "button",
      content: "Download Documents",
      icon: <FaDownload />,
    },
    {
      title: "Contact Us",
      type: "contacts",
      content: ["0557200434", "0271053419", "0268182983"],
    },
  ];

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const ContentCard = ({ title, content, extraContent, type, link, icon }) => (
    <section
      className="backdrop-blur-sm bg-white/10 rounded-lg p-4 md:p-6 shadow-lg border border-white/20"
      data-aos="fade-up"
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      {type === "link" ? (
        <Link
          to={link}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
        >
          <span>{content}</span>
          {icon}
        </Link>
      ) : type === "button" ? (
        <button className="inline-flex items-center gap-2 text-blue-300 hover:text-blue-400">
          {icon}
          <span>{content}</span>
        </button>
      ) : type === "contacts" ? (
        <div className="space-y-3">
          {content.map((contact, i) => (
            <p key={i} className="flex items-center gap-2 text-gray-100">
              <FaPhone className="text-blue-400" />
              <span>{contact}</span>
            </p>
          ))}
        </div>
      ) : (
        <div className="text-gray-100">
          <p className="mb-6">{content}</p>
          {extraContent && (
            <div className="bg-blue-900/30 p-4 rounded-lg space-y-3">
              <div className="space-y-2">
                {extraContent.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      {/* Hero Section */}
      <section className="relative h-[15rem] md:h-[20rem]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${statImage})` }}
        />
        <div className="absolute inset-0 bg-black/70 backdrop-blur-xs" />
        <div className="relative h-full flex flex-col items-center justify-center text-center px-4 text-white">
          <h1
            className="text-2xl md:text-4xl font-bold mb-2"
            data-aos="fade-up"
          >
            Parish Pastoral Council
          </h1>
          <p className="text-blue-200" data-aos="fade-up" data-aos-delay="100">
            Youth Council 2023/2024
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="w-[90%] max-w-7xl mx-auto py-8 md:py-12">
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {mainContent.map((item, index) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
          <div className="space-y-6">
            {sidebarContent.map((item, index) => (
              <ContentCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ParishPastorialCouncil;

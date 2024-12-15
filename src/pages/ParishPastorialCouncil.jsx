import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaPhone, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import statImage from "../assets/stn_image2.jpg";

const ParishPastorialCouncil = () => {
  const mainContent = [
    {
      title: "Overview",
      content: (
        <>
          <p>
          The Parish Pastoral Council (PPC) serves as the principal advisory body to the Parish Priest, who is the President of the Council. Under the guidance of the Parish Priest, the PPC plays a vital role in fostering the spiritual, pastoral, and developmental growth of our parish community.
Chaired by the Council Chairperson, the PPC brings together a dedicated team of clergy, lay leaders, and ministry representatives to discuss and plan initiatives that support the mission and vision of the parish. The council works collaboratively to discern the needs of the parish, propose solutions, and implement strategies that enrich the faith and lives of parishioners.
The Parish Pastoral Council operates with a two-year term of office, ensuring fresh ideas and perspectives contribute to the dynamic life of the parish. Through its advisory role, the council supports the Parish Priest in making decisions that reflect the spiritual and pastoral priorities of the community.
Committed to serving the parish with dedication and integrity, the PPC remains a cornerstone of unity, leadership, and faith-driven action in our parish life.
          </p>
        </>
      )
    },
    {
      title: "Leadership/Executive",
      content:(
        <>
          <p>
          The leadership of the Parish Pastoral Council (PPC) is anchored by the Parish Priest, who serves as the President of the Council, and the Assisting Priest, who holds the position of Vice President. Together, they provide spiritual guidance and oversee the council's efforts to ensure alignment with the mission and vision of the parish.
The Chairperson, Vice Chairperson, Secretary, and Assistant Secretary are elected executives of the council, entrusted with the responsibility of facilitating meetings, coordinating activities, and maintaining effective communication within the council and the parish community. Additionally, the Pastor appoints the Financial Secretary, who ensures proper stewardship of parish resources and supports the council's financial planning and reporting. These elected and appointed leaders, alongside the President and Vice President, constitute the core executive team of the PPC.
This collaborative leadership structure ensures that the council operates with transparency, accountability, and a shared commitment to serving the parish.
          </p>
        </>
      )
    },
    {
      title: "Parish Pastoral Council Standing Committees",
      content: "The Parish Pastoral Council (PPC) operates through various standing committees, each tasked with specific responsibilities that contribute to the spiritual, pastoral, and operational life of the parish. These committees are led by Conveners who are responsible for coordinating their respective committee’s activities, ensuring alignment with the council’s goals, and fostering collaboration among members. The committees and their Conveners are as follows:",
      extraContent: {
        items: [
          "This committee structure enables the PPC to address the diverse needs of the parish effectively and ensure active engagement from parishioners across different areas of ministry.",
        ],
      },
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

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaDownload, FaPhone, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import youth from "../assets/youth.jpg";
import { IoPersonAddSharp } from "react-icons/io5";

const ParishYouthCouncil = () => {
  const leadershipTable = [
    {
      position: "Youth Chaplain",
      name: "Rev. Fr. Joseph Effah Siaw",
      society: "",
    },
    {
      position: "PPC Youth and Vocations Convener",
      name: "Mrs. Harriet Ayittey",
      society: "",
    },
    { position: "Chairperson", name: "Thomas Kwegyir-Abaidoo", society: "Knights and Ladies of the Altar" },
    { position: "Vice Chairperson", name: "Juliana Yorke", society: "Christian Daughters Association" },
    { position: "Secretary", name: "Etonam Dotse", society: "Knights and Ladies of the Altar" },
    { position: "Assistant Secretary", name: "Benedicta Nimnora", society: "Knights and Ladies of the Altar" },
    { position: "Organizer", name: "Harriet Dougle", society: "Junior Auxiliary" },
    { position: "Assistant Organiser", name: "Daniel Lamptey", society: "Junior Marshallans" },
    { position: "Financial Secretary", name: "Seyram Awuye-Kpobi", society: "Knights and Ladies of the ALtar" },
    { position: "Assistant Financial Secretary", name: "Victor Mensah", society: "Christian Sons Association" },
  ];

  // Youth Council committee table data structure
  const committeeTable = [
    {
      committee: "Youth Holy Mass",
      chairperson: "Etonam Dotse"
    },
    {
      committee: "Evangelist Praise 2025",
      chairperson: "Anthony Adu-Yeboah"
    },
    {
      committee: "Socialization",
      chairperson: "Sharon Dankyi"
    },
    {
      committee: "Sports",
      chairperson: "Victor Mensah"
    },
    {
      committee: "School Visitation",
      chairperson: "Etonam Dotse"
    }
  ];

  const mainContent = [
    {
      title: "Overview",
      content:
        "The Parish Youth Council serves as the central decision-making body for all youth-related activities and initiatives within the parish. It is composed of representatives from all recognized youth groups in the parish, including society leaders and elected officers, who work together to foster spiritual growth, community engagement, and youth development. The council is responsible for planning and overseeing programmes, managing resources, and ensuring alignment with the overall mission of the Church.Guided by its constitution and the oversight of the Parish Pastoral Council and the parish priest, the Youth Council ensures inclusivity, collaboration, and accountability in all its decisions and operations. Through regular meetings, annual reviews, and active committees, it provides a platform for the youth to contribute meaningfully to the parish's vision and mission. This body plays a critical role in shaping a vibrant and united youth community, rooted in Catholic values and service.",
      type: "text",
    },
    {
      title: "Leadership",
      content:
        "The leadership of the Parish Youth Council is spearheaded by the Youth Chaplain, who provides spiritual guidance and ensures that all council activities align with the mission of the Church. Supporting this role is the Parish Pastoral Council (PPC) Youth and Vocations Convener, who bridges the gap between the Parish Youth Council and the PPC, offering oversight and facilitating communication between the youth and the broader parish community. The council’s elected executives, including the Chairperson, Vice-Chairperson, Secretary, Financial Secretary, and other key officers, work collaboratively to execute decisions and oversee the daily operations of the council. Together, this leadership team ensures that the council remains effective, organized, and united in its mission to serve the parish youth.",
      type: "table",
      tableData: leadershipTable,
    },
    {
      title: "Youth Council Committees",
      content: (
        <>
          <p>
          The Parish Youth Council operates through various committees, which are vital in organizing and executing specific programs, activities, and initiatives of the youth. Each committee is headed by a chairperson, who is appointed or elected to lead and manage the affairs of the committee, ensuring that its objectives align with the vision and goals of the Parish Youth Council. The committees work collaboratively under the general guidance of the council to deliver results effectively. 
          </p>
          <p>
          The Youth Council Organizer and Financial Secretary are automatic members of all committees. The Organizer plays a critical role in providing coordination oversight, acting as the main link between the Executive Team and each committee to ensure smooth communication and alignment of activities. Additionally, the Organizer assists in resolving challenges and ensures that the work of the committees integrates seamlessly into the overall operations of the council. The Financial Secretary, on the other hand, oversees committee finances, ensuring proper budgetary planning, expenditure monitoring, and reporting in line with the council’s financial policies. This structure fosters accountability, transparency, and efficiency in all committee operations.
          </p>

          {/* Mobile view for committee table */}
          <div className="md:hidden space-y-4">
            {committeeTable.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-3 rounded-lg backdrop-blur-sm"
              >
                <div className="font-medium text-white mb-1">
                  {item.committee}
                </div>
                <div className="text-gray-300">{item.chairperson || "—"}</div>
              </div>
            ))}
          </div>

          {/* Desktop view for committee table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  {["Committee", "Chairperson"].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {committeeTable.map((item, index) => (
                  <tr key={index} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.committee}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.chairperson || "—" }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ),
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
      link: "/societies?category=Youth Council",
      icon: <IoPersonAddSharp />,
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

  const ContentCard = ({ title, content, type, tableData, link, icon }) => (
    <section
      className="backdrop-blur-sm bg-white/10 rounded-lg p-4 md:p-6 shadow-lg border border-white/20"
      data-aos="fade-up"
    >
      <h2 className="text-xl md:text-2xl font-bold text-white mb-4">{title}</h2>
      {type === "link" ? (
        <Link
          to={link}
          className="bg-blue-900 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-800 transition duration-300 ease-in-out flex items-center justify-center gap-2"
        >
          {icon}
          <span>{content}</span>
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
      ) : type === "table" ? (
        <>
          <div className="text-gray-100 mb-6">{content}</div>
          <div className="md:hidden space-y-4">
            {tableData.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 p-3 rounded-lg backdrop-blur-sm"
              >
                <div className="font-medium text-white mb-1">
                  {item.position}
                </div>
                <div className="text-gray-300">{item.name || "—"}</div>
                {item.society && (
                  <div className="text-gray-400 text-sm mt-1">
                    {item.society}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full divide-y divide-white/10">
              <thead>
                <tr>
                  {["Position", "Name", "Society"].map((header) => (
                    <th
                      key={header}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10">
                {tableData.map((item, index) => (
                  <tr key={index} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-sm font-medium text-white">
                      {item.position}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.name || "—" }
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-300">
                      {item.society || "—" }
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <div className="text-gray-100">
          <p>{content}</p>
        </div>
      )}
    </section>
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative h-[60vh] bg-black">
        <img
          src={youth}
          alt="Youth Council"
          className="w-full h-full object-cover opacity-80"
          style={{ objectPosition: 'center top' }}
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Parish Youth Council</h1>
            <p className="text-xl md:text-2xl">Empowering Young Catholics in Faith and Service</p>
          </div>
        </div>
      </div>

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

export default ParishYouthCouncil;

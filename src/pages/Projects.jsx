import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import { project1, project2, project3, project4, project5 } from ".";
import school1 from "../assets/gallery/shs/school1.jpeg";
import school2 from "../assets/gallery/shs/school2.jpeg";
import school3 from "../assets/gallery/shs/school3.jpeg";
import school4 from "../assets/gallery/shs/school4.jpeg";
import school5 from "../assets/gallery/shs/school5.jpeg";
import school6 from "../assets/gallery/shs/school6.jpg";
import school7 from "../assets/gallery/shs/school7.jpg";
import school8 from "../assets/gallery/shs/school8.jpg";
import school9 from "../assets/gallery/shs/school9.jpg";
import school10 from "../assets/gallery/shs/school10.jpg";
import school11 from "../assets/gallery/shs/school11.jpg";
import school12 from "../assets/gallery/shs/school12.jpg";
import school13 from "../assets/gallery/shs/school13.jpg";
import school14 from "../assets/gallery/shs/school14.jpg";

const Projects = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  // Project sections data structure
  const projectSections = [
    {
      id: 'jhs-construction',
      title: 'JHS Block Construction',
      description: 'Progress on the construction of our new Junior High School block',
      images: [project1, project2, project3, project4, project5],
      alt: 'JHS Construction Progress'
    },
    {
      id: 'shs-visitation',
      title: 'SHS Visitation Project',
      description: 'Our ongoing initiative to reach out to and support Senior High School students in their faith journey',
      images: [school1, school2, school3, school4, school5, school6, school7, school8, school9, school10, school11, school12, school13, school14],
      alt: 'SHS Visitation Gallery'
    }
  ];

  // Toggle section expansion
  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId);
  };

  return (
    <>
      <div
        className="relative flex flex-col lg:flex-row bg-cover bg-center items-center gap-5 w-screen h-[20rem] px-8 lg:px-[20rem] justify-between"
        style={{
          backgroundImage: `url(${statImage})`,
        }}
      >
        {/* Dark overlay */}
        <div className="absolute z-2 inset-0 bg-black opacity-80"></div>
        <div className="text-white z-10 flex flex-col items-center">
          <span className="text-2xl text-center w-full lg:text-left mb-10 lg:mb-2 font-semibold opacity-75">
            All You Need To Know About
          </span>
          <span className="text-3xl text-center lg:text-left lg:text-6xl font-bold">
            On Going Projects
          </span>
        </div>
      </div>

      <div className="flex flex-col space-y-5 w-full px-8 lg:px-[20rem] mb-16 mt-8">
        {/* Project Sections with Stacked Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {projectSections.map((section) => (
            <div 
              key={section.id}
              className={`relative transition-all duration-500 ease-in-out ${
                expandedSection === section.id ? 'col-span-full' : ''
              }`}
            >
              {/* Stacked Images Preview */}
              <div 
                onClick={() => toggleSection(section.id)}
                className={`relative cursor-pointer transition-all duration-500 h-[300px] ${
                  expandedSection === section.id ? 'hidden' : 'block'
                }`}
              >
                {/* Stack effect using first 3 images */}
                {section.images.slice(0, 3).map((img, index) => (
                  <div
                    key={index}
                    className="absolute w-full"
                    style={{
                      top: `${index * 15}px`,
                      left: `${index * 15}px`,
                      zIndex: 3 - index,
                      transform: `rotate(${index * 3 - 3}deg)`,
                    }}
                  >
                    <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-lg bg-white">
                      <img
                        src={img}
                        alt={`${section.alt} ${index + 1}`}
                        className="w-full h-full object-cover hover:opacity-95 transition-opacity"
                      />
                    </div>
                  </div>
                ))}
                {/* Title overlay */}
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 rounded-b-lg z-10"
                  style={{ transform: 'rotate(-3deg)' }}
                >
                  <h2 className="text-white text-xl font-bold tracking-wide">{section.title}</h2>
                  <p className="text-white/80 text-sm mt-1">{section.description}</p>
                </div>
              </div>

              {/* Expanded View */}
              <div
                className={`bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-500 ${
                  expandedSection === section.id 
                    ? 'opacity-100 max-h-[2000px] mt-8' 
                    : 'opacity-0 max-h-0'
                }`}
              >
                {/* Header */}
                <div className="p-6 bg-gradient-to-r from-gray-50 to-white border-b">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">{section.title}</h2>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                    <button 
                      onClick={() => toggleSection(section.id)}
                      className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {/* Grid of all images */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6">
                  {section.images.map((img, index) => (
                    <div
                      key={index}
                      className="group aspect-w-4 aspect-h-3 overflow-hidden rounded-lg shadow-md"
                    >
                      <img
                        src={img}
                        alt={`${section.alt} ${index + 1}`}
                        className="w-full h-full object-cover transform transition-all duration-300 group-hover:scale-110"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
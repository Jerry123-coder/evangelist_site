import { useState } from "react";
import statImage from "../assets/stn_image2.jpg";
import { project1, project2, project3, project4, project5 } from ".";

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
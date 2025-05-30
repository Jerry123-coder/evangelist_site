import React, { useState } from 'react';
import {
  FileText,
  Download,
  Mail,
  Calendar,
  Image as ImageIcon,
  Layout,
  X,
  Plus,
  Edit,
  ChevronUp,
  ChevronDown
} from 'lucide-react';

const BulletinGenerator = ({ isOpen, onClose, announcements }) => {
  const [bulletinData, setBulletinData] = useState({
    title: `Weekly Bulletin - ${new Date().toLocaleDateString()}`,
    coverImage: null,
    welcomeMessage: 'Welcome to our weekly bulletin!',
    sections: [
      { title: 'This Week\'s Events', items: [] },
      { title: 'Announcements', items: [] },
      { title: 'Prayer Requests', items: [] },
      { title: 'Upcoming Events', items: [] }
    ],
    footer: {
      churchName: 'Your Church Name',
      address: '123 Church Street',
      contactInfo: 'Phone: (123) 456-7890 | Email: info@church.com',
      socialMedia: {
        facebook: '',
        instagram: '',
        youtube: ''
      }
    }
  });

  const [selectedSection, setSelectedSection] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  // Filter relevant announcements for each section
  const getRelevantAnnouncements = (sectionTitle) => {
    return announcements.filter(announcement => {
      if (sectionTitle === "This Week's Events") {
        return announcement.type === 'event' && new Date(announcement.publishDate) <= new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
      }
      if (sectionTitle === 'Upcoming Events') {
        return announcement.type === 'event' && new Date(announcement.publishDate) > new Date(new Date().getTime() + 7 * 24 * 60 * 60 * 1000);
      }
      return announcement.type !== 'event';
    });
  };

  const BulletinSection = ({ section, index }) => {
    const [isExpanded, setIsExpanded] = useState(true);
    const relevantAnnouncements = getRelevantAnnouncements(section.title);

    return (
      <div className="border rounded-lg p-4 mb-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-semibold text-lg">{section.title}</h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-500 hover:text-gray-700"
          >
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-4">
            {/* Current Items */}
            {section.items.map((item, itemIndex) => (
              <div key={itemIndex} className="flex items-center justify-between bg-gray-50 p-3 rounded">
                <span>{item.title}</span>
                <button
                  onClick={() => {
                    const newSections = [...bulletinData.sections];
                    newSections[index].items = newSections[index].items.filter((_, i) => i !== itemIndex);
                    setBulletinData({ ...bulletinData, sections: newSections });
                  }}
                  className="text-red-600 hover:text-red-800"
                >
                  <X size={16} />
                </button>
              </div>
            ))}

            {/* Available Announcements */}
            <div className="mt-4">
              <h4 className="text-sm font-medium text-gray-700 mb-2">Add from announcements:</h4>
              <div className="space-y-2">
                {relevantAnnouncements.map(announcement => (
                  <div
                    key={announcement.id}
                    className="flex items-center justify-between p-2 hover:bg-gray-50 rounded"
                  >
                    <span className="text-sm">{announcement.title}</span>
                    <button
                      onClick={() => {
                        const newSections = [...bulletinData.sections];
                        newSections[index].items.push({
                          title: announcement.title,
                          content: announcement.content,
                          date: announcement.publishDate
                        });
                        setBulletinData({ ...bulletinData, sections: newSections });
                      }}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const BulletinPreview = () => (
    <div className="bg-white rounded-lg p-6 max-h-[80vh] overflow-y-auto">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">{bulletinData.title}</h1>
        
        {bulletinData.coverImage && (
          <img
            src={bulletinData.coverImage}
            alt="Bulletin Cover"
            className="w-full h-48 object-cover rounded-lg mb-6"
          />
        )}

        <p className="text-lg text-center text-gray-600 mb-8">
          {bulletinData.welcomeMessage}
        </p>

        {bulletinData.sections.map((section, index) => (
          <div key={index} className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">
              {section.title}
            </h2>
            <div className="space-y-4">
              {section.items.map((item, itemIndex) => (
                <div key={itemIndex} className="bg-gray-50 p-4 rounded">
                  <h3 className="font-medium mb-2">{item.title}</h3>
                  {item.date && (
                    <p className="text-sm text-gray-600 mb-2">
                      {new Date(item.date).toLocaleDateString()}
                    </p>
                  )}
                  <p className="text-gray-700">{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <footer className="text-center text-gray-600 mt-8 pt-8 border-t">
          <h3 className="font-bold mb-2">{bulletinData.footer.churchName}</h3>
          <p>{bulletinData.footer.address}</p>
          <p className="mb-4">{bulletinData.footer.contactInfo}</p>
        </footer>
      </div>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center pt-10 z-50">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b p-4 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Generate Weekly Bulletin</h2>
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              {showPreview ? 'Edit' : 'Preview'}
            </button>
            <button
              onClick={() => {
                // Generate PDF logic here
                console.log('Generating PDF...');
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
            >
              <Download className="w-4 h-4 mr-2" />
              Generate PDF
            </button>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="p-6">
          {showPreview ? (
            <BulletinPreview />
          ) : (
            <div className="space-y-6">
              {/* Basic Settings */}
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Bulletin Title
                  </label>
                  <input
                    type="text"
                    value={bulletinData.title}
                    onChange={(e) => setBulletinData({ ...bulletinData, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Welcome Message
                  </label>
                  <textarea
                    value={bulletinData.welcomeMessage}
                    onChange={(e) => setBulletinData({ ...bulletinData, welcomeMessage: e.target.value })}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-4">
                {bulletinData.sections.map((section, index) => (
                  <BulletinSection
                    key={index}
                    section={section}
                    index={index}
                  />
                ))}
              </div>

              {/* Footer Settings */}
              <div className="border-t pt-6">
                <h3 className="text-lg font-medium mb-4">Footer Information</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Church Name
                    </label>
                    <input
                      type="text"
                      value={bulletinData.footer.churchName}
                      onChange={(e) => setBulletinData({
                        ...bulletinData,
                        footer: { ...bulletinData.footer, churchName: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Address
                    </label>
                    <input
                      type="text"
                      value={bulletinData.footer.address}
                      onChange={(e) => setBulletinData({
                        ...bulletinData,
                        footer: { ...bulletinData.footer, address: e.target.value }
                      })}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BulletinGenerator;
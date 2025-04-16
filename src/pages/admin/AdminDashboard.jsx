import React, { useState } from 'react';
import {
  Layout,
  LayoutGrid,
  Mail,
  Image,
  Video,
  Users,
  Vote,
  MessageSquare,
  Menu,
  X
} from 'lucide-react';
import DashboardContent from '../../components/admin/DashboardContent';
import MediaContent from '../../components/admin/MediaContent';
import ChurchNews from '../../components/admin/ChurchNews';
import MembershipPortal from '../../components/admin/MembershipPortal';
import VotingPortal from '../../components/admin/VotingPortal';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeSection, setActiveSection] = useState('dashboard');

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutGrid },
    { id: 'media', label: 'Media Content', icon: Video },
    { id: 'news', label: 'Church News', icon: Layout },
    // { id: 'gallery', label: 'Gallery', icon: Image },
    { id: 'members', label: 'Membership', icon: Users },
    { id: 'voting', label: 'Voting', icon: Vote },
    { id: 'contact', label: 'Contact Messages', icon: MessageSquare },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-20'
        } bg-white shadow-lg transition-all duration-300 hidden md:block`}
      >
        <div className="p-4">
          <h1 className={`text-xl font-bold ${!isSidebarOpen && 'hidden'}`}>
            Church Admin
          </h1>
        </div>
        
        <nav className="mt-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`w-full flex items-center px-4 py-3 ${
                activeSection === item.id
                  ? 'bg-blue-50 text-blue-600'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <item.icon size={20} />
              <span className={`ml-4 ${!isSidebarOpen && 'hidden'}`}>
                {item.label}
              </span>
            </button>
          ))}
        </nav>
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="fixed top-4 left-4 z-20 p-2 bg-white rounded-md shadow-lg"
        >
          {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {isSidebarOpen && (
          <div className="fixed inset-0 bg-gray-800 bg-opacity-50 z-10">
            <div className="w-64 h-full bg-white shadow-lg">
              {/* Mobile sidebar content - same as desktop */}
              <div className="p-4">
                <h1 className="text-xl font-bold">Church Admin</h1>
              </div>
              <nav className="mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      setActiveSection(item.id);
                      setIsSidebarOpen(false);
                    }}
                    className={`w-full flex items-center px-4 py-3 ${
                      activeSection === item.id
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <item.icon size={20} />
                    <span className="ml-4">{item.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <h1 className="text-2xl font-semibold text-gray-900">
              {navItems.find(item => item.id === activeSection)?.label}
            </h1>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Content sections will be rendered here */}
          {activeSection === 'dashboard' && <DashboardContent />}
          {activeSection === 'media' && <MediaContent />}
          {activeSection === 'news' && <ChurchNews />}
          {activeSection === 'members' && <MembershipPortal />}
          {activeSection === 'voting' && <VotingPortal />}
          {/* Add other section components */}
        </main>
      </div>
    </div>
  );
};

// const MediaContent = () => (
//   <div className="bg-white p-6 rounded-lg shadow">
//     <h2 className="text-lg font-semibold mb-4">Media Management</h2>
//     {/* Add media management form */}
//   </div>
// );

export default AdminDashboard;
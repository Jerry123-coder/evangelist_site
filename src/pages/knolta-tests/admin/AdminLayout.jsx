import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { FaSignOutAlt, FaHome, FaClipboardList, FaUsers, FaChartBar, FaCog, FaBars } from 'react-icons/fa';
import evangelistLogo from '../../../assets/evangelist_logo.png';
import { motion } from 'framer-motion';

const navigation = [
  { name: 'Dashboard', href: '', icon: FaHome },
  { name: 'Questions', href: 'questions', icon: FaClipboardList },
  { name: 'Users', href: 'users', icon: FaUsers },
  { name: 'Analytics', href: 'analytics', icon: FaChartBar },
  { name: 'Settings', href: 'settings', icon: FaCog },
];

const AdminLayout = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const currentPath = pathSegments[pathSegments.length - 1] || '';
  const [sidebarOpen, setSidebarOpen] = React.useState(false);

  const handleLogout = () => {
    localStorage.removeItem('knoltaAdmin');
    window.location.href = '/knolta-tests';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed inset-y-0 left-0 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out z-30 w-64`}
      >
        <div className="flex-1 flex flex-col min-h-0 bg-gradient-to-b from-blue-800 to-blue-900 shadow-xl">
          <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
            <div className="flex items-center justify-between px-4">
              <div className="flex items-center">
                <img className="h-10 w-auto" src={evangelistLogo} alt="Evangelist Logo" />
                <h1 className="ml-3 text-white text-xl font-bold">Admin Panel</h1>
              </div>
              <button 
                className="md:hidden text-white p-2 -mr-2"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <nav className="mt-8 px-2 space-y-1">
              {navigation.map((item) => {
                const isActive = currentPath === item.href;
                const Icon = item.icon;
                return (
                  <motion.div 
                    key={item.name}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mb-2"
                  >
                    <Link
                      to={`/knolta-tests/admin/${item.href}`}
                      className={`group flex items-center px-4 py-3 text-sm font-medium rounded-lg mx-2 transition-colors duration-200 ${
                        isActive
                          ? 'bg-blue-700 text-white shadow-md'
                          : 'text-blue-100 hover:bg-blue-700 hover:bg-opacity-50'
                      }`}
                      onClick={() => setSidebarOpen(false)}
                    >
                      <Icon
                        className={`mr-3 flex-shrink-0 h-5 w-5 ${
                          isActive ? 'text-white' : 'text-blue-200 group-hover:text-white'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="text-base">{item.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </div>
          <div className="flex-shrink-0 border-t border-blue-700 p-4">
            <motion.button
              onClick={handleLogout}
              className="w-full group block"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
            >
              <div className="flex items-center px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                <FaSignOutAlt
                  className="h-5 w-5 text-blue-200 group-hover:text-white"
                  aria-hidden="true"
                />
                <span className="ml-3 text-base font-medium text-white">
                  Sign out
                </span>
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="md:hidden bg-gradient-to-r from-blue-800 to-blue-900 p-4 flex justify-between items-center shadow-md">
        <div className="flex items-center">
          <button
            type="button"
            className="text-white p-2 -ml-2 mr-2 md:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <FaBars className="h-6 w-6" />
          </button>
          <img className="h-8 w-auto" src={evangelistLogo} alt="Evangelist Logo" />
          <h1 className="ml-2 text-white text-lg font-bold">Admin Panel</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="md:pl-64 flex flex-col flex-1 min-h-screen">
        <main className="flex-1 pb-16">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <Outlet />
            </div>
          </div>
        </main>
        
        {/* Footer */}
        <footer className="bg-white border-t border-gray-200 py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Evangelist Admin. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default AdminLayout;

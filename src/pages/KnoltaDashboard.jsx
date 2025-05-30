import React from 'react';
import { motion } from 'framer-motion';
import { FaClipboardList, FaUserCircle, FaSignOutAlt, FaHome, FaCheckCircle, FaClock, FaArrowRight } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import evangelistLogo from '../assets/evangelist_logo.png';

const KnoltaDashboard = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // TODO: Implement logout logic
    navigate('/knolta-tests');
  };

  const tests = [
    { id: 1, title: 'Monthly Test - May 2025', status: 'Pending', dueDate: '2025-05-31' },
    { id: 2, title: 'Monthly Test - April 2025', status: 'Completed', score: '85%' },
    { id: 3, title: 'Monthly Test - March 2025', status: 'Completed', score: '92%' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={evangelistLogo} alt="Evangelist Logo" className="h-12" />
          </Link>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <FaUserCircle className="text-blue-600 text-2xl" />
              <span className="text-gray-700 font-medium">Welcome, User</span>
            </div>
            <button 
              onClick={handleLogout}
              className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center"
            >
              <FaSignOutAlt className="mr-2" />
              Sign Out
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link 
            to="/" 
            className="flex items-center text-blue-600 hover:text-blue-800 mr-4"
          >
            <FaHome className="mr-1" />
            <span className="ml-1">Home</span>
          </Link>
          <span className="text-gray-400">/</span>
          <span className="ml-4 text-gray-600">Knolta Monthly Challenge</span>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow rounded-lg overflow-hidden"
        >
          <div className="px-6 py-5 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">Monthly Challenges</h2>
            <p className="mt-1 text-sm text-gray-500">View and participate in monthly challenges</p>
          </div>

          <div className="bg-white overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {tests.map((test, index) => (
                <motion.li 
                  key={test.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="hover:bg-gray-50 transition-colors duration-150"
                >
                  <div className="px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                        <FaClipboardList className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-sm font-medium text-gray-900">{test.title}</h3>
                        <p className="text-sm text-gray-500">
                          {test.status === 'Completed' 
                            ? `Score: ${test.score}` 
                            : `Due: ${test.dueDate}`}
                        </p>
                      </div>
                    </div>
                    <div>
                      {test.status === 'Pending' ? (
                        <Link
                          to={`/knolta-tests/take/${test.id}`}
                          className="inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Start Test
                          <FaArrowRight className="ml-1" />
                        </Link>
                      ) : (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          <FaCheckCircle className="mr-1" />
                          Completed
                        </span>
                      )}
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex items-center justify-between border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Showing <span className="font-medium">1</span> to <span className="font-medium">{tests.length}</span> of{' '}
              <span className="font-medium">{tests.length}</span> results
            </p>
            <div className="flex space-x-2">
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                Previous
              </button>
              <button className="px-3 py-1 border border-gray-300 rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700">
                Next
              </button>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {/* Stats Cards */}
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                  <FaClipboardList className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Tests</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">3</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-green-500 rounded-md p-3">
                  <FaCheckCircle className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Completed</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">2</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-yellow-500 rounded-md p-3">
                  <FaClock className="h-6 w-6 text-white" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Pending</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">1</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </main>

      <footer className="bg-white border-t border-gray-200 mt-12">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Knolta Monthly Challenge. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default KnoltaDashboard;

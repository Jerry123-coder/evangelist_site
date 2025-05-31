import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  FaClipboardList, 
  FaUsers, 
  FaChartBar, 
  FaClock, 
  FaTrophy, 
  FaUserPlus, 
  FaFileAlt, 
  FaCog,
  FaChevronRight, 
  FaChevronUp, 
  FaChevronDown 
} from 'react-icons/fa';

// Sample data - replace with real data from your backend
export const stats = [
  { 
    title: 'Total Tests Taken', 
    value: '1,234', 
    icon: FaClipboardList, 
    change: '+12%', 
    changeType: 'increase',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  { 
    title: 'Active Users', 
    value: '89', 
    icon: FaUsers, 
    change: '+5%', 
    changeType: 'increase',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  { 
    title: 'Avg. Score', 
    value: '78%', 
    icon: FaChartBar, 
    change: '+3%', 
    changeType: 'increase',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  { 
    title: 'Avg. Time', 
    value: '8:24', 
    icon: FaClock, 
    change: '-1:12', 
    changeType: 'decrease',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
];

export const recentTests = [
  { 
    id: 1, 
    name: 'John Doe', 
    score: '92%', 
    time: '7:45', 
    date: '2023-05-30', 
    passed: true 
  },
  { 
    id: 2, 
    name: 'Jane Smith', 
    score: '85%', 
    time: '9:12', 
    date: '2023-05-30', 
    passed: true 
  },
  { 
    id: 3, 
    name: 'Robert Johnson', 
    score: '78%', 
    time: '10:30', 
    date: '2023-05-29', 
    passed: true 
  },
  { 
    id: 4, 
    name: 'Emily Davis', 
    score: '65%', 
    time: '11:20', 
    date: '2023-05-29', 
    passed: false 
  },
  { 
    id: 5, 
    name: 'Michael Brown', 
    score: '91%', 
    time: '8:15', 
    date: '2023-05-28', 
    passed: true 
  },
];

export const topPerformers = [
  { 
    id: 1, 
    name: 'John Doe', 
    score: '98%', 
    rank: 1, 
    progress: 98 
  },
  { 
    id: 2, 
    name: 'Emily Davis', 
    score: '96%', 
    rank: 2, 
    progress: 96 
  },
  { 
    id: 3, 
    name: 'Jane Smith', 
    score: '94%', 
    rank: 3, 
    progress: 94 
  },
  { 
    id: 4, 
    name: 'Michael Brown', 
    score: '92%', 
    rank: 4, 
    progress: 92 
  },
  { 
    id: 5, 
    name: 'Robert Johnson', 
    score: '90%', 
    rank: 5, 
    progress: 90 
  },
];

export const quickActions = [
  {
    title: 'Create New Test',
    description: 'Add a new test with multiple choice questions',
    icon: FaFileAlt,
    link: '/knolta-tests/admin/questions/new',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100',
    hoverBgColor: 'hover:bg-blue-50'
  },
  {
    title: 'Add New User',
    description: 'Create a new user account',
    icon: FaUserPlus,
    link: '/knolta-tests/admin/users/new',
    color: 'text-green-600',
    bgColor: 'bg-green-100',
    hoverBgColor: 'hover:bg-green-50'
  },
  {
    title: 'View Analytics',
    description: 'Detailed reports and insights',
    icon: FaChartBar,
    link: '/knolta-tests/admin/analytics',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100',
    hoverBgColor: 'hover:bg-purple-50'
  },
  {
    title: 'System Settings',
    description: 'Configure system preferences',
    icon: FaCog,
    link: '/knolta-tests/admin/settings',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100',
    hoverBgColor: 'hover:bg-yellow-50'
  }
];

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-lg shadow p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                <p className="text-2xl font-semibold text-gray-900 mt-1">{stat.value}</p>
              </div>
              <div className={`p-3 rounded-full ${stat.bgColor} bg-opacity-10`}>
                <stat.icon className={`h-5 w-5 ${stat.color}`} />
              </div>
            </div>
            <div className={`mt-3 flex items-center text-sm ${
              stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
            }`}>
              {stat.changeType === 'increase' ? (
                <FaChevronUp className="h-3 w-3 mr-1" />
              ) : (
                <FaChevronDown className="h-3 w-3 mr-1" />
              )}
              <span>{stat.change} from last month</span>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            to={action.link}
            className={`block p-6 rounded-lg border ${action.bgColor} ${action.hoverBgColor} transition-all hover:shadow-md`}
          >
            <div className="flex items-center">
              <div className={`p-2 rounded-md ${action.bgColor} bg-opacity-20`}>
                <action.icon className={`h-5 w-5 ${action.color}`} />
              </div>
              <h3 className="ml-3 text-lg font-medium text-gray-900">{action.title}</h3>
            </div>
            <p className="mt-2 text-sm text-gray-600">{action.description}</p>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Recent Tests */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Recent Tests</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {recentTests.map((test) => (
              <div key={test.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-600 font-medium">
                        {test.name.charAt(0)}
                      </span>
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{test.name}</p>
                      <p className="text-sm text-gray-500">{test.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      test.passed ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                      {test.score}
                    </span>
                    <span className="ml-3 text-sm text-gray-500">{test.time}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-50 text-right">
            <Link 
              to="/knolta-tests/admin/tests" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all tests
              <FaChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>

        {/* Top Performers */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Top Performers</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {topPerformers.map((user) => (
              <div key={user.id} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span className="text-blue-600 font-medium">{user.rank}</span>
                    </div>
                  </div>
                  <div className="ml-4 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm font-medium text-gray-900">{user.score}</p>
                    </div>
                    <div className="mt-1 w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{ width: `${user.progress}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="px-6 py-4 bg-gray-50 text-right">
            <Link 
              to="/knolta-tests/admin/users" 
              className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              View all users
              <FaChevronRight className="ml-1 h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

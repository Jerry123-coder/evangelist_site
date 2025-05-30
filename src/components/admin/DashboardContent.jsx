import React from 'react';
import { Users, Video, Mail, Calendar, MessageSquare, ChevronUp, ChevronDown } from 'lucide-react';

const StatCard = ({ title, value, icon: Icon, trend, trendValue }) => (
  <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="p-2 bg-blue-50 rounded-lg">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="ml-3 text-sm font-medium text-gray-600">{title}</h3>
      </div>
      {trend && (
        <div className={`flex items-center ${trend === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend === 'up' ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          <span className="text-sm">{trendValue}%</span>
        </div>
      )}
    </div>
    <p className="mt-4 text-2xl font-semibold text-gray-900">{value}</p>
  </div>
);

const DashboardContent = () => {
  // In a real app, these would come from your API/backend
  const stats = [
    {
      title: "Total Members",
      value: "1,234",
      icon: Users,
      trend: "up",
      trendValue: "12"
    },
    {
      title: "Recent Videos",
      value: "24",
      icon: Video,
      trend: "up",
      trendValue: "8"
    },
    {
      title: "Newsletter Subscribers",
      value: "892",
      icon: Mail,
      trend: "up",
      trendValue: "5"
    },
    {
      title: "Upcoming Events",
      value: "6",
      icon: Calendar,
      trend: null,
      trendValue: null
    },
    {
      title: "New Messages",
      value: "28",
      icon: MessageSquare,
      trend: "down",
      trendValue: "3"
    }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>
      
      {/* Recent Activity */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span className="ml-3 text-sm text-gray-600">New membership form submitted</span>
            </div>
            <span className="text-sm text-gray-500">2 mins ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              <span className="ml-3 text-sm text-gray-600">New TikTok video posted</span>
            </div>
            <span className="text-sm text-gray-500">1 hour ago</span>
          </div>
          <div className="flex items-center justify-between py-3 border-b">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="ml-3 text-sm text-gray-600">Newsletter draft saved</span>
            </div>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
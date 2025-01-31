import React, { useState } from 'react';
import {
  Users,
  UserPlus,
  Search,
  Filter,
  Mail,
  Phone,
  Calendar,
  User,
  Edit,
  Trash2,
  Download,
  X
} from 'lucide-react';

const MembershipPortal = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMember, setSelectedMember] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);

  // Sample member data
  const [members, setMembers] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+1234567890',
      joinDate: '2024-01-15',
      status: 'active',
      ministries: ['Worship', 'Youth'],
      attendance: '85%',
      memberType: 'Full Member'
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      phone: '+1234567891',
      joinDate: '2024-02-01',
      status: 'active',
      ministries: ['Children', 'Outreach'],
      attendance: '90%',
      memberType: 'Full Member'
    }
  ]);

  // Stats for dashboard
  const stats = {
    totalMembers: members.length,
    activeMembers: members.filter(m => m.status === 'active').length,
    newMembers: members.filter(m => {
      const joinDate = new Date(m.joinDate);
      const oneMonthAgo = new Date();
      oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
      return joinDate > oneMonthAgo;
    }).length,
    ministries: ['Worship', 'Youth', 'Children', 'Outreach'].length
  };

  // Filter members based on search
  const filteredMembers = members.filter(member => 
    member.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    member.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handler functions
  const handleAddMember = (newMember) => {
    setMembers([...members, { ...newMember, id: members.length + 1 }]);
    setShowAddModal(false);
  };

  const handleEditMember = (updatedMember) => {
    setMembers(members.map(m => m.id === updatedMember.id ? updatedMember : m));
    setShowEditModal(false);
    setSelectedMember(null);
  };

  const handleDeleteMember = (id) => {
    if (window.confirm('Are you sure you want to delete this member?')) {
      setMembers(members.filter(m => m.id !== id));
    }
  };

  // Component for stats cards
  const StatsCard = ({ title, value, icon: Icon }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex items-center text-blue-600 mb-2">
        <Icon className="w-5 h-5 mr-2" />
        <h3 className="text-sm font-medium">{title}</h3>
      </div>
      <p className="text-3xl font-semibold">{value}</p>
    </div>
  );

  // Member form modal
  const MemberFormModal = ({ member, onSave, onClose }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {member ? 'Edit Member' : 'Add New Member'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={e => {
          e.preventDefault();
          const formData = new FormData(e.target);
          onSave({
            id: member?.id,
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            joinDate: formData.get('joinDate'),
            status: formData.get('status'),
            memberType: formData.get('memberType'),
            ministries: Array.from(formData.getAll('ministries')),
            attendance: '0%'
          });
        }}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                name="name"
                defaultValue={member?.name}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={member?.email}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="tel"
                name="phone"
                defaultValue={member?.phone}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Join Date</label>
              <input
                type="date"
                name="joinDate"
                defaultValue={member?.joinDate}
                className="w-full px-3 py-2 border rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Status</label>
              <select
                name="status"
                defaultValue={member?.status || 'active'}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
                <option value="pending">Pending</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Member Type</label>
              <select
                name="memberType"
                defaultValue={member?.memberType || 'Full Member'}
                className="w-full px-3 py-2 border rounded-md"
              >
                <option value="Full Member">Full Member</option>
                <option value="Associate Member">Associate Member</option>
                <option value="Youth Member">Youth Member</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Ministries</label>
              <div className="grid grid-cols-2 gap-2">
                {['Worship', 'Youth', 'Children', 'Outreach'].map(ministry => (
                  <label key={ministry} className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      name="ministries"
                      value={ministry}
                      defaultChecked={member?.ministries.includes(ministry)}
                      className="rounded text-blue-600"
                    />
                    <span>{ministry}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {member ? 'Update Member' : 'Add Member'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard title="Total Members" value={stats.totalMembers} icon={Users} />
        <StatsCard title="Active Members" value={stats.activeMembers} icon={User} />
        <StatsCard title="New Members" value={stats.newMembers} icon={UserPlus} />
        <StatsCard title="Ministries" value={stats.ministries} icon={Users} />
      </div>

      {/* Search and Actions */}
      <div className="flex justify-between items-center">
        <div className="relative w-64">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search members..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full border rounded-md"
          />
        </div>

        <div className="flex space-x-4">
          <button
            onClick={() => setShowAddModal(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <UserPlus className="w-5 h-5 mr-2" />
            Add Member
          </button>
          <button
            onClick={() => {/* Export functionality */}}
            className="px-4 py-2 border rounded-md hover:bg-gray-50 flex items-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Export
          </button>
        </div>
      </div>

      {/* Members Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Member
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Join Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ministries
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredMembers.map(member => (
              <tr key={member.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <User className="h-10 w-10 rounded-full bg-gray-100 p-2" />
                    </div>
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.email}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${member.status === 'active' ? 'bg-green-100 text-green-800' : 
                      member.status === 'inactive' ? 'bg-red-100 text-red-800' :
                      'bg-yellow-100 text-yellow-800'}`}
                  >
                    {member.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(member.joinDate).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-wrap gap-1">
                    {member.ministries.map((ministry, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                      >
                        {ministry}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => {
                      setSelectedMember(member);
                      setShowEditModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    <Edit size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteMember(member.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modals */}
      {showAddModal && (
        <MemberFormModal
          onSave={handleAddMember}
          onClose={() => setShowAddModal(false)}
        />
      )}

      {showEditModal && selectedMember && (
        <MemberFormModal
          member={selectedMember}
          onSave={handleEditMember}
          onClose={() => {
            setShowEditModal(false);
            setSelectedMember(null);
          }}
        />
      )}
    </div>
  );
};

export default MembershipPortal;
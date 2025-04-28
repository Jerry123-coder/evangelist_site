import React, { useState } from 'react';
import {
  BarChart3, CheckCircle2, Clock, FileText, Plus,
  Users, Calendar, Edit, Trash2, Eye, X, Search,
  Filter, Download, AlertCircle, ChevronDown
} from 'lucide-react';

// Constants for election types and configurations
const ELECTION_TYPES = {
  YOUTH: {
    name: 'Youth Ministry Elections',
    positions: [
      {
        id: 'youth_president',
        title: 'Youth President',
        description: 'Lead and oversee youth ministry activities',
        requirements: ['Must be 18-35 years', 'Active member for 2+ years']
      },
      {
        id: 'youth_secretary',
        title: 'Youth Secretary',
        description: 'Handle administrative duties',
        requirements: ['Must be 18-35 years', 'Good organizational skills']
      },
      {
        id: 'youth_treasurer',
        title: 'Youth Treasurer',
        description: 'Manage youth ministry finances',
        requirements: ['Must be 21-35 years', 'Financial background preferred']
      }
    ]
  },
  CHOIR: {
    name: 'Choir Ministry Elections',
    positions: [
      {
        id: 'choir_director',
        title: 'Choir Director',
        description: 'Lead the choir ministry',
        requirements: ['Musical background required', 'Min. 3 years choir experience']
      },
      {
        id: 'choir_secretary',
        title: 'Choir Secretary',
        description: 'Handle choir administration',
        requirements: ['Active choir member', 'Good organizational skills']
      }
    ]
  }
  // Add more election types as needed
};

const VotingSystem = () => {
  // State management
  const [activeView, setActiveView] = useState('list');
  const [activeElection, setActiveElection] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showResultsModal, setShowResultsModal] = useState(false);
  const [selectedElection, setSelectedElection] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Sample election data
  const [elections, setElections] = useState([
    {
      id: 1,
      title: 'Youth Ministry Elections 2025',
      type: 'YOUTH',
      status: 'active',
      startDate: '2025-01-15',
      endDate: '2025-01-22',
      description: 'Annual youth ministry leadership elections',
      positions: [
        {
          id: 'youth_president',
          title: 'Youth President',
          candidates: [
            {
              id: 1,
              name: 'John Doe',
              bio: 'Serving in youth ministry for 3 years',
              votes: 45
            },
            {
              id: 2,
              name: 'Jane Smith',
              bio: 'Current assistant youth leader',
              votes: 52
            }
          ]
        }
      ],
      voters: {
        total: 150,
        voted: 97,
        pending: 53
      }
    }
  ]);

  // Filter elections based on status and search
  const filteredElections = elections.filter(election => {
    const matchesStatus = filterStatus === 'all' || election.status === filterStatus;
    const matchesSearch = election.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Stats for dashboard
  const stats = {
    totalElections: elections.length,
    activeElections: elections.filter(e => e.status === 'active').length,
    completedElections: elections.filter(e => e.status === 'completed').length,
    averageParticipation: Math.round(
      elections.reduce((acc, e) => acc + (e.voters.voted / e.voters.total) * 100, 0) / 
      elections.length || 0
    )
  };

  // Handle election creation
  const handleCreateElection = (newElection) => {
    setElections([...elections, { ...newElection, id: Date.now() }]);
    setShowCreateModal(false);
  };

  // Handle election deletion
  const handleDeleteElection = (id) => {
    if (window.confirm('Are you sure you want to delete this election?')) {
      setElections(elections.filter(e => e.id !== id));
    }
  };

  // Stats Overview Component
  const StatsOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-blue-600">
          <FileText className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Total Elections</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.totalElections}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-green-600">
          <CheckCircle2 className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Active Elections</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.activeElections}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-purple-600">
          <Clock className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Completed</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.completedElections}</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-orange-600">
          <Users className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Avg. Participation</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.averageParticipation}%</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <StatsOverview />

      {/* Actions and Filters */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search elections..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md w-64"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-2 border rounded-md"
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
            <option value="draft">Draft</option>
          </select>
        </div>

        <button
          onClick={() => setShowCreateModal(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create Election
        </button>
      </div>

      {/* Elections List */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Election
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Participation
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredElections.map(election => (
              <tr key={election.id}>
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">{election.title}</div>
                    <div className="text-sm text-gray-500">{election.description}</div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{ELECTION_TYPES[election.type].name}</span>
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full
                    ${election.status === 'active' ? 'bg-green-100 text-green-800' : 
                      election.status === 'completed' ? 'bg-gray-100 text-gray-800' :
                      'bg-yellow-100 text-yellow-800'}`}
                  >
                    {election.status.charAt(0).toUpperCase() + election.status.slice(1)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <span className="text-sm font-medium text-gray-900">
                      {Math.round((election.voters.voted / election.voters.total) * 100)}%
                    </span>
                    <div className="ml-2 w-24 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 rounded-full h-2"
                        style={{
                          width: `${Math.round((election.voters.voted / election.voters.total) * 100)}%`
                        }}
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  <button
                    onClick={() => {
                      setSelectedElection(election);
                      setShowResultsModal(true);
                    }}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Eye size={18} />
                  </button>
                  <button
                    onClick={() => handleDeleteElection(election.id)}
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

      {/* Modals will be added here */}
    </div>
  );
};

export default VotingSystem;
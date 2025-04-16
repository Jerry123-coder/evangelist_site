import React, { useState, useEffect } from 'react';
import {
  Bell, Calendar, Clock, Edit, Eye, FileText, Globe, 
  Mail, MessageSquare, Plus, Send, Trash2, Users, X,
  Filter, ChevronDown, AlertCircle, Search
} from 'lucide-react';
import BulletinGenerator from './BulletinGenerator';

const ChurchNews = () => {
  // Basic UI state
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);
  const [previewMode, setPreviewMode] = useState(false);
  const [filterStatus, setFilterStatus] = useState('all');
  const [showScheduled, setShowScheduled] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [isBulletinModalOpen, setIsBulletinModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // Stats data
  const [stats, setStats] = useState({
    totalSubscribers: 1234,
    activeSubscribers: 1180,
    weeklyReaders: 950,
    totalViews: 12500,
    averageEngagement: 24,
  });

  // Form state
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    type: 'event',
    priority: 'normal',
    channels: ['website'],
    publishDate: '',
    publishTime: '',
    attachments: [],
    targetAudience: [],
    sendNotification: true
  });

  // Sample announcement data - replace with API call in production
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: 'Easter Sunday Service Schedule',
      content: 'Join us for our special Easter services with three powerful services: Sunrise Service (6:00 AM), Family Service (9:00 AM), and Celebration Service (11:00 AM). Special musical performances and children\'s program available.',
      type: 'event',
      publishDate: '2025-03-25',
      status: 'scheduled',
      channels: ['website', 'email', 'bulletin'],
      priority: 'high',
      views: 245,
      engagement: 56,
      targetAudience: ['all-members', 'visitors'],
      attachments: ['easter-schedule.pdf']
    },
    {
      id: 2,
      title: 'Weekly Bible Study Update',
      content: 'This week we will be studying the Book of Romans, Chapter 8. Please bring your study materials and join us for an in-depth discussion on Salvation and the Spirit.',
      type: 'update',
      publishDate: '2025-03-20',
      status: 'published',
      channels: ['website', 'email'],
      priority: 'normal',
      views: 189,
      engagement: 34,
      targetAudience: ['bible-study-group'],
      attachments: []
    },
    {
      id: 3,
      title: 'Youth Ministry Summer Camp Registration',
      content: 'Registration is now open for our annual youth summer camp. Early bird registration ends April 15th. Limited spots available!',
      type: 'event',
      publishDate: '2025-04-01',
      status: 'draft',
      channels: ['website', 'email', 'bulletin'],
      priority: 'high',
      views: 0,
      engagement: 0,
      targetAudience: ['youth', 'parents'],
      attachments: ['camp-details.pdf', 'registration-form.pdf']
    }
  ]);

  // File handling
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    setFormData(prev => ({
      ...prev,
      attachments: [...prev.attachments, ...files.map(f => f.name)]
    }));
    setUploadedFiles(prev => [...prev, ...files]);
  };

  // Filter and search announcements
  const filteredAnnouncements = announcements.filter(announcement => {
    const matchesStatus = filterStatus === 'all' || announcement.status === filterStatus;
    const matchesSearch = announcement.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         announcement.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  // Form handling
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const newAnnouncement = {
        id: Date.now(),
        ...formData,
        status: formData.publishDate > new Date().toISOString() ? 'scheduled' : 'published',
        views: 0,
        engagement: 0
      };

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnnouncements(prev => [...prev, newAnnouncement]);
      setIsCreateModalOpen(false);
      resetForm();
    } catch (err) {
      setError('Failed to create announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this announcement?')) {
      setIsLoading(true);
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setAnnouncements(prev => prev.filter(a => a.id !== id));
      } catch (err) {
        setError('Failed to delete announcement');
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleEdit = (announcement) => {
    setSelectedAnnouncement(announcement);
    setFormData({
      ...announcement,
      publishTime: announcement.publishTime || '12:00'
    });
    setEditMode(true);
    setIsCreateModalOpen(true);
  };

  const handlePublishNow = async (id) => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnnouncements(prev => 
        prev.map(a => a.id === id ? 
          { ...a, status: 'published', publishDate: new Date().toISOString() } : a
        )
      );
    } catch (err) {
      setError('Failed to publish announcement');
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      content: '',
      type: 'event',
      priority: 'normal',
      channels: ['website'],
      publishDate: '',
      publishTime: '',
      attachments: [],
      targetAudience: [],
      sendNotification: true
    });
    setSelectedAnnouncement(null);
    setUploadedFiles([]);
  };

  // Update announcement
  const updateAnnouncement = async () => {
    setIsLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setAnnouncements(prev => 
        prev.map(a => a.id === selectedAnnouncement.id ? { ...a, ...formData } : a)
      );
      setIsCreateModalOpen(false);
      setEditMode(false);
      resetForm();
    } catch (err) {
      setError('Failed to update announcement');
    } finally {
      setIsLoading(false);
    }
  };

  // Components
  const StatsOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-blue-600">
          <Users className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Total Subscribers</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.totalSubscribers}</p>
        <p className="mt-1 text-sm text-gray-500">
          {stats.activeSubscribers} active subscribers
        </p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-green-600">
          <Mail className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Weekly Readers</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.weeklyReaders}</p>
        <p className="mt-1 text-sm text-gray-500">Average weekly opens</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-purple-600">
          <Eye className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Total Views</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.totalViews}</p>
        <p className="mt-1 text-sm text-gray-500">Last 30 days</p>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex items-center text-orange-600">
          <MessageSquare className="w-5 h-5 mr-2" />
          <h3 className="text-sm font-medium">Engagement Rate</h3>
        </div>
        <p className="mt-2 text-3xl font-semibold">{stats.averageEngagement}%</p>
        <p className="mt-1 text-sm text-gray-500">Average engagement</p>
      </div>
    </div>
  );

  const SearchBar = () => (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      <input
        type="text"
        placeholder="Search announcements..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="pl-10 pr-4 py-2 w-full border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );

  // Continue with the rest of your existing components...

  return (
    <div className="space-y-6">
      <StatsOverview />
      
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0 mb-6">
        <SearchBar />
        
        <div className="flex space-x-4">
          <button 
            onClick={() => setIsCreateModalOpen(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
          >
            <Plus className="w-5 h-5 mr-2" />
            New Announcement
          </button>
          <button
            onClick={() => setIsBulletinModalOpen(true)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center"
          >
            <FileText className="w-5 h-5 mr-2" />
            Generate Bulletin
          </button>
        </div>
      </div>

      {/* Filter controls */}
      <div className="flex flex-wrap gap-4 mb-6">
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="all">All Status</option>
          <option value="published">Published</option>
          <option value="scheduled">Scheduled</option>
          <option value="draft">Draft</option>
        </select>
        
        <div className="relative">
          <button 
            onClick={() => setShowScheduled(!showScheduled)}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 flex items-center"
          >
            <Clock className="w-5 h-5 mr-2" />
            Scheduled
            <ChevronDown className="w-4 h-4 ml-2" />
          </button>
          
          {showScheduled && (
            <div className="absolute top-full mt-2 w-64 bg-white rounded-md shadow-lg border p-2 z-10">
              <div className="space-y-2">
                {announcements
                  .filter(a => a.status === 'scheduled')
                  .map(a => (
                    <div key={a.id} className="p-2 hover:bg-gray-50 rounded">
                      <p className="font-medium">{a.title}</p>
                      <p className="text-sm text-gray-500">
                        {new Date(a.publishDate).toLocaleDateString()}
                      </p>
                    </div>
                  ))
                }
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Announcements grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredAnnouncements.map(announcement => (
          <AnnouncementCard
            key={announcement.id}
            announcement={announcement}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onPublish={handlePublishNow}
          />
        ))}
      </div>

      {/* Create/Edit Modal */}
      {isCreateModalOpen && (
        <CreateEditModal
          isOpen={isCreateModalOpen}
          onClose={() => {
            setIsCreateModalOpen(false);
            setEditMode(false);
            resetForm();
          }}
          formData={formData}
          setFormData={setFormData}
          onSubmit={handleSubmit}
          editMode={editMode}
          onFileUpload={handleFileUpload}
          uploadedFiles={uploadedFiles}
        />
      )}

      {/* Preview Modal */}
      {previewMode && (
        <PreviewModal
          formData={formData}
          onClose={() => setPreviewMode(false)}
          onPublish={editMode ? updateAnnouncement : handleSubmit}
          editMode={editMode}
        />
      )}

      {/* Bulletin Generator */}
      <BulletinGenerator 
        isOpen={isBulletinModalOpen}
        onClose={() => setIsBulletinModalOpen(false)}
        announcements={announcements}
      />

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </div>
      )}

      {/* Error Toast */}
      {error && (
        <div className="fixed bottom-4 right-4 bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex items-center">
          <AlertCircle className="w-5 h-5 mr-2" />
          <span>{error}</span>
          <button 
            onClick={() => setError(null)}
            className="ml-4 text-red-700 hover:text-red-900"
          >
            <X size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

// Sub-components
const AnnouncementCard = ({ announcement, onEdit, onDelete, onPublish }) => (
  <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
    <div className="flex justify-between items-start mb-4">
      <div>
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-900">{announcement.title}</h3>
          {announcement.priority === 'high' && (
            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
              High Priority
            </span>
          )}
        </div>
        <div className="flex items-center space-x-4 mt-1 text-sm text-gray-500">
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {new Date(announcement.publishDate).toLocaleDateString()}
          </span>
          {announcement.status === 'published' && (
            <>
              <span className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                {announcement.views}
              </span>
              <span className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-1" />
                {announcement.engagement}
              </span>
            </>
          )}
        </div>
      </div>
      <div className="flex space-x-2">
        {announcement.status !== 'published' && (
          <button 
            onClick={() => onPublish(announcement.id)}
            className="p-2 text-green-600 hover:bg-green-50 rounded-full"
            title="Publish Now"
          >
            <Send className="w-5 h-5" />
          </button>
        )}
        <button 
          onClick={() => onEdit(announcement)}
          className="p-2 text-blue-600 hover:bg-blue-50 rounded-full"
        >
          <Edit className="w-5 h-5" />
        </button>
        <button 
          onClick={() => onDelete(announcement.id)}
          className="p-2 text-red-600 hover:bg-red-50 rounded-full"
        >
          <Trash2 className="w-5 h-5" />
        </button>
      </div>
    </div>
    
    <p className="text-gray-600 mb-4 line-clamp-2">{announcement.content}</p>
    
    {announcement.attachments.length > 0 && (
      <div className="mb-4">
        <div className="flex items-center space-x-2">
          {announcement.attachments.map((file, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full flex items-center"
            >
              <FileText className="w-3 h-3 mr-1" />
              {file}
            </span>
          ))}
        </div>
      </div>
    )}
    
    <div className="flex items-center justify-between">
      <div className="flex space-x-2">
        {announcement.channels.map(channel => (
          <span 
            key={channel}
            className="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
          >
            {channel}
          </span>
        ))}
      </div>
      <span className={`px-3 py-1 rounded-full text-xs
        ${announcement.status === 'published' 
          ? 'bg-green-100 text-green-800'
          : announcement.status === 'scheduled'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-gray-100 text-gray-800'
        }`}
      >
        {announcement.status}
      </span>
    </div>
  </div>
);

const CreateEditModal = ({ 
  isOpen, 
  onClose, 
  formData, 
  setFormData, 
  onSubmit, 
  editMode, 
  onFileUpload, 
  uploadedFiles 
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {editMode ? 'Edit Announcement' : 'Create New Announcement'}
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-6">
          {/* Form fields */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Title
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Content
            </label>
            <textarea
              rows={5}
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="event">Event</option>
                <option value="news">News</option>
                <option value="update">Update</option>
                <option value="alert">Alert</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Priority
              </label>
              <select
                value={formData.priority}
                onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Publication Channels
            </label>
            <div className="flex space-x-4">
              {[
                { id: 'website', label: 'Website', icon: Globe },
                { id: 'email', label: 'Email', icon: Mail },
                { id: 'bulletin', label: 'Weekly Bulletin', icon: FileText }
              ].map(channel => (
                <label key={channel.id} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.channels.includes(channel.id)}
                    onChange={(e) => {
                      const updatedChannels = e.target.checked
                        ? [...formData.channels, channel.id]
                        : formData.channels.filter(c => c !== channel.id);
                      setFormData({ ...formData, channels: updatedChannels });
                    }}
                    className="rounded text-blue-600"
                  />
                  <channel.icon className="w-4 h-4 text-gray-500" />
                  <span>{channel.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Target Audience
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                'all-members',
                'youth',
                'adults',
                'children',
                'parents',
                'ministry-leaders',
                'volunteers',
                'visitors'
              ].map(audience => (
                <label key={audience} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    checked={formData.targetAudience.includes(audience)}
                    onChange={(e) => {
                      const updatedAudience = e.target.checked
                        ? [...formData.targetAudience, audience]
                        : formData.targetAudience.filter(a => a !== audience);
                      setFormData({ ...formData, targetAudience: updatedAudience });
                    }}
                    className="rounded text-blue-600"
                  />
                  <span className="text-sm">{audience.replace('-', ' ')}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Attachments
            </label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
              <div className="space-y-1 text-center">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 48 48"
                  aria-hidden="true"
                >
                  <path
                    d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div className="flex text-sm text-gray-600">
                  <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    <span>Upload files</span>
                    <input
                      type="file"
                      className="sr-only"
                      multiple
                      onChange={onFileUpload}
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs text-gray-500">
                  PDF, DOC, DOCX up to 10MB
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Publish Date
              </label>
              <input
                type="date"
                value={formData.publishDate}
                onChange={(e) => setFormData({ ...formData, publishDate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Time
              </label>
              <input
                type="time"
                value={formData.publishTime}
                onChange={(e) => setFormData({ ...formData, publishTime: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.sendNotification}
              onChange={(e) => setFormData({ ...formData, sendNotification: e.target.checked })}
              className="rounded text-blue-600"
            />
            <label className="text-sm text-gray-700">
              Send notification to subscribers
            </label>
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              {editMode ? 'Update Announcement' : 'Create & Schedule'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const PreviewModal = ({ formData, onClose, onPublish, editMode }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-full max-w-3xl max-h-[80vh] overflow-y-auto">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Preview Announcement</h2>
        <button 
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="space-y-6">
        <div className="p-6 border rounded-lg">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold">{formData.title}</h3>
            {formData.priority === 'high' && (
              <span className="px-3 py-1 bg-red-100 text-red-800 text-sm rounded-full">
                High Priority
              </span>
            )}
          </div>

          <div className="prose max-w-none mb-6">
            {formData.content}
          </div>
          
          {formData.attachments.length > 0 && (
            <div className="mb-6">
              <h4 className="font-medium mb-2">Attachments:</h4>
              <div className="flex flex-wrap gap-2">
                {formData.attachments.map((file, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm flex items-center"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    {file}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            <div>
              <p className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                {new Date(formData.publishDate).toLocaleDateString()}
              </p>
              <p className="flex items-center mt-2">
                <Clock className="w-4 h-4 mr-2" />
                {formData.publishTime}
              </p>
            </div>
            <div>
              <p className="flex items-center">
                <Users className="w-4 h-4 mr-2" />
                {formData.targetAudience.map(a => a.replace('-', ' ')).join(', ')}
              </p>
              <p className="flex items-center mt-2">
                <Globe className="w-4 h-4 mr-2" />
                {formData.channels.join(', ')}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={onClose}
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50"
          >
            Edit
          </button>
          <button
            onClick={onPublish}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            {editMode ? 'Update' : 'Publish'}
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ChurchNews;
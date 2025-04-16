import React, { useState, useCallback } from 'react';
import { 
  Image, Video, Trash2, Edit, Plus, Filter, Grid, List,
  Search, Upload, X, Calendar, FolderPlus, Tag, Eye,
  CheckSquare, Square, MoreHorizontal
} from 'lucide-react';
import { useDropzone } from 'react-dropzone';
import school2 from '../../assets/gallery/shs/school2.jpeg'
import school8 from '../../assets/gallery/shs/school8.jpg'
import pastorUp from '../../assets/pastorUp.jpg'

const MediaContent = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isUploadModalOpen, setIsUploadModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState(new Set());
  const [uploadProgress, setUploadProgress] = useState({});
  const [isDragging, setIsDragging] = useState(false);

  // Sample media data
  const [mediaItems] = useState([
    {
      id: '1',
      title: 'Sunday Mass Highlights',
      type: 'video',
      url: 'https://www.youtube.com/watch?v=VUQfT3gNT3g&t=1058s',
      thumbnail: pastorUp,
      category: 'sunday-mass',
      tags: ['worship', 'sermon'],
      uploadDate: '2025-01-05',
      size: '25 MB'
    },
    {
      id: '2',
      title: 'Youth Conference 2024',
      type: 'image',
      url: 'https://www.youtube.com/watch?v=VUQfT3gNT3g&t=1058s',
      thumbnail: school2,
      category: 'youth',
      tags: ['youth', 'conference'],
      uploadDate: '2024-12-28',
      size: '5 MB'
    },
    // {
    //   id: '3',
    //   title: 'Christmas Carol Night',
    //   type: 'video',
    //   url: '/videos/carol-night.mp4',
    //   thumbnail: '/api/placeholder/300/200',
    //   category: 'events',
    //   tags: ['christmas', 'worship'],
    //   uploadDate: '2024-12-24',
    //   size: '45 MB'
    // }
  ]);

  const categories = [
    'all',
    'sunday-mass',
    'youth',
    'worship',
    'events',
    'projects',
    'flyers'
  ];

  // Filter media based on category and search
  const filteredMedia = mediaItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Bulk actions
  const toggleSelectAll = () => {
    if (selectedItems.size === filteredMedia.length) {
      setSelectedItems(new Set());
    } else {
      setSelectedItems(new Set(filteredMedia.map(item => item.id)));
    }
  };

  const toggleSelectItem = (itemId) => {
    const newSelected = new Set(selectedItems);
    if (newSelected.has(itemId)) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    setSelectedItems(newSelected);
  };

  const onDrop = useCallback((acceptedFiles) => {
    acceptedFiles.forEach(file => {
      const uploadId = Date.now().toString();
      setUploadProgress(prev => ({
        ...prev,
        [uploadId]: {
          file,
          progress: 0,
          status: 'uploading'
        }
      }));

      // Simulate upload progress
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        if (progress <= 100) {
          setUploadProgress(prev => ({
            ...prev,
            [uploadId]: {
              ...prev[uploadId],
              progress
            }
          }));
        } else {
          clearInterval(interval);
          setUploadProgress(prev => ({
            ...prev,
            [uploadId]: {
              ...prev[uploadId],
              status: 'completed'
            }
          }));
        }
      }, 500);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': [],
      'video/*': [],
      'application/pdf': []
    }
  });

  const BulkActionsBar = () => {
    if (selectedItems.size === 0) return null;

    return (
      <div className="fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t p-4 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              {selectedItems.size} items selected
            </span>
            <button
              onClick={() => {/* Bulk delete logic */}}
              className="text-red-600 hover:text-red-800 flex items-center space-x-2"
            >
              <Trash2 size={16} />
              <span>Delete</span>
            </button>
            <button
              onClick={() => {/* Add to collection logic */}}
              className="text-blue-600 hover:text-blue-800 flex items-center space-x-2"
            >
              <FolderPlus size={16} />
              <span>Add to Collection</span>
            </button>
          </div>
          <button
            onClick={() => setSelectedItems(new Set())}
            className="text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
        </div>
      </div>
    );
  };

  const UploadModal = () => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Upload Media</h3>
          <button onClick={() => setIsUploadModalOpen(false)} className="text-gray-500 hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-4">
          <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input {...getInputProps()} />
            <Upload className="mx-auto h-12 w-12 text-gray-400" />
            <p className="mt-2 text-sm text-gray-600">
              {isDragActive ? "Drop the files here" : "Drag and drop files here, or click to select files"}
            </p>
            <p className="mt-1 text-xs text-gray-500">Supports images, videos, and documents up to 100MB</p>
          </div>
          
          {/* Upload Progress */}
          <div className="space-y-4">
            {Object.entries(uploadProgress).map(([id, { file, progress, status }]) => (
              <div key={id} className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{file.name}</span>
                  <span className="text-sm text-gray-500">
                    {status === 'completed' ? 'Completed' : `${progress}%`}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Category</label>
              <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat.replace('-', ' ')}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Tags</label>
              <input 
                type="text" 
                placeholder="Add tags separated by commas"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
          </div>
          
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors">
            Upload Files
          </button>
        </div>
      </div>
    </div>
  );

  const GridView = () => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredMedia.map(item => (
        <div
          key={item.id}
          className={`bg-white rounded-lg shadow-sm overflow-hidden group relative
            ${selectedItems.has(item.id) ? 'ring-2 ring-blue-500' : ''}`}
        >
          <div className="absolute top-2 left-2 z-10">
            <button
              onClick={() => toggleSelectItem(item.id)}
              className="p-1 rounded-full bg-white shadow-sm"
            >
              {selectedItems.has(item.id) ? (
                <CheckSquare className="text-blue-600" size={20} />
              ) : (
                <Square className="text-gray-400" size={20} />
              )}
            </button>
          </div>
          
          <div className="relative aspect-video">
            <img 
              src={item.thumbnail || '/api/placeholder/300/200'} 
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
              <button className="p-2 bg-white rounded-full text-gray-700 hover:text-blue-600">
                <Edit size={20} />
              </button>
              <button className="p-2 bg-white rounded-full text-gray-700 hover:text-red-600">
                <Trash2 size={20} />
              </button>
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-medium text-gray-900 truncate">{item.title}</h3>
            <div className="mt-1 flex items-center text-sm text-gray-500">
              <Calendar size={16} className="mr-1" />
              {new Date(item.uploadDate).toLocaleDateString()}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {item.tags.map(tag => (
                <span key={tag} className="px-2 py-1 bg-gray-100 rounded-full text-xs text-gray-600">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header Controls */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-4 sm:space-y-0">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded ${viewMode === 'grid' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
          >
            <Grid size={20} />
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`p-2 rounded ${viewMode === 'list' ? 'bg-blue-50 text-blue-600' : 'text-gray-600'}`}
          >
            <List size={20} />
          </button>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search media..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <button
          onClick={() => setIsUploadModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
        >
          <Plus size={20} />
          <span>Upload Media</span>
        </button>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${
              selectedCategory === category
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {category.replace('-', ' ')}
          </button>
        ))}
      </div>

      {/* Media Grid/List View */}
      {viewMode === 'grid' ? (
        <GridView />
      ) : (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Size
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredMedia.map(item => (
                <tr key={item.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img className="h-10 w-10 rounded object-cover" src={item.thumbnail} alt="" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-500">
                          {item.tags.join(', ')}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(item.uploadDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {item.size}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">
                      <Edit size={18} />
                    </button>
                    <button className="text-red-600 hover:text-red-900">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Bulk Actions Bar */}
      <BulkActionsBar />

      {/* Modals */}
      {isUploadModalOpen && <UploadModal />}
    </div>
  );
};

export default MediaContent;
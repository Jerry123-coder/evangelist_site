import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSignOutAlt, FaPlus, FaTrash, FaEdit, FaClock, FaSave } from 'react-icons/fa';
import { motion } from 'framer-motion';
import evangelistLogo from '../../assets/evangelist_logo.png';

const AdminDashboard = () => {
  const navigate = useNavigate();
  
  // Check if user is authenticated as admin
  useEffect(() => {
    const isAuthenticated = localStorage.getItem('knoltaAdmin') === 'true';
    if (!isAuthenticated) {
      navigate('/knolta-tests');
    }
  }, [navigate]);
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [options, setOptions] = useState(['', '']);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [timeLimit, setTimeLimit] = useState(30); // in minutes
  const [editingId, setEditingId] = useState(null);
  const [isPublished, setIsPublished] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('knoltaAdmin');
    navigate('/knolta-tests');
  };

  const addOption = () => {
    setOptions([...options, '']);
  };

  const removeOption = (index) => {
    if (options.length <= 2) return; // Keep at least 2 options
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
    if (correctAnswer >= index && correctAnswer > 0) {
      setCorrectAnswer(correctAnswer - 1);
    }
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const addQuestion = (e) => {
    e.preventDefault();
    if (!newQuestion.trim() || options.some(opt => !opt.trim())) return;

    const question = {
      id: editingId || Date.now(),
      text: newQuestion,
      options: [...options],
      correctAnswer,
    };

    if (editingId) {
      setQuestions(questions.map(q => q.id === editingId ? question : q));
      setEditingId(null);
    } else {
      setQuestions([...questions, question]);
    }

    // Reset form
    setNewQuestion('');
    setOptions(['', '']);
    setCorrectAnswer(0);
  };

  const editQuestion = (question) => {
    setNewQuestion(question.text);
    setOptions([...question.options]);
    setCorrectAnswer(question.correctAnswer);
    setEditingId(question.id);
  };

  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  const publishTest = () => {
    if (questions.length === 0) {
      alert('Please add at least one question before publishing');
      return;
    }
    setIsPublished(true);
    // In a real app, you would save the test to a database here
    alert('Test published successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <img src={evangelistLogo} alt="Evangelist Logo" className="h-12 mr-4" />
            <h1 className="text-xl font-bold text-gray-800">Knolta Admin Dashboard</h1>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 flex items-center"
          >
            <FaSignOutAlt className="mr-2" />
            Sign Out
          </button>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6 mb-8">
          <h2 className="text-xl font-semibold mb-4">
            {editingId ? 'Edit Question' : 'Add New Question'}
          </h2>
          <form onSubmit={addQuestion}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                placeholder="Enter question text"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Options (Mark the correct answer)
              </label>
              {options.map((option, index) => (
                <div key={index} className="flex items-center mb-2">
                  <input
                    type="radio"
                    name="correct-answer"
                    checked={correctAnswer === index}
                    onChange={() => setCorrectAnswer(index)}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                  />
                  <input
                    type="text"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className="ml-2 flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                    placeholder={`Option ${index + 1}`}
                    required
                  />
                  {options.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeOption(index)}
                      className="ml-2 p-2 text-red-600 hover:text-red-800"
                    >
                      <FaTrash />
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                disabled={options.length >= 5}
                className="mt-2 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <FaPlus className="mr-1" /> Add Option (Max 5)
              </button>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Time Limit (minutes)
              </label>
              <div className="flex items-center">
                <FaClock className="text-gray-400 mr-2" />
                <input
                  type="number"
                  min="1"
                  max="120"
                  value={timeLimit}
                  onChange={(e) => setTimeLimit(parseInt(e.target.value) || 30)}
                  className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-gray-800"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setNewQuestion('');
                    setOptions(['', '']);
                    setCorrectAnswer(0);
                    setEditingId(null);
                  }}
                  className="px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  Cancel
                </button>
              )}
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                <FaSave className="mr-2" />
                {editingId ? 'Update Question' : 'Add Question'}
              </button>
            </div>
          </form>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-800">Questions</h2>
              <p className="text-sm text-gray-500">
                {questions.length} question{questions.length !== 1 ? 's' : ''} added
              </p>
            </div>
            <button
              onClick={publishTest}
              disabled={isPublished || questions.length === 0}
              className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white ${isPublished ? 'bg-green-600' : 'bg-blue-600 hover:bg-blue-700'} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50`}
            >
              {isPublished ? 'Published' : 'Publish Test'}
            </button>
          </div>
          
          {questions.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No questions added yet. Add your first question above.
            </div>
          ) : (
            <ul className="divide-y divide-gray-200">
              {questions.map((question, index) => (
                <motion.li 
                  key={question.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-6 hover:bg-gray-50"
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-medium text-gray-900">
                        {index + 1}. {question.text}
                      </h3>
                      <ul className="mt-2 space-y-1">
                        {question.options.map((option, oIndex) => (
                          <li
                            key={oIndex}
                            className={`flex items-center ${oIndex === question.correctAnswer ? 'text-green-600 font-medium' : 'text-gray-600'}`}
                          >
                            <span className="mr-2 w-4">
                              {String.fromCharCode(65 + oIndex)}.
                            </span>
                            {option}
                            {oIndex === question.correctAnswer && (
                              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">
                                Correct Answer
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <FaClock className="mr-1" />
                        <span>{timeLimit} minute{timeLimit !== 1 ? 's' : ''} per question</span>
                      </div>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <button
                        onClick={() => editQuestion(question)}
                        className="text-blue-600 hover:text-blue-800 p-2"
                        title="Edit"
                      >
                        <FaEdit />
                      </button>
                      <button
                        onClick={() => deleteQuestion(question.id)}
                        className="text-red-600 hover:text-red-800 p-2"
                        title="Delete"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ul>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

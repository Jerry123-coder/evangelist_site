import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaSignInAlt, FaArrowLeft } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import evangelistLogo from '../assets/evangelist_logo.png';
// Using public URL for background image
const knoltaBackground = '/assets/Knolta-Monthly-Challenge.jpg';

const KnoltaLogin = () => {
  // Add styles for input placeholders
  const inputStyle = {
    '&::placeholder': {
      color: '#6B7280',
      opacity: 1,
    },
    '&:-ms-input-placeholder': {
      color: '#6B7280',
    },
    '&::-ms-input-placeholder': {
      color: '#6B7280',
    },
  };
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      // Check for admin login
      if (formData.username === 'admin' && formData.password === 'admin123') {
        // Store admin authentication state
        localStorage.setItem('knoltaAdmin', 'true');
        // Navigate to admin dashboard
        navigate('/knolta-tests/admin/dashboard');
      } 
      // Check for regular user login
      else if (formData.username && formData.password) {
        // Clear any existing admin session
        localStorage.removeItem('knoltaAdmin');
        // Navigate to the regular user dashboard
        navigate('/knolta-tests/dashboard');
      } else {
        setError('Invalid username or password');
      }
      setIsLoading(false);
    }, 500);
  };

  const backgroundStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${knoltaBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div style={backgroundStyle}></div>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Link to="/" className="inline-block mb-6">
          <motion.div 
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center"
          >
            <img 
              src={evangelistLogo} 
              alt="Evangelist Logo" 
              className="h-20 mb-2" 
            />
          </motion.div>
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white rounded-xl shadow-2xl p-8"
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-900 mb-2">Knolta Monthly Challenge</h1>
            <p className="text-gray-600">Sign in to access your test portal</p>
          </div>

          {error && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded"
              role="alert"
            >
              <p>{error}</p>
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
              </div>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                placeholder="Username"
                required
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500"
                placeholder="Password"
                required
              />
            </motion.div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                  Forgot password?
                </a>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="pt-2"
            >
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? (
                  'Signing in...'
                ) : (
                  <>
                    <FaSignInAlt className="mr-2" />
                    Sign In
                  </>
                )}
              </button>
            </motion.div>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="font-medium text-blue-600 hover:text-blue-500">
                Contact administrator
              </a>
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8 text-center text-sm text-gray-500"
        >
          <Link 
            to="/" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <FaArrowLeft className="mr-1" />
            Back to home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default KnoltaLogin;

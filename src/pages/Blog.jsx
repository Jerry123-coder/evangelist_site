import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import EnhancedBlogCard from "../components/EnhancedBlogCard";
import WaveBackground from "../components/WaveBackground";
import { getAllPosts, getPostsByCategory, getAnnouncementPosts, searchPosts, subscribeToNewsletter } from "../services/blogService";
import "../styles/waveAnimation.css";

const Blog = () => {
  const [email, setEmail] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState(["All"]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all posts on component mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const allPosts = await getAllPosts();
        setPosts(allPosts);
        setFilteredPosts(allPosts);
        
        // Extract unique categories from posts
        const uniqueCategories = ["All", ...new Set(allPosts.map(post => post.category))];
        setCategories(uniqueCategories);
        
        setIsLoading(false);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
        setIsLoading(false);
      }
    };
    
    fetchData();
  }, []);

  // Filter posts based on category and search term
  useEffect(() => {
    const filterPosts = async () => {
      try {
        setIsLoading(true);
        let result;
        
        // If there's a search term, prioritize search
        if (searchTerm) {
          result = await searchPosts(searchTerm);
          // Further filter by category if not "All"
          if (activeCategory !== "All") {
            result = result.filter(post => post.category === activeCategory);
          }
        } else if (activeCategory !== "All") {
          // If no search term but category is selected
          result = await getPostsByCategory(activeCategory);
        } else {
          // Default: all posts
          result = posts;
        }
        
        setFilteredPosts(result);
        setIsLoading(false);
      } catch (err) {
        console.error("Error filtering posts:", err);
        setError("Failed to filter posts. Please try again later.");
        setIsLoading(false);
      }
    };
    
    if (posts.length > 0) {
      filterPosts();
    }
  }, [activeCategory, searchTerm, posts]);

  // Handle email subscription
  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (email && email.includes("@")) {
      try {
        const response = await subscribeToNewsletter(email);
        if (response.success) {
          setIsSubscribed(true);
          setEmail("");
          setTimeout(() => setIsSubscribed(false), 5000);
        }
      } catch (err) {
        console.error("Error subscribing to newsletter:", err);
        alert("Failed to subscribe. Please try again later.");
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-blue-50 pb-16">
      {/* Wave Background Animation */}
      <WaveBackground />
      
      {/* Hero Section */}
      <div className="relative z-10 pt-16 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Parish News & Updates</h1>
            <p className="text-lg text-blue-700 max-w-3xl mx-auto">
              Stay connected with the latest events, announcements, and spiritual insights from our parish community and the Catholic Church worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Search Bar */}
            <div className="relative flex-grow max-w-lg">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search articles..."
                className="w-full py-2 pl-10 pr-4 text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all duration-300"
                disabled={isLoading}
              />
              <div className="absolute left-3 top-2.5 text-gray-400">
                {isLoading ? (
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                )}
              </div>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
                  disabled={isLoading}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Featured Announcements Section */}
      {activeCategory === "Announcements" ? (
        <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-10">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg mb-6">
            <h2 className="text-2xl font-bold text-yellow-800 mb-2 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
              Parish Announcements & Upcoming Programs
            </h2>
            <p className="text-yellow-700">Important information and upcoming events from our parish</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
            {filteredPosts
              .filter(post => post.category === "Announcements")
              .map((post) => (
                <EnhancedBlogCard key={post.id} post={post} />
              ))}
          </div>
        </div>
      ) : null}

      {/* Blog Posts Grid */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-16">
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : error ? (
          <div className="text-center py-16 bg-red-50 rounded-lg">
            <h3 className="text-2xl font-semibold text-red-700 mb-2">Error Loading Content</h3>
            <p className="text-red-500">{error}</p>
          </div>
        ) : filteredPosts.filter(post => activeCategory === "Announcements" ? post.category === "Announcements" : activeCategory === "All" ? post.category !== "Announcements" : post.category === activeCategory).length > 0 ? (
          <div>
            {activeCategory !== "Announcements" && (
              <h2 className="text-2xl font-bold text-blue-800 mb-6">
                {activeCategory === "All" ? "Latest Articles" : activeCategory}
              </h2>
            )}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts
                .filter(post => activeCategory === "Announcements" ? post.category === "Announcements" : activeCategory === "All" ? post.category !== "Announcements" : post.category === activeCategory)
                .map((post) => (
                  <EnhancedBlogCard key={post.id} post={post} />
                ))}
            </div>
          </div>
        ) : (
          <div className="text-center py-16">
            <h3 className="text-2xl font-semibold text-gray-700 mb-2">No articles found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Newsletter Subscription */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="px-6 py-12 md:p-12 md:flex md:items-center md:justify-between">
            <div className="md:w-0 md:flex-1">
              <h2 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Subscribe to our newsletter
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-blue-100">
                Receive weekly updates on parish events, spiritual reflections, and community news directly in your inbox.
              </p>
            </div>
            
            <div className="mt-8 md:mt-0 md:w-full md:max-w-md">
              <form className="sm:flex" onSubmit={handleSubscribe}>
                <label htmlFor="email-address" className="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-5 py-3 text-gray-800 placeholder-gray-500 bg-white rounded-full border-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-800"
                  placeholder="Enter your email"
                />
                <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                  <button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-6 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
              
              {isSubscribed && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 text-sm text-blue-100 bg-blue-700/50 p-2 rounded-lg"
                >
                  Thank you for subscribing! You'll receive our next newsletter soon.
                </motion.div>
              )}
              
              <p className="mt-3 text-sm text-blue-200">
                We care about your data. Read our{" "}
                <a href="#" className="font-medium text-white underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

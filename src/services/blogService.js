// This file serves as a bridge between the frontend components and the backend API
// When the backend is ready, replace the imports and functions with actual API calls

import catholicNews from "../data/catholicNews";

// Simulated API functions - replace these with actual API calls when backend is ready
export const getAllPosts = async () => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Replace this with actual API call: 
  // return await fetch('/api/posts').then(res => res.json());
  return catholicNews;
};

export const getPostsByCategory = async (category) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (category === "All") {
    return catholicNews;
  }
  
  // Replace this with actual API call:
  // return await fetch(`/api/posts?category=${category}`).then(res => res.json());
  return catholicNews.filter(post => post.category === category);
};

export const getAnnouncementPosts = async () => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Replace this with actual API call:
  // return await fetch('/api/posts?category=Announcements').then(res => res.json());
  return catholicNews.filter(post => post.category === "Announcements");
};

export const searchPosts = async (searchTerm) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  if (!searchTerm) {
    return catholicNews;
  }
  
  // Replace this with actual API call:
  // return await fetch(`/api/posts/search?q=${searchTerm}`).then(res => res.json());
  const term = searchTerm.toLowerCase();
  return catholicNews.filter(
    post =>
      post.title.toLowerCase().includes(term) ||
      post.summary.toLowerCase().includes(term) ||
      post.author.toLowerCase().includes(term)
  );
};

export const subscribeToNewsletter = async (email) => {
  // Simulating API call delay
  await new Promise(resolve => setTimeout(resolve, 300));
  
  // Replace this with actual API call:
  // return await fetch('/api/newsletter/subscribe', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ email })
  // }).then(res => res.json());
  
  // Simulate successful subscription
  return { success: true, message: "Successfully subscribed to newsletter" };
};

// Add more API functions as needed for the backend integration

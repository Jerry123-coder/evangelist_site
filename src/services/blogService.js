// This file serves as a bridge between the frontend components and the backend API
// When the backend is ready, replace the imports and functions with actual API calls

import catholicNews from '../data/catholicNews';
import { getUpcomingEvents } from './notificationService';

// Simulated API functions - replace these with actual API calls when backend is ready
/**
 * Get all blog posts including notification events
 * @returns {Promise<Array>} Promise resolving to array of all posts
 */
export const getAllPosts = async () => {
  // Simulate API call
  return new Promise(async (resolve) => {
    try {
      // Get events from notification service
      const events = await getUpcomingEvents();
      
      // Convert events to blog post format
      const eventPosts = events.map(event => ({
        id: `event-${event.id}`,
        title: event.title,
        date: event.date,
        category: "Announcements",
        image: catholicNews[0].image, // Use a default image
        author: "Parish Office",
        summary: event.description,
        location: event.location,
        url: `/blog/event-${event.id}`,
        featured: event.isHighPriority,
        isEvent: true
      }));
      
      // Combine regular posts with event posts
      let allPosts = [...catholicNews, ...eventPosts];

      // Deduplicate by title and date
      allPosts = allPosts.filter((post, index, self) =>
        index === self.findIndex(p => p.title === post.title && p.date === post.date)
      );

      // Sort by date (newest first)
      allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

      setTimeout(() => {
        resolve(allPosts);
      }, 500);
    } catch (error) {
      console.error("Error fetching posts:", error);
      // Fallback to just catholicNews if there's an error
      setTimeout(() => {
        resolve(catholicNews);
      }, 500);
    }
  });
};

/**
 * Get posts by category
 * @param {string} category - Category to filter by
 * @returns {Promise<Array>} Promise resolving to array of filtered posts
 */
export const getPostsByCategory = async (category) => {
  // Simulate API call
  return new Promise(async (resolve) => {
    try {
      // For the Announcements category, include notification events
      if (category === "Announcements") {
        const events = await getUpcomingEvents();
        
        // Convert events to blog post format
        const eventPosts = events.map(event => ({
          id: `event-${event.id}`,
          title: event.title,
          date: event.date,
          category: "Announcements",
          image: catholicNews[0].image,
          author: "Parish Office",
          summary: event.description,
          location: event.location,
          url: `/blog/event-${event.id}`,
          featured: event.isHighPriority,
          isEvent: true
        }));
        
        // Get regular announcements
        const regularAnnouncements = catholicNews.filter(post => post.category === category);
        
        // Combine and deduplicate by title and date
        let allAnnouncements = [...regularAnnouncements, ...eventPosts];
        allAnnouncements = allAnnouncements.filter((post, index, self) =>
          index === self.findIndex(p => p.title === post.title && p.date === post.date)
        );
        allAnnouncements.sort((a, b) => new Date(b.date) - new Date(a.date));
        
        setTimeout(() => {
          resolve(allAnnouncements);
        }, 300);
      } else {
        // For other categories, just filter the regular posts
        setTimeout(() => {
          const filteredPosts = catholicNews.filter(post => post.category === category);
          resolve(filteredPosts);
        }, 300);
      }
    } catch (error) {
      console.error("Error fetching posts by category:", error);
      // Fallback to just filtered catholicNews if there's an error
      setTimeout(() => {
        const filteredPosts = catholicNews.filter(post => post.category === category);
        resolve(filteredPosts);
      }, 300);
    }
  });
};

/**
 * Get announcement posts including notification events
 * @returns {Promise<Array>} Promise resolving to array of announcement posts
 */
export const getAnnouncementPosts = async () => {
  // Reuse the getPostsByCategory function for consistency
  return getPostsByCategory("Announcements");
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

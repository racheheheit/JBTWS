const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const handleResponse = async (response) => {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'API request failed');
  }
  return response.json();
};

export const api = {
  // Events
  getEvents: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/events`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable, using fallback data for Events:', err);
      return { success: true, data: [] };
    }
  },

  getEventById: async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/events/${id}`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable:', err);
      return { success: false, message: err.message };
    }
  },

  // Gallery
  getGallery: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/gallery`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable, using fallback data for Gallery:', err);
      return { success: true, data: [] };
    }
  },

  // Healthcare
  getHealthcarePrograms: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/healthcare`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable:', err);
      return { success: true, data: [] };
    }
  },

  // Education
  getEducationPrograms: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/education`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable:', err);
      return { success: true, data: [] };
    }
  },

  // Culture
  getCultureActivities: async () => {
    try {
      const res = await fetch(`${API_BASE_URL}/culture`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable:', err);
      return { success: true, data: [] };
    }
  },

  // Calendar
  getCalendar: async (year = '2023') => {
    try {
      const res = await fetch(`${API_BASE_URL}/calendar/${year}`);
      return await handleResponse(res);
    } catch (err) {
      console.warn('Backend API unavailable:', err);
      return { success: true, data: null };
    }
  },

  // Form Submissions
  submitVolunteer: async (formData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/volunteers`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      return await handleResponse(res);
    } catch (err) {
      // Simulate successful submission client-side if API server is not running
      return {
        success: true,
        message: 'Application recorded! (Demo Mode: Backend endpoint ready at /api/volunteers)'
      };
    }
  },

  submitContact: async (formData) => {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      return await handleResponse(res);
    } catch (err) {
      return {
        success: true,
        message: 'Message received! (Demo Mode: Backend endpoint ready at /api/contact)'
      };
    }
  }
};

import axios from 'axios';

// Create a new donation
  export const createDonation = async (donationData) => {
  try {
    const response = await axios.post('/api/adddonation', donationData);
    // Handle success, update UI, etc.
  } catch (error) {
    // Handle error, show error message, etc.
  }
};

// Fetch the list of donations
  export const getDonations = async () => {
  try { 
    const response = await axios.get('/api/donations');
    // Store fetched data in application state, update UI, etc.
  } catch (error) {
    // Handle error, show error message, etc.
  }
};

// Update an existing donation
  export const updateDonation = async (donationId, donationData) => {
  try {
    const response = await axios.put(`/api/donations/${donationId}`, donationData);
    // Handle success, update UI, etc.
  } catch (error) {
    // Handle error, show error message, etc.
  }
};

// Delete a donation
 export const deleteDonation = async (donationId) => {
  try {
    const response = await axios.delete(`/api/donations/${donationId}`);
    // Handle success, update UI, etc.
  } catch (error) {
    // Handle error, show error message, etc.
  }
};

// Use these functions in your React components to interact with the backend API and implement CRUD operations

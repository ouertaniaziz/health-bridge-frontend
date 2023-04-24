import axios from 'axios';
import axiosInstance from '../../../../config/axios';
const API_URL = 'http://localhost:5000'; // replace with the URL of your API

const donorService = {
  signup: (username, email, password) => {
    return axios.post(`${API_URL}/donor/signup`, {
      username,
      email,
      password
    });
  },
  login: (email, password) => {
    return axios.post(`${API_URL}/donor/login`, {
      email,
      password
    });
  },
  logout: () => {
    return axios.post(`${API_URL}/donor/logout`);
  },
  getMaterialsByDonationType: (donationType) => {
    return axios.get(`${API_URL}/donor/materials/${donationType}`);
  },
  getMedicationsByDonationType: (donationType) => {
    return axios.get(`${API_URL}/donor/medications/${donationType}`);
  }
};

export default donorService;



import axiosInstance from '../../../config/axios';
export const addUser = data => {
  axiosInstance.post('/api/signup', data);
};

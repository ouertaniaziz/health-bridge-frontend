import axiosInstance from '../../../config/axios';
export const getMedication = () => {
  return axiosInstance.get('/medications').then(res => {
    console.log(res);
    return res;
  });
};

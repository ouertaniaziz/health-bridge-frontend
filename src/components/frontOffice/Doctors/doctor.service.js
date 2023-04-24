import axiosInstance from '../../../config/axios';
export const getMedication = () => {
  return axiosInstance.get('/medications').then(res => {
    console.log(res);
    return res;
  });
};
export const getAppoimentByDoctor = doctorId => {
  console.log('you');
  return axiosInstance.get(`/appointments/doctor/${doctorId}`).then(res => {
    console.log(res);
    return res;
  });
};
export const AddPrespiction = data => {
  console.log(data);
  return axiosInstance.post('/prescription', data).then(res => {
    console.log(res);
    return res;
  });
};

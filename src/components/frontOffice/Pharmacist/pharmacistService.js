import axiosInstance from '../../../config/axios';


export const getMedicationById = id => {
  return axiosInstance.get(`/medications/${id}`).then(res => {
    console.log(res);
    return res;
  });
};  


export const GetPrespictionById = id => {
    return axiosInstance.get(`/prescriptions/${id}`).then(res => {
        console.log(res);
        return res;
    });
    };
    export const getMedication = () => {
      return axiosInstance.get('/medications').then(res => {
        console.log("MEDICATION",res);
        return res;
      });
    };
    
    const pharmacistservice = {
        GetPrespictionById,
        getMedicationById,
        getMedication
        
      };
      export default pharmacistservice;
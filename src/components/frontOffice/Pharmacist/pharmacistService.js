import axiosInstance from '../../../config/axios';


export const getMedicationById = id => {
  return axiosInstance.get(`/medications/${id}`).then(res => {
    console.log(res);
    return res;
  });
};  

export const GetPrespictionByPatientId = id => {
    return axiosInstance.get(`/prescriptions/patient/${id}`).then(res => {
        console.log(res);
        return res;
    });
    };

    const pharmacistservice = {
        GetPrespictionByPatientId,
        getMedicationById,
      };
      export default pharmacistservice;
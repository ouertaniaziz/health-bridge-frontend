import axiosInstance  from '../../../../config/axios';
export const getpatient = usernam => {
  console.log('username:', usernam);

  return axiosInstance
    .post('/patient/getpatient', {
      username: usernam,
    })
    .then(response => {
      // console.log('response',response.data)
      return response.data.user;
    });
};

export const updatepatient = patient => {
  console.log(patient);
  return axiosInstance
    .put('/patient/updatepatient', {
      patient,
    })
    .then(response => {
      const status = response.status;
      if (status === 200) {
        return true;
      } else {
        return false;
      }
    });
};

const patientservice = {
  getpatient,
};
export default patientservice;

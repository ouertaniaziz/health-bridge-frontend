import axiosInstance from '../../../../config/axios';
export const getpatient = usernam => {
  console.log('username:', usernam);

  return axiosInstance
    .post('/patient/getpatient', {
      username: usernam,
    })
    .then(response => {
      console.log('response', response.data);
      return response.data;
    });
};

export const updatepatient = user => {
  console.log('triggered', user);
  return axiosInstance
    .put('patient/updatepatient', {
      user,
    })
    .then(response => {
      const status = response.status;
      console.log('response', response.data);
      return status
      // if (status === 200) {
      //   console.log(response.data);

      //   return true;
      // } else {
      //   console.log(response.data);

      //   return false;
      // }
    });
};

export const verifycin = form => {
  return axiosInstance.post('/patient/cin', form).then(response => {
    console.log(response.data);

    return response.data.status;
  });
};
export const uploadfilespatient = form => {
  return axiosInstance.post('/patient/addfiles', form).then(response => {
    console.log(response.data);
    return response.data;
  });
};
const patientservice = {
  getpatient,
  verifycin,
  uploadfilespatient,
};
export default patientservice;

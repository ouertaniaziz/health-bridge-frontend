import { createSlice } from '@reduxjs/toolkit';
import { updatepatient } from './../Patient/service/patientservice';

const patientslice = createSlice({
  name: 'patient',
  initialState: {
    value: {
      firstname: '',
      lastname: '',
      username: '',
      email: '',
      phone: '',
      creationDate: '',
      dateOfBirth: '',
      bloodGroup: '',
      medicalHistory: '',
      medications: '',
      insuranceInformation: '',
      symptoms: '',
      testResults: '',
      gender: '',
      city: '',
      state: '',
      postal_code: '',
      cinverified: '',
      status: 0,
    },
  },
  reducers: {
    addpatient: (state, action) => {
      state.value = action.payload;
      //  console.log('sate', state.value);

      console.log(state.value.cinverified);
    },
    updatepatientredux: (state, action) => {
      //console.log('payload',action.payload)
      const { fieldName, value } = action.payload;
      state.value[fieldName] = value;
      console.log(state.value[fieldName]);
    },
    updatepatientdetails: (state, action) => {
      const payload = action.payload;

      console.log('state', state.value);
      state.value.firstname = payload.firstname;
      state.value.lastname = payload.lastname;
      state.value.email = payload.email;
      state.value.phone = payload.phone;
      state.value.city = payload.city;
      state.value.postal_code = payload.postal_code;
      //console.log('lenaaaaaaaaaaaa',state.value.firstname)
      // updatepatient({
      //   firstname: state.value.firstname,
      //   lastname: state.value.lastname,
      //   email:state.value.email,
      //   phone:state.value.phone,
      //   city: state.value.city,

      // });
      let value
      const status = updatepatient(state.value);
       status.then(res => {
       value=res;
        console.log('s', res);
      });
        console.log(value)
      //console.log(status)
    },
    setverified: (state, action) => {
      console.log('old', state.value.cinverified);
      state.value.cinverified = action.payload;
      console.log('state', state.value.cinverified);
    },
  },
});

export const {
  addpatient,
  updatepatientredux,
  updatepatientdetails,
  setverified,
} = patientslice.actions;
export default patientslice.reducer;

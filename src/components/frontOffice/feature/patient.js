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
    },
  },
  reducers: {
    addpatient: (state, action) => {
      state.value = action.payload;
    },
    updatepatientredux: (state, action) => {
      //console.log('payload',action.payload)
      const { fieldName, value } = action.payload;
      state.value[fieldName] = value;
      console.log(state.value[fieldName]);
    },
    updatepatientdetails: (state, action) => {
      const payload = action.payload;
      console.log('payload', payload);

      console.log('state', state.value);
      state.value.firstname = payload.firstname;
      state.value.lastname = payload.lastname;
      state.value.email = payload.email;
      state.value.phone = payload.phone;
      state.value.city = payload.city;
      state.value.postal_code = payload.postal_code;
      updatepatient(state.value)
    },
  },
});

export const { addpatient, updatepatientredux, updatepatientdetails } =
  patientslice.actions;
export default patientslice.reducer;

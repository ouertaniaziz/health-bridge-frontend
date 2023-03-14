import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import AuthService from '../login/service/auth.Service';
import { setMessage } from './message';

export const formSignUpSlice = createSlice({
  name: 'formSignUp',
  initialState: {
    value: {
      name: '',
      LastName: '',
      username: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      StreetAddress: '',
      city: '',
      state: '',
      postal_code: '',
      role: '',
      dateOfBirth: '',
      bloodGroup: '',
      medicalHistory: '',
      medications: '',
      insuranceInformation: '',
      symptoms: '',
      testResults: '',
      sex: 'Male',
    },
  },
  reducers: {
    setFormOne: (state, action) => {
      state.value.name = action.payload.name;
      state.value.LastName = action.payload.LastName;
      state.value.email = action.payload.email;
      state.value.phone = action.payload.phone;
      state.value.password = action.payload.password;
      state.value.confirmPassword = action.payload.confirmPassword;
      state.value.role = action.payload.role;
      state.value.username = action.payload.username;
    },
    setFormtwo: (state, action) => {
      state.value.StreetAddress = action.payload.StreetAddress;
      state.value.city = action.payload.city;
      state.value.state = action.payload.state;
      state.value.postal_code = action.payload.postal_code;
    },
    setFormpatient: (state, action) => {
      state.value.dateOfBirth = action.payload.dateOfBirth;
      state.value.bloodGroup = action.payload.bloodGroup;
      state.value.medicalHistory = action.payload.medicalHistory;
      state.value.medications = action.payload.medications;
      state.value.insuranceInformation = action.payload.insuranceInformation;
      state.value.symptoms = action.payload.symptoms;
      state.value.testResults = action.payload.testResults;
    },
    setLastName: (state, action) => {
      state.value.LastName = action.payload.LastName;
    },
    setEmail: (state, action) => {
      state.value.email = action.payload.email;
    },
    setPhone: (state, action) => {
      state.value.phone = action.payload.phone;
    },
    setPassword: (state, action) => {
      state.value.password = action.payload.password;
    },
    setConfirmPassword: (state, action) => {
      state.value.confirmPassword = action.payload.confirmPassword;
    },
    setStreetAddress: (state, action) => {
      state.value.StreetAddress = action.payload.StreetAddress;
    },
    setCity: (state, action) => {
      state.value.city = action.payload.city;
    },
    setState: (state, action) => {
      state.value.state = action.payload.state;
    },
    setPostalCode: (state, action) => {
      state.value.postal_code = action.payload.postal_code;
    },
  },
});
export const {
  setFormOne,
  setFormtwo,
  setFormpatient,
  setLastName,
  setEmail,
  setPhone,
  setPassword,
  setConfirmPassword,
  setStreetAddress,
  setCity,
  setState,
  setPostalCode,
} = formSignUpSlice.actions;
export default formSignUpSlice.reducer;

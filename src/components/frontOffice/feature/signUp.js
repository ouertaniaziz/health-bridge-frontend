import { createSlice } from '@reduxjs/toolkit';

export const formSignUpSlice = createSlice({
  name: 'formSignUp',
  initialState: {
    value: {
      name: '',
      LastName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
      StreetAddress: '',
      city: '',
      state: '',
      postal_code: '',
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

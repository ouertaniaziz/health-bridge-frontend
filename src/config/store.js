import { configureStore } from '@reduxjs/toolkit';
import { formSignUpSlice } from '../components/frontOffice/feature/signUp';
import authReducer from '../components/frontOffice/feature/signIn';
import messageReducer from '../components/frontOffice/feature/message';
import patientslice from './../components/frontOffice/feature/patient';
export const store = configureStore({
  reducer: {
    formSignUp: formSignUpSlice.reducer,
    auth: authReducer,
    message: messageReducer,
    patient: patientslice,
  },
});

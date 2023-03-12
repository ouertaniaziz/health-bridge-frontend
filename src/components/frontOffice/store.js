import { configureStore } from '@reduxjs/toolkit';
import { formSignUpSlice } from './feature/signUp';
export const store = configureStore({
  reducer: {
    formSignUp: formSignUpSlice.reducer,
  },
});

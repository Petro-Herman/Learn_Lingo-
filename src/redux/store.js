import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './teachersSlice';

export const store = configureStore({
  reducer: {
    teachers: teachersReducer,
  },
});

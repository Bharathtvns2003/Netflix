import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from '../moviereducer';

export const store = configureStore({
  reducer: moviesReducer,
});

// Make sure to export the store here

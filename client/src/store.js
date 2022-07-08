import { configureStore } from '@reduxjs/toolkit';

import carsReducer from './features/cars/cars';

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});



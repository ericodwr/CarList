import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import uniqid from 'uniqid';
import axios from 'axios';

const url = `http://localhost:3001/cars`;

const initialState = {
  cars: [],
  detailCar: [],
  isLoading: false,
};

export const getCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const getDetailCar = createAsyncThunk('/cars/:name', async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addCars = createAsyncThunk('/cars', async (formData) => {
  const id = uniqid();
  try {
    axios.post(`${url}`, { ...formData, id });
  } catch (error) {
    console.log(error);
  }
});

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    clearCars: (state, action) => {
      console.log(action);
      state.cars = [];
    },
  },
  extraReducers: {
    [getCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
  },
});

export const { clearCars } = carsSlice.actions;

export default carsSlice.reducer;

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

export const getDetailCar = createAsyncThunk('/cars/:id', async (id) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const addCars = createAsyncThunk('/cars', async (formData) => {
  const id = uniqid();
  const date = new Date().toLocaleDateString();
  try {
    axios.post(`${url}`, { ...formData, id, date });
  } catch (error) {
    console.log(error);
  }
});

export const deleteCars = createAsyncThunk('/cars/delete', async (id) => {
  try {
    await axios.delete(`${url}/${id}`);
    console.log('success');
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
    deleteCarReducer: (state, { payload }) => {
      state.cars = state.cars.filter((car) => car.id !== payload);
    },
    // deleteCars: (state, action) =>
    //   createAsyncThunk('/cars/delete', async () => {
    //     try {
    //       await axios.delete(`${url}/${action.payload}`);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }),
  },
  extraReducers: {
    [getCars.fulfilled]: (state, action) => {
      state.cars = action.payload;
    },
    [getDetailCar.fulfilled]: (state, action) => {
      state.detailCar = action.payload;
    },
  },
});

export const { clearCars, getDetail, deleteCarReducer } = carsSlice.actions;

export default carsSlice.reducer;

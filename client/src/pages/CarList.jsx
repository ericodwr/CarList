import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import CarListFunc from '../components/CarListFunc';

import { useSelector, useDispatch } from 'react-redux';

import CarBrand from '../components/CarBrand';

import { getCars } from '../features/cars/cars';

const CarList = () => {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);


  return (
    <Box>
      <CarListFunc />

      {cars?.map((car) => (
        <CarBrand data={car} key={car.id} />
      ))}
    </Box>
  );
};

export default CarList;

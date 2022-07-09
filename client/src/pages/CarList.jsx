import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CarListFunc from '../components/CarListFunc';

import { useSelector, useDispatch } from 'react-redux';

import CarBrand from '../components/CarBrand';

import { getCars } from '../features/cars/cars';

const CarList = () => {
  const [updated, setUpdated] = useState(null);

  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, updated]);

  return (
    <Box>
      <CarListFunc setUpdated={setUpdated} />

      {cars?.map((car) => (
        <CarBrand data={car} key={car.id} setUpdated={setUpdated} />
      ))}
    </Box>
  );
};

export default CarList;

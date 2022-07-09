import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import CarListFunc from '../components/CarListFunc';

import { useSelector, useDispatch } from 'react-redux';

import CarBrand from '../components/CarBrand';

import { getCars } from '../features/cars/cars';
import SnackBars from '../components/SnackBars';

const CarList = () => {
  const [updated, setUpdated] = useState(null);
  const [open, setOpen] = useState(false);

  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch, updated]);

  return (
    <Box>
      <CarListFunc setUpdated={setUpdated} />

      {cars?.map((car) => (
        <CarBrand
          setOpen={setOpen}
          open={open}
          data={car}
          key={car.id}
          setUpdated={setUpdated}
        />
      ))}
      <SnackBars
        text={'Car Deleted'}
        open={open}
        setOpen={setOpen}
        severity="error"
      />
    </Box>
  );
};

export default CarList;

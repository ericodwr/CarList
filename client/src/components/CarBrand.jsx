import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteCars, deleteCarReducer } from '../features/cars/cars';

const CarBrand = ({ data }) => {
  const { name, logo, desc, models, status, date, id } = data;

  const dispatch = useDispatch();

  // deleteCars for actually remove data from database
  // deleteCarReducer only delete from the redux data

  return (
    <Box
      display="flex"
      m="2rem"
      alignItems="center"
      justifyContent={'space-between'}
    >
      {/* Logo */}
      <Box flex={0.5}>
        <img src={logo} alt={name} />
      </Box>
      <button onClick={() => dispatch(deleteCarReducer(id))}>delete</button>

      {/* Name and Desc */}
      <Box flex={2}>
        {/* Name */}
        <Box>
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h6"
            fontWeight={'500'}
          >
            {name}
          </Typography>
        </Box>
        {/* Desc and Models */}
        <Box display="flex">
          <Typography
            color="#8C8C8C"
            fontFamily={`'Poppins', sans-serif;`}
            component="p"
            variant="body1"
            mr="1rem"
          >
            {desc.length > 15 ? `${desc.substring(0, 15)}...` : desc}
          </Typography>
          |
          <Typography
            ml="1rem"
            color={'#0F5EDD'}
            fontFamily={`'Poppins', sans-serif;`}
            component="p"
            variant="body1"
          >
            {models}
          </Typography>
        </Box>
      </Box>

      {/* Updated At */}
      <Box flex={1}>
        <Typography
          fontFamily={`'Poppins', sans-serif;`}
          component="p"
          variant="body1"
          gutterBottom
        >
          Last Update
        </Typography>
        <Typography
          fontFamily={`'Poppins', sans-serif;`}
          component="p"
          variant="body2"
          color="#8C8C8C"
        >
          {date}
        </Typography>
      </Box>

      {/* Status */}
      <Box flex={1}>
        {status ? (
          <Box display="flex" alignItems="center">
            <img src="/assets/icons/green.svg" alt="active" />
            <Typography mx="0.6rem" color={'#1F7B4D'}>
              Active
            </Typography>
          </Box>
        ) : (
          <Box display="flex" alignItems="center">
            <img src="/assets/icons/grey.svg" alt="active" />
            <Typography color="#5F5F5F" mx="0.6rem">
              Inactive
            </Typography>
          </Box>
        )}
      </Box>

      {/* View Details */}
      <Button variant="outlined" color="inherit">
        <Link className="link" to={`/cars/${id}`}>
          View Details
        </Link>
      </Button>
    </Box>
  );
};

export default CarBrand;

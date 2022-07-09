import React from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import ClearIcon from '@mui/icons-material/Clear';

import uniqid from 'uniqid';

import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { deleteCars, deleteCarReducer } from '../features/cars/cars';

const CarBrand = ({ data, setUpdated }) => {
  const { name, logo, desc, models, status, date, id } = data;

  const dispatch = useDispatch();

  const handleDelete = (id) => {
    // Keep the default data in database
    if (typeof id === 'number') {
      return dispatch(deleteCarReducer(id));
    } else {
      // Delete the new data in database
      setUpdated(uniqid);
      return dispatch(deleteCars(id));
    }
  };

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
      <Button
        size="small"
        sx={{ mr: '2rem' }}
        variant="outlined"
        color="inherit"
      >
        <Link className="link" to={`/cars/${id}`}>
          View Details
        </Link>
      </Button>

      {/* Delete Data */}
      <IconButton
        onClick={() => handleDelete(id)}
        variant="outlined"
        color="error"
      >
        <ClearIcon />
      </IconButton>
    </Box>
  );
};

export default CarBrand;

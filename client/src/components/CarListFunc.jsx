import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom';
import AddCars from './AddCars';

const CarListFunc = ({ setUpdated }) => {
  return (
    <Box
      display="flex"
      flexDirection={'row'}
      alignItems="center"
      justifyContent={'space-between'}
    >
      <Box display="flex">
        {/* Title */}
        <Box mr="4rem">
          <Link to="/" className="link">
            <Typography
              fontFamily={`'Poppins', sans-serif;`}
              component="h1"
              variant="h5"
              fontWeight={'bold'}
            >
              CAR BRANDS LIST
            </Typography>
          </Link>
        </Box>

        {/* View All */}
        <Box mr="4rem">
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h6"
            fontWeight={'500'}
          >
            View All
          </Typography>
        </Box>

        {/* Search */}
        <Box>
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h6"
          >
            Search Bar
          </Typography>
        </Box>
      </Box>

      {/* Button */}
      <Box>
        <AddCars setUpdated={setUpdated} />
      </Box>
    </Box>
  );
};

export default CarListFunc;

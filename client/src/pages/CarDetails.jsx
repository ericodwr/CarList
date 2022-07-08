import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useParams, Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { getDetailCar, clearCars } from '../features/cars/cars';

const CarDetails = () => {
  const [formData, setFormData] = useState({});

  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(dispatch(clearCars()));

  useEffect(() => {
    const fetching = async () => {
      const { payload } = await dispatch(getDetailCar(id));
      setFormData(payload);
    };
    fetching();
  }, [dispatch, id]);

  console.log(formData);

  if (!formData) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box>
      {/* Title */}
      <Box mr="4rem">
        <Link to={'/'} className="link">
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h5"
            fontWeight={'bold'}
          >
            &#60; BRAND DETAILS
          </Typography>
        </Link>
      </Box>

      {/* Details */}
      <Box
        justifyContent={'space-around'}
        display="flex"
        flexDirection="column"
        height="70vh"
      >
        {/* Logo */}
        <Box>
          <Typography
            mb="2rem"
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="body1"
            fontWeight={'bold'}
          >
            Brand Logo
          </Typography>
          <img src={formData?.logo} alt="cars" />
        </Box>

        {/* Brand */}
        <Box display="flex" flexDirection={'column'}>
          {/* Name */}
          <Box>
            <Typography
              fontFamily={`'Poppins', sans-serif;`}
              component="h1"
              variant="body1"
              fontWeight={'bold'}
            >
              Brand Details
            </Typography>
          </Box>

          <Box mt="1.5rem" display="flex">
            {/* Brand Name */}
            <Box flexGrow={0.2}>
              <Typography
                fontFamily={`'Poppins', sans-serif;`}
                component="h1"
                variant="body1"
                color={'#8C8C8C'}
              >
                Brand Name
              </Typography>
              <Box mt="1rem">
                <Typography
                  fontFamily={`'Poppins', sans-serif;`}
                  component="h1"
                  variant="body1"
                  fontWeight={'bold'}
                >
                  {formData.name}
                </Typography>
              </Box>
            </Box>

            {/* Status */}
            <Box ml="3rem">
              <Typography
                fontFamily={`'Poppins', sans-serif;`}
                component="h1"
                variant="body1"
                color={'#8C8C8C'}
                gutterBottom
              >
                Brand Status
              </Typography>
              <Box
                display={'flex'}
                bgcolor="#CEF7E2"
                p="0.5rem"
                borderRadius={'15px'}
                alignItems="center"
                justifyContent={'center'}
              >
                <Typography
                  fontFamily={`'Poppins', sans-serif;`}
                  component="h1"
                  variant="body1"
                >
                  {formData.status ? 'Active' : 'Inactive'}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Desc */}
        <Box>
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="body1"
            color={'#8C8C8C'}
          >
            Brand Description
          </Typography>
          <Box mt="1rem">
            <Typography
              fontFamily={`'Poppins', sans-serif;`}
              component="h1"
              variant="body1"
              fontWeight={'bold'}
            >
              {formData.desc}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Button */}
      <Button variant="contained" color="primary">
        Edit Information
      </Button>
    </Box>
  );
};

export default CarDetails;

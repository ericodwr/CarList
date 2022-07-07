import React, { useEffect, useState } from 'react';

import _ from 'lodash';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useHistory } from 'react-router-dom';

import { fetchStream } from '../actions';
import { connect } from 'react-redux';

import FormCar from '../components/FormCar';

const CarDetails = (props) => {
  useEffect(() => {
    props.fetchStream(props.match.params.id);
  }, []);

  const history = useHistory();

  return (
    <Box>
      {/* Title */}
      <Box mr="4rem">
        <Button
          variant="outlined"
          onClick={() => {
            history.push('/');
          }}
          sx={{ color: 'black', border: 'none' }}
        >
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h5"
            fontWeight={'bold'}
          >
            &#60; BRAND DETAILS
          </Typography>
        </Button>
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
          <img src={props?.streams?.logo} alt="cars" />
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

          <Box display="flex">
            <Box>
              <Typography
                fontFamily={`'Poppins', sans-serif;`}
                component="h1"
                variant="body1"
                color={'#8C8C8C'}
              >
                Brand Name
              </Typography>
              <TextField
                id="outlined-basic"
                value={props?.streams?.name}
                variant="outlined"
              />
            </Box>

            {/* Status */}
            <Box ml="3rem">
              <Typography
                fontFamily={`'Poppins', sans-serif;`}
                component="h1"
                variant="body1"
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
                  {props?.streams?.status ? 'Active' : 'Inactive'}
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
          >
            Brand Description
          </Typography>
          <TextField
            id="outlined-basic"
            sx={{ width: '500px' }}
            value={props?.streams?.desc}
            variant="outlined"
          />
        </Box>
      </Box>

      {/* Button */}
      <Button variant="contained" color="primary">
        Edit Information
      </Button>
    </Box>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { streams: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, {
  fetchStream,
})(CarDetails);

import React, { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import { useParams, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { getDetailCar, updateCars } from '../features/cars/cars';

import SnackBars from '../components/SnackBars';

const CarEdit = () => {
  const [formData, setFormData] = useState({});
  const [open, setOpen] = useState(false);

  const { detailCar } = useSelector((state) => state.cars);

  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetching = async () => {
      await dispatch(getDetailCar(id));
    };
    fetching();
  }, [dispatch, id]);

  useEffect(() => {
    setFormData(detailCar);
  }, [detailCar]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    dispatch(updateCars(formData));
    setOpen(true);
    e.preventDefault();
  };

  if (!formData) {
    return <h1>Loading...</h1>;
  }

  return (
    <Box>
      {/* Title */}
      <Box mr="4rem">
        <Link to={`/cars/${id}`} className="link">
          <Typography
            fontFamily={`'Poppins', sans-serif;`}
            component="h1"
            variant="h5"
            fontWeight={'bold'}
          >
            &#60; EDIT BRAND DETAILS
          </Typography>
        </Link>
      </Box>

      {/* Details */}
      <Box
        justifyContent={'space-around'}
        display="flex"
        flexDirection="column"
        height="70vh"
        component={'form'}
        onSubmit={handleSubmit}
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
                <TextField
                  required
                  id="outlined-required"
                  value={formData.name ? formData.name : ''}
                  name="name"
                  onChange={handleChange}
                />
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
                alignItems="center"
                justifyContent={'center'}
              >
                {/* Error causes controlled / uncontrolled but still works */}
                <FormControl fullWidth>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    name="status"
                    value={formData?.status ? formData.status : ''}
                    onChange={handleChange}
                  >
                    <MenuItem value={true}>Active</MenuItem>
                    <MenuItem value={false}>Inactive</MenuItem>
                  </Select>
                </FormControl>
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
            <TextField
              required
              multiline
              rows={4}
              sx={{
                width: '80vh',
              }}
              id="outlined-required"
              value={formData.desc}
              name="desc"
              onChange={handleChange}
            />
          </Box>
        </Box>
        <Box>
          {/* Button */}
          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </Box>
      </Box>
      <SnackBars
        open={open}
        setOpen={setOpen}
        text={'Save Success!'}
        severity="success"
      />
    </Box>
  );
};

export default CarEdit;

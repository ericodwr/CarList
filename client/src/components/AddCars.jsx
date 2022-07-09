import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { styled, Box } from '@mui/system';
import Button from '@mui/material/Button';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import ModalUnstyled from '@mui/base/ModalUnstyled';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import uniqid from 'uniqid';

import CloseIcon from '@mui/icons-material/Close';

import { useDispatch } from 'react-redux';
import { addCars } from '../features/cars/cars';
import SnackBars from './SnackBars';

const BackdropUnstyled = React.forwardRef((props, ref) => {
  const { open, className, ...other } = props;
  return (
    <div
      className={clsx({ 'MuiBackdrop-open': open }, className)}
      ref={ref}
      {...other}
    />
  );
});

BackdropUnstyled.propTypes = {
  className: PropTypes.string.isRequired,
  open: PropTypes.bool,
};

const Modal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled(BackdropUnstyled)`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

export default function AddCars({ setUpdated }) {
  const [open, setOpen] = React.useState(false);

  const [openSnack, setOpenSnack] = useState(false);

  const update = uniqid();

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    image: 'default',
    name: '',
    date: '',
    models: '1203 models',
    status: true,
    desc: '',
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(addCars(formData));
    setFormData({
      image: 'default',
      name: '',
      models: '1203 models',
      status: true,
      desc: '',
    });
    handleClose();

    setOpenSnack(true);
    setUpdated(update);
    console.log('Success');
  };

  return (
    <div>
      <Button variant="contained" color="primary" onClick={handleOpen}>
        + Add Brands
      </Button>
      <Modal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        components={{ Backdrop }}
      >
        <Fade in={open} timeout={300}>
          <Box
            display="flex"
            flexDirection={'column'}
            justifyContent="space-between"
            width="110vh"
            height="90vh"
            bgcolor={'white'}
          >
            {/* Title */}
            <Box
              display="flex"
              flexDirection={'row'}
              justifyContent="space-between"
              alignItems="center"
              padding="1rem 2rem"
              sx={{
                backgroundColor: '#FAFAFA',
              }}
            >
              {/* Title Text */}
              <Box>
                <Typography
                  fontFamily={`'Poppins', sans-serif;`}
                  component="h1"
                  fontWeight={'bold'}
                  variant="h6"
                >
                  Add Car Brand
                </Typography>
                <Typography>Setup new car brand</Typography>
              </Box>

              {/* Close Button */}
              <Box>
                <IconButton size="large" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>

            {/* Form Cars */}
            <form
              onSubmit={handleSubmit}
              style={{
                padding: '2rem 2rem',
              }}
            >
              <Box position={'relative'}>
                {/* Brand Logo */}
                <Box>
                  <Box mb="2rem">
                    <Typography
                      fontFamily={`'Poppins', sans-serif;`}
                      component="h1"
                      fontWeight={'bold'}
                      variant="h6"
                    >
                      Brand Logo
                    </Typography>
                  </Box>
                  <input type="file" />
                </Box>

                {/* Brand Details */}
                <Box my="3rem">
                  {/* Title */}
                  <Typography
                    fontFamily={`'Poppins', sans-serif;`}
                    component="h1"
                    variant="h6"
                    fontWeight={'bold'}
                    mb="1rem"
                  >
                    Brand Details
                  </Typography>

                  {/* Name and Status */}
                  <Box display="flex">
                    {/* Name */}
                    <Box mr="3rem">
                      <Typography
                        fontFamily={`'Poppins', sans-serif;`}
                        component="h1"
                        variant="h6"
                        color={'#8C8C8C'}
                      >
                        Brand Name
                      </Typography>
                      <TextField
                        required
                        id="outlined-required"
                        label="Input Name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        sx={{
                          width: '40vh',
                        }}
                      />
                    </Box>

                    {/* Status */}
                    <Box>
                      <Typography
                        fontFamily={`'Poppins', sans-serif;`}
                        component="h1"
                        variant="h6"
                        color={'#8C8C8C'}
                      >
                        Brand Status
                      </Typography>
                      <FormControl fullWidth>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          name="status"
                          value={formData.status}
                          onChange={handleChange}
                        >
                          <MenuItem value={true}>Active</MenuItem>
                          <MenuItem value={false}>Inactive</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </Box>

                  {/* Desc */}
                  <Box mt="1rem">
                    <Typography
                      fontFamily={`'Poppins', sans-serif;`}
                      component="h1"
                      variant="h6"
                      color={'#8C8C8C'}
                    >
                      Brand Description
                    </Typography>
                    <Box>
                      <TextField
                        required
                        id="outlined-required"
                        label="Input Desc"
                        fullWidth
                        value={formData.desc}
                        name="desc"
                        onChange={handleChange}
                        multiline
                        rows={4}
                      />
                    </Box>
                  </Box>
                </Box>

                <Box color={'white'}>yow</Box>
                {/* Button */}
                <Box
                  sx={{
                    position: 'absolute',
                    bottom: '0%',
                    right: '0%',
                  }}
                >
                  {/* Cancel */}
                  <Button
                    onClick={handleClose}
                    variant="outlined"
                    color="inherit"
                    sx={{
                      mr: '2rem',
                    }}
                  >
                    Cancel
                  </Button>

                  {/* Submit */}
                  <Button type="submit" variant="contained" color="primary">
                    Create Brand
                  </Button>
                </Box>
              </Box>
            </form>
          </Box>
        </Fade>
      </Modal>
      <SnackBars
        open={openSnack}
        setOpen={setOpenSnack}
        text={'Success Adding New Car!'}
        severity="success"
      />
    </div>
  );
}

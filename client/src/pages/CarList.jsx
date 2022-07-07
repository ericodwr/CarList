import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import CarListFunc from '../components/CarListFunc';
import { connect } from 'react-redux';
import { fetchStreams } from '../actions';

import CarBrand from '../components/CarBrand';

const CarList = (props) => {
  useEffect(() => {
    props.fetchStreams();
  }, []);

  return (
    <Box>
      <CarListFunc />

      {props.streams.map((car) => (
        <CarBrand data={car} key={car.id} />
      ))}
    </Box>
  );
};

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
  };
};

export default connect(mapStateToProps, {
  fetchStreams,
})(CarList);

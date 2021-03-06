import {
  CREATE_STREAM,
  EDIT_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
} from './types';
import streams from '../api/cars';
import history from '../history';

export const createStream = (formValues) => async (dispatch, getState) => {
  const { userId } = getState().auth;
  const response = await streams.post('/streams', { ...formValues, userId });

  dispatch({
    type: CREATE_STREAM,
    payload: response.data,
  });
  history.push('/');
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get('/cars');

  dispatch({
    type: FETCH_STREAMS,
    payload: response.data,
  });
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`/cars/${id}`);

  dispatch({
    type: FETCH_STREAM,
    payload: response.data,
  });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`/streams/${id}`, formValues);

  dispatch({
    type: EDIT_STREAM,
    payload: response.data,
  });
  history.push('/');
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({
    type: DELETE_STREAM,
    payload: id,
  });
  history.push('/');
};

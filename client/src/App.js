import React from 'react';

import SideBar from './components/SideBar';

// import Box from '@mui/material/Box';

import CarList from './pages/CarList';
import Error from './pages/Error';

// import { useDispatch } from 'react-redux';
// import { getCars } from './features/cars/cars';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetails from './pages/CarDetails';

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getCars());
  // }, [dispatch]);

  return (
    <div>
      <SideBar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </SideBar>
    </div>
  );
};

export default App;

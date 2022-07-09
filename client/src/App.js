import React from 'react';

import SideBar from './components/SideBar';

// import Box from '@mui/material/Box';

import CarList from './pages/CarList';
import Error from './pages/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetails from './pages/CarDetails';

const App = () => {
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

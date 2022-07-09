import React from 'react';

import SideBar from './components/SideBar';

// import Box from '@mui/material/Box';

import CarList from './pages/CarList';
import Error from './pages/Error';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CarDetails from './pages/CarDetails';
import CarEdit from './pages/CarEdit';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SideBar>
          <Routes>
            <Route path="/" element={<CarList />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/cars/:id/edit" element={<CarEdit />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </SideBar>
      </BrowserRouter>
    </div>
  );
};

export default App;

import React, { useEffect } from 'react';

import SideBar from './components/SideBar';

import Box from '@mui/material/Box';

import CarList from './pages/CarList';
import Error from './pages/Error';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CarDetails from './pages/CarDetails';

const App = () => {
  return (
    <div>
      <SideBar>
        <Router>
          <Switch>
            <Route path="/" exact component={CarList} />
            <Route path="/cars/:id" exact component={CarDetails} />
            <Route path="*" component={Error} />
          </Switch>
        </Router>
      </SideBar>
    </div>
  );
};

export default App;

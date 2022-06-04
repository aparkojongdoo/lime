import React from 'react';
import { Route, Router } from 'react-router-dom';
import App from '../App';

const Routes = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Using" element={<Using />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routes;

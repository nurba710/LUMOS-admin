import React from 'react';
import { Route, Routes } from 'react-router-dom';
// local

const AppRouter = () => {
  return (
    <Routes>
      <Route path={'/'} element={<h1>HI</h1>} />
    </Routes>
  );
};

export default AppRouter;

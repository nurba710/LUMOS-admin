import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';


export const App = () => {

  return (
  <div className="App">
    <GlobalStyle/>
    <AppRouter/>
  </div>
  );

};
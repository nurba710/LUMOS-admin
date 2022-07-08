import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';
import Button from "../components/Button/Button";

export const App = () => {
  return (
  <div className="App">
    <GlobalStyle/>
    <AppRouter/>
    <Button onClick={() => console.log('123')} name='Click'/>
  </div>
  );
};

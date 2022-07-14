import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';
import Input from "../components/Input/Input";

export const App = () => {
  return (
  <div className="App">
    <GlobalStyle/>
    <AppRouter/>
    <Input placeholder='Name' type='text' onChange={()=> console.log(123)} value=''/>
  </div>
  );
};

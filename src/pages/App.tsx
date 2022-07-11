import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';
import Button from "../components/Button/Button";
import Input from "../components/Input/Input";

export const App = () => {
  return (
  <div className="App">
    <GlobalStyle/>
    <AppRouter/>
    <Button onClick={() => console.log('123')} name='Click'/>
    <br/>
    <Input type='text' placeholder='Name'/>
    <br/>
    <Input type='password' placeholder='Lastname'/>
  </div>
  );
};

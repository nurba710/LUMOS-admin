import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';
import CollaboratorsPage from "../components/CollaboratorsPage/CollaboratorsPage";


export const App = () => {

    return (
        <div className="App">
            <CollaboratorsPage/>
            <GlobalStyle/>
            <AppRouter/>
        </div>
    );
};

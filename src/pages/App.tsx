import React from 'react';
import GlobalStyle from '../globalStyle';
import AppRouter from '../router/AppRouter';
import TodoList from "../components/TodoList";
import Counter from "../components/Counter";

export const App = () => {

    return (
        <div className="App">
            <Counter/>
            <TodoList/>
            <GlobalStyle/>
            <AppRouter/>
        </div>
    );
};

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// local
import { App } from './pages/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./storeToolkit";
import {Provider} from "react-redux";
import {Global} from "./Style";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <Global/>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

reportWebVitals();

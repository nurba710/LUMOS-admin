import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
// local
import {App} from './pages/App';
import reportWebVitals from './reportWebVitals';
import {store} from "./storeToolkit/index";
import {Provider} from "react-redux";


ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>
    </React.StrictMode>
    ,
    document.getElementById('root')
);

reportWebVitals();

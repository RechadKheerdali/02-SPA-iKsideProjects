// import 'react-app-polyfill/ie11'; 
// import 'normalize.css';
// import './CSS/oikGrid.css';
// import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

/*iK using React-Redux */
import kStore1 from './Redux-Store/kStore.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={kStore1}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
); /*END ReactDOM.render() */

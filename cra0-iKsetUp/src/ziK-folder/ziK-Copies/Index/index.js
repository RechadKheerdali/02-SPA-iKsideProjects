import 'react-app-polyfill/ie11'; 
import 'normalize.css';
import './CSS/oikGrid.css';
import './index.css';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

import reportWebVitals from './reportWebVitals';

/*To listen to any unhandled promise rejections (no catch handler?)
+\ you probably remove it afterwards if you think you do not need it. */
window.addEventListener('unhandledrejection', function(event) {
	console.warn(event.promise);
	console.warn(event.reason);
});


/*iK React with not redux store */
/*IK you could set up react context api if needed */
ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
); /*END ReactDOM.render() */

/*iK using React-Redux */
// import kStore1 from './Redux-State/Redux-Store/kStore.js';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={kStore1}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
); /*END ReactDOM.render() */


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
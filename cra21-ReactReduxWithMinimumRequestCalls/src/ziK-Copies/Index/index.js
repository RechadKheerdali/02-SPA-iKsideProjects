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

import * as serviceWorker from './serviceWorker';


/*iK React with not redux store */
/*IK you could set up react context api if needed */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*iK using React-Redux */
// import kStore1 from './Redux-State/Redux-Store/kStore.js';

//ReactDOM.render(
//  <React.StrictMode>
//    <Provider store={kStore1}>
//      <App />
//    </Provider>
//  </React.StrictMode>,
//  document.getElementById('root')
//);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

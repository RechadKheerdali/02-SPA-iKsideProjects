import 'react-app-polyfill/ie11'; 
import 'normalize.css';
// import './CSS/oikGrid.css';
// import './index.css';
import App from './App/App';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
// import axios from 'axios';

import * as serviceWorker from './serviceWorker';


/*IKCOMEBACK AND INCLUDE REACT-REDUX WHEN YOU LEARN HOW TO DO IT PROPERLY */
// import kStore1 from './Redux-State/Redux-Store/kStore.js';


/*IK you could set up react context api or redux context api if you wanted to. */
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





/*ik to do: */
/* creating search bar / onChange for search text / img list wihh be structured with css grid / .clientHeight / .addEventListener('load', iKcallback) /
+\ class component 1 will have search bar / asynchronous codes / 
+\ functional component 2 will have ul tag which will be the grid container
  +\ will loop through the li tag
+\ class component 3 will be li tag / will also contain img 
  +\ .addEventListener('load', iKcallback)
  +\ create iKspan state.
  +\ create css grid-row-end
+\ functional component 4 will be img for the li tag.
  +\ simple img codes

*/
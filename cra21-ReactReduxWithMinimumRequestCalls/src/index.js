import 'react-app-polyfill/ie11';
import 'normalize.css';
import './CSS/oikGrid.css';
import './index.css';
// import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';

// import * as serviceWorker from './serviceWorker';

import KpostTitle from './KpostTitle.js';

/*iK using React-Redux */
import kStore1 from './kStore.js';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={kStore1}>
      <KpostTitle />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
); /*END ReactDOM.render() */


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

/* index / App / KpostTitle / KauthorName / iKactionCreators / iKreducer / kStore
+\ https://jsonplaceholder.typicode.com/posts
+\ https://jsonplaceholder.typicode.com/users/1
+\
 */
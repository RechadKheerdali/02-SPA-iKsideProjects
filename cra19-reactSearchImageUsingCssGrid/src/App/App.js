import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
// import axios from 'axios';

import KerrorPage1 from '../ziK-Tools/kError-pages/KerrorPage1.js';
import KhomePage from '../kHomePage/KhomePage.js';

const App = props => {
  // console.log( props );

  /*iK add more <Route> for path pages if needed */
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={KhomePage} />
        <Route component={KerrorPage1} />
      </Switch>
    </BrowserRouter>
  ); /*END return */
}; /*END App */


// App.propTypes = {
// 	kProps1: PropTypes.number,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END App.propTypes */

// App.defaultProps = {
// 	kProps1: 23,
// 	kProps2: ["iKdefaultValue2"]
// }; /*END App.defaultProps */


export default App;
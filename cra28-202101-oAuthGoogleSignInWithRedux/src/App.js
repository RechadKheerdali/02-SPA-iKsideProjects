// import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Switch, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

import KgoogleSignInButton from './components/KgoogleSignInButton.js';

const App = props => {
  // console.log( props );

  return (
    <div>
      <KgoogleSignInButton />
    </div>
  ); /*END return */
}; /*END App component*/


// const mapStateToProps = (iKstateP, iKownPropsP) => {
//   return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
//   return {
//	   iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
//   };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (App);


export default App;
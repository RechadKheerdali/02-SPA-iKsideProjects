// import './Kroot.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider, connect, ReactReduxContext } from 'react-redux';
import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
// import Kroot from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

import kAllReducers from './reducers/index.js';

/**/
/*IK FOR JEST AND REACT TESTING LIBRARY WITH REDUX.
+\ Put the <Kroot> component onto the index.js file too.
+\ you then put import <Kroot> onto the test files you need the redux state.
+\ you could probably put other context provider if need be. */

const Kroot = ( {children, initialState = {} }) => {
    /*iK If you are using applyMiddleware()  */
    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })  || compose; /*1+*/
    /*iK If you are not using applyMiddleware() */
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({ trace: true }) /*2+*/

    const kStore1 = createStore(
        kAllReducers,
        initialState,
        composeEnhancers(
            applyMiddleware(ReduxThunk)
        )
    ); /*END kStore1 */

    /*1+ ensure you install redux devtool for you to use its features. 
    2+ replace composeEnhancer() in kStore1() with this code if you are not using applyMiddleware() s*/

    // console.log( props );

    return (
        <Provider store={kStore1}>
            {children}
        </Provider>
    ); /*END return */
}; /*END Kroot component */


// const mapStateToProps = (iKstateP, iKownPropsP) => {
//   return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
//   return {
//	   iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
//   };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (Kroot);


// Kroot.propTypes = {
// 	kProps1: PropTypes.string.isRequired,
// 	kProps2: PropTypes.func
// }; /*END Kroot.propTypes */

// Kroot.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: () => ["iKdefaultValue2"]
// }; /*END Kroot.defaultProps */


export default Kroot;
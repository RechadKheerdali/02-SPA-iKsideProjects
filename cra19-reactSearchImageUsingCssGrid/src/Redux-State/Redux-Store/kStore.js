// import PropTypes from 'prop-types';
import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import kReducer1 from '../Redux-Reducers/kReducer1.js';

/**/
/*
*/

const kAllReducers = combineReducers({
    kReducer1
});


const kStore1 = createStore(
    kReducer1,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() /*1+*/
);

/*1+ ensure you install redux devtool for you to use its features. */

export default kStore1;
//import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import { BrowserRouter, Route } from 'react-router-dom'; 
//import { createStore, applyMiddleware, compose } from 'redux';
//import { Provider, connect, ReactReduxContext } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
//import axios from 'axios';

import { kActionType1 } from '../Redux-ActionTypes/kActionType.js';

/**/
/*
*/

const kActionCreator1 = kPayloadP1 => ({
    type: kActionType1,
    kPayload: kPayloadP1
}); /*END kActionCreator1 */

const kActionCreator1 = kPayloadP1 => {
	return async (iKdispatchP, iKgetState) => {
		iKdispatchP({
			type: kActionType1,
			kPayload: kPayloadP1
		});
	};
}; /*END kActionCreator1 */

export default kActionCreator1;
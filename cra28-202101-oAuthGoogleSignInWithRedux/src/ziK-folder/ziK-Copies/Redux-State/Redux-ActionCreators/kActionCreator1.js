//import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import { BrowserRouter, Route } from 'react-router-dom'; 
//import { createStore, applyMiddleware, compose } from 'redux';
//import { Provider, connect, ReactReduxContext } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
//import axios from 'axios';
//import DOMPurify from 'dompurify';

import { kActionType1 } from '../Redux-ActionTypes/kActionType.js';

/**/
/*
*/

const kActionCreator1 = kPayloadP => ({
    type: kActionType1,
    kPayload: kPayloadP
}); /*END kActionCreator1 */

const kActionCreator1 = kPayloadP => {
	return async (iKdispatchP, iKgetStateP) => {
		iKdispatchP({
			type: kActionType1,
			kPayload: kPayloadP
		});
	}; /*END return async function */
}; /*END kActionCreator1 */

export default kActionCreator1;
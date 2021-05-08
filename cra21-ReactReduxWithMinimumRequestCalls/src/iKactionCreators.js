//import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import { BrowserRouter, Route } from 'react-router-dom'; 
//import { createStore, applyMiddleware, compose } from 'redux';
//import { Provider, connect, ReactReduxContext } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
import axios from 'axios';

// import { kActionType1 } from '../Redux-ActionTypes/kActionType.js';

/**/
/*
+\ https://jsonplaceholder.typicode.com/posts
+\ https://jsonplaceholder.typicode.com/users/1
*/

export const iKpostTitleActionCreator = () => {
	return async iKdispatchP => {
		const iKpostTitleResponse = await axios.get( "https://jsonplaceholder.typicode.com/posts" );

		iKdispatchP({
			type: "POST_TITLE",
			kPayload: iKpostTitleResponse.data
		});
	}; /*END return async function */
}; /*END iKpostTitleActionCreator */


export const iKauthorNameActionCreator = iKuserIdP => {
	return async iKdispatchP => {
		const iKauthorNameResponse = await axios.get( "https://jsonplaceholder.typicode.com/users/" + iKuserIdP );

		iKdispatchP({
			type: "AUTHOR_NAME",
			kPayload: iKauthorNameResponse.data
		});
	}; /*END return async function */
}; /*END iKauthorNameActionCreator */


export const iKdispatchBothPostTitle_AuthorNameActionCreator = () => {
	return async (iKdispatchP, iKgetStateP) => {
		await iKdispatchP( iKpostTitleActionCreator() );

		const iKauthorNamesArray = iKgetStateP().iKpostTitleReducer.map( iKpostObjectP => iKpostObjectP.userId );

		const iKauthorNameSetObject = new Set( iKauthorNamesArray );

		for ( let iKuserId of iKauthorNameSetObject.values() ) {
			iKdispatchP( iKauthorNameActionCreator(iKuserId) );
		};
	}; /*END return async function */
}; /*END iKdispatchBothPostTitle_AuthorNameActionCreator */


// const kActionCreator1 = kPayloadP1 => ({
//     type: kActionType1,
//     kPayload: kPayloadP1
// }); /*END kActionCreator1 */

// const kActionCreator1 = kPayloadP1 => {
// 	return async (iKdispatchP, iKgetStateP) => {
// 		iKdispatchP({
// 			type: kActionType1,
// 			kPayload: kPayloadP1
// 		});
// 	}; /*END return async function */
// }; /*END kActionCreator1 */

// export default kActionCreator1;
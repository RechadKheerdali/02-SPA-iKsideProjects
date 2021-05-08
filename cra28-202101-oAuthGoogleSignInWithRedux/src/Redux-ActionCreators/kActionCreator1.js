//import React from 'react';
//import ReactDOM from 'react-dom';
//import PropTypes from 'prop-types';
//import { BrowserRouter, Route } from 'react-router-dom'; 
//import { createStore, applyMiddleware, compose } from 'redux';
//import { Provider, connect, ReactReduxContext } from 'react-redux';
//import ReduxThunk from 'redux-thunk';
//import axios from 'axios';
//import DOMPurify from 'dompurify';

import { 
	iKgetTheCurrentGoogleSignInStatus_ACT,
	iKattachListenerForGoogleSignInStatusOntoComponent_ACT,
	iKsigningInToGoogle_ACT,
	iKsigningOutOfGoogle_ACT
} from '../Redux-ActionTypes/kActionType.js';


/*function (non AC) to gain object window.gapi.auth2.getAuthInstance()
+\ this function collects the iKgoogleAuth2Instance object and the other AC can use this object to do their specific task
+\ we have to pass the AC (that needs the iKgoogleAuth2Instance object) as callback in this function argument because we cannot store or use iKgoogleAuth2Instance object outside this function, as it takes too long to load the auth2 library and the other AC creator will get iKgoogleAuth2Instance object as undefined. I tried almost every other way to make it work but only this function has been successful, even the onClick will not work too.
+\ the downside to this function I can think of is that we need to keep recalling and registrating to gapi with our clientId project number
+\ I could have place this function on a different file as it is not a AC */
const iKloadGoogleAuth2InstanceObject = iKactionCreatorCallbackP => {
	window.gapi.load('client:auth2', () => {
		window.gapi.client.init({
			clientId: '478722968109-4tnv95algrocvbc2ktbo9bai1iskpn5u.apps.googleusercontent.com',
			scope: 'email'
		})
			.then(() => {
				const iKgoogleAuth2Instance = window.gapi.auth2.getAuthInstance();

				iKactionCreatorCallbackP( iKgoogleAuth2Instance );
			});
	}); /*END window.gapi.load() */
}; /*END iKloadGoogleAuth2InstanceObject */


/*AC to get the current sign in status for fold page. 
+\ AC that controls the iKgoogleSignInStatus reducer value */
export const iKgetTheCurrentGoogleSignInStatus_AC = () => {
	return async (iKdispatchP, iKgetStateP) => {
		iKloadGoogleAuth2InstanceObject( iKgoogleAuth2InstanceP => {
			/*collects the sign in status for fold page */
			iKdispatchP({
				type: iKgetTheCurrentGoogleSignInStatus_ACT,
				kPayload: {
					iKgoogleSignInStatus_DISPATCH: iKgoogleAuth2InstanceP.isSignedIn.get(),

					iKgoogleUserClientId_DISPATCH: iKgoogleAuth2InstanceP.currentUser.get().getId() 
						? iKgoogleAuth2InstanceP.currentUser.get().getId() 
						: null,

					iKgoogleUserEmail_DISPATCH: iKgoogleAuth2InstanceP.currentUser.get().getBasicProfile() 
						? iKgoogleAuth2InstanceP.currentUser.get().getBasicProfile().getEmail() 
						: null
				}
			}); /*END iKdispatchP */
		}) /*END iKloadGoogleAuth2InstanceObject */
	}; /*END return async function */
}; /*END iKgetTheCurrentGoogleSignInStatus_AC */


/*AC to place a event listener .isSignedIn.listen() onto the component for any future changes to the sign in status. 
+\ AC that controls the iKgoogleSignInStatus reducer value */
export const iKattachListenerForGoogleSignInStatusOntoComponent_AC = () => {
	return async (iKdispatchP, iKgetStateP) => {
		iKloadGoogleAuth2InstanceObject( iKgoogleAuth2InstanceP => {
			/*attach listener to component to record any changes in sign in status */
			iKgoogleAuth2InstanceP.isSignedIn.listen( iKsignInBooleanP => {
				iKdispatchP({
					type: iKattachListenerForGoogleSignInStatusOntoComponent_ACT,
					kPayload: {
						iKgoogleSignInStatus_DISPATCH: iKsignInBooleanP,

						iKgoogleUserClientId_DISPATCH: iKsignInBooleanP 
							? iKgoogleAuth2InstanceP.currentUser.get().getId() 
							: null,

						iKgoogleUserEmail_DISPATCH: iKsignInBooleanP 
							? iKgoogleAuth2InstanceP.currentUser.get().getBasicProfile().getEmail() 
							: null
					}
				}); /*END iKdispatchP */
			}); /*END iKgoogleAuth2InstanceP.isSignedIn.listen() */
		}) /*END iKloadGoogleAuth2InstanceObject */
	}; /*END return async function */
}; /*END iKattachListenerForGoogleSignInStatusOntoComponent_AC */


/*AC user clicks on the sign in button & we store the client id number and email onto redux store */
export const iKsigningInToGoogle_AC = () => {
	return async (iKdispatchP, iKgetStateP) => {
		iKloadGoogleAuth2InstanceObject( iKgoogleAuth2InstanceP => {
			iKgoogleAuth2InstanceP.signIn()
				.then(() => {
					iKdispatchP({
						type: iKsigningInToGoogle_ACT,
						kPayload: {
							iKgoogleUserClientId_DISPATCH: iKgoogleAuth2InstanceP.currentUser.get().getId(),
							iKgoogleUserEmail_DISPATCH: iKgoogleAuth2InstanceP.currentUser.get().getBasicProfile().getEmail()
						}
					});
				});
		}); /*END iKloadGoogleAuth2InstanceObject() */
	}; /*END return async function */
}; /*END iKsigningInToGoogle_AC */


/*AC user clicks on the sign out button & redux store will reset to null */
export const iKsigningOutOfGoogle_AC = () => {
	return async (iKdispatchP, iKgetStateP) => {
		iKloadGoogleAuth2InstanceObject( iKgoogleAuth2InstanceP => {
			iKgoogleAuth2InstanceP.signOut()
				.then(() => {
					iKdispatchP({
						type: iKsigningOutOfGoogle_ACT
					});
				});
		}); /*END iKloadGoogleAuth2InstanceObject() */
	}; /*END return async function */
}; /*END iKsigningOutOfGoogle_AC */



// const kActionCreator1 = kPayloadP => ({
//     type: kActionType1,
//     kPayload: kPayloadP
// }); /*END kActionCreator1 */

// const kActionCreator1 = kPayloadP => {
// 	return async (iKdispatchP, iKgetStateP) => {
// 		iKdispatchP({
// 			type: kActionType1,
// 			kPayload: kPayloadP
// 		});
// 	}; /*END return async function */
// }; /*END kActionCreator1 */
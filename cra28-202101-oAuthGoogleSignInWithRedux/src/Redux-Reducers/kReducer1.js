import { 
	iKgetTheCurrentGoogleSignInStatus_ACT,
	iKattachListenerForGoogleSignInStatusOntoComponent_ACT,
	iKsigningInToGoogle_ACT,
	iKsigningOutOfGoogle_ACT
} from '../Redux-ActionTypes/kActionType.js';
/**/

const IKINITIALSTATE = {
	iKgoogleSignInStatus: null,
	iKgoogleUserClientId: null,
	iKgoogleUserEmail: null
};

export const iKgoogleUserObject_REDUCER = (kStateP = IKINITIALSTATE, kActionP) => {
	switch (kActionP.type) {
		case iKgetTheCurrentGoogleSignInStatus_ACT:
			return {
				...kStateP,
				iKgoogleSignInStatus: kActionP.kPayload.iKgoogleSignInStatus_DISPATCH,
				iKgoogleUserClientId: kActionP.kPayload.iKgoogleUserClientId_DISPATCH,
				iKgoogleUserEmail: kActionP.kPayload.iKgoogleUserEmail_DISPATCH
			};

		case iKattachListenerForGoogleSignInStatusOntoComponent_ACT:
			return {
				...kStateP,
				iKgoogleSignInStatus: kActionP.kPayload.iKgoogleSignInStatus_DISPATCH,
				iKgoogleUserClientId: kActionP.kPayload.iKgoogleUserClientId_DISPATCH,
				iKgoogleUserEmail: kActionP.kPayload.iKgoogleUserEmail_DISPATCH
			};

		case iKsigningInToGoogle_ACT:
			return {
				...kStateP,
				iKgoogleUserClientId: kActionP.kPayload.iKgoogleUserClientId_DISPATCH,
				iKgoogleUserEmail: kActionP.kPayload.iKgoogleUserEmail_DISPATCH
			};

		case iKsigningOutOfGoogle_ACT:
			return {
				...kStateP,
				iKgoogleUserClientId: null,
				iKgoogleUserEmail: null
			};

		default:
			return kStateP;
	}; /*END switch */
}; /*END iKgoogleUserObject_REDUCER */



// const kIntialState = 20200327;

// const kReducer1 = (kStateP = kIntialState, kActionP) => {
//     switch (kActionP.type) {
//         case kActionType.kActionType1:
//             return kActionP.kPayload + 12;

//         default:
//             return kStateP;
//     }; /*END switch */
// }; /*END kReducer1 */

// export default kReducer1;
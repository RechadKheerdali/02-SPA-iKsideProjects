// import * as kActionType from '../Redux-ActionTypes/kActionType.js';

/**/
/*
*/

export const iKpostTitleReducer = (kStateP = [], kActionP) => {
    switch (kActionP.type) {
        case "POST_TITLE":
            return [...kStateP, ...kActionP.kPayload];

        default:
            return kStateP;
    }; /*END switch */
}; /*END iKpostTitleReducer */


export const iKauthorNameReducer = (kStateP = [], kActionP) => {
    switch (kActionP.type) {
        case "AUTHOR_NAME":
            return [...kStateP, kActionP.kPayload];

        default:
            return kStateP;
    }; /*END switch */
}; /*END iKauthorNameReducer */



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
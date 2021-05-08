import * as kActionType from '../Redux-ActionTypes/kActionType.js';

/**/
/*
*/

const kIntialState = 20200327;

const kReducer1 = (kStateP = kIntialState, kActionP) => {
    switch (kActionP.type) {
        case kActionType.kActionType1:
            return kActionP.kPayload + 12;

        default:
            return kStateP;
    }; /*END switch */
}; /*END kReducer1 */

export default kReducer1;
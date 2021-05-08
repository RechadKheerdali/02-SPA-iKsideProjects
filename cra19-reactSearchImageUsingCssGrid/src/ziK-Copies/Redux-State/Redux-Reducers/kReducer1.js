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
            return kIntialState;
    }; /*END switch */
};

export default kReducer1;
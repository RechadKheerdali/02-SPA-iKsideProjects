// import './KgoogleSignInButton.css';
import React, { useEffect } from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

import {
    iKgetTheCurrentGoogleSignInStatus_AC,
    iKattachListenerForGoogleSignInStatusOntoComponent_AC,
    iKsigningInToGoogle_AC,
    iKsigningOutOfGoogle_AC
} from '../Redux-ActionCreators/kActionCreator1.js';
/**/

const KgoogleSignInButton = ({
    iKgoogleSignInStatus_REDUCERvALUE,
    iKgetTheCurrentGoogleSignInStatus_ACD,
    iKattachListenerForGoogleSignInStatusOntoComponent_ACD,
    iKsigningInToGoogle_ACD,
    iKsigningOutOfGoogle_ACD }) => {

    useEffect(
        () => {
            iKgetTheCurrentGoogleSignInStatus_ACD();
            iKattachListenerForGoogleSignInStatusOntoComponent_ACD();
        },
        [
            iKgetTheCurrentGoogleSignInStatus_ACD,
            iKattachListenerForGoogleSignInStatusOntoComponent_ACD
        ]
    ); /*END useEffect() */

    const iKgoogleSignInButtonElement = () => {
        if (iKgoogleSignInStatus_REDUCERvALUE === null) {
            return <button>...loading</button>;
        }
        else if (iKgoogleSignInStatus_REDUCERvALUE === false) {
            return <button onClick={iKsigningInToGoogle_ACD} >Sign in with Google</button>;
        }
        else if (iKgoogleSignInStatus_REDUCERvALUE === true) {
            return <button onClick={iKsigningOutOfGoogle_ACD} >Signed out of Google</button>;
        };
    }; /*END iKgoogleSignInButtonElement */

    return (
        <div>{ iKgoogleSignInButtonElement() }</div>
    ); /*END return */
}; /*END KgoogleSignInButton component */


const mapStateToProps = (iKstateP, iKownPropsP) => {
    return {
        iKgoogleSignInStatus_REDUCERvALUE: iKstateP.iKgoogleUserObject_REDUCER.iKgoogleSignInStatus
    };
}; /*END mapStateToProps */


const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
    return {
        iKgetTheCurrentGoogleSignInStatus_ACD: () => iKdispatchP( iKgetTheCurrentGoogleSignInStatus_AC() ),

        iKattachListenerForGoogleSignInStatusOntoComponent_ACD: () => iKdispatchP( iKattachListenerForGoogleSignInStatusOntoComponent_AC() ),

        iKsigningInToGoogle_ACD: () => iKdispatchP( iKsigningInToGoogle_AC() ),

        iKsigningOutOfGoogle_ACD: () => iKdispatchP( iKsigningOutOfGoogle_AC() )
    };
}; /*END mapDispatchToProps */


export default connect( mapStateToProps, mapDispatchToProps )( KgoogleSignInButton );
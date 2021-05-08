// import './KauthorName.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

import { iKauthorNameActionCreator } from './iKactionCreators.js';

/**/
/*
*/

const KauthorName = props => {
    const { iKAuthorNameObject } = props;

    if( !iKAuthorNameObject ) {
        return null;
    };

    return (
        <code>{ iKAuthorNameObject.name } </code>
    ); /*END return */
}; /*END KauthorName */


const mapStateToProps = (iKstateP, iKownPropsP) => {
    const { iKauthorNameReducer } = iKstateP;

    const iKmatchingCorrectUserObject = iKauthorNameReducer.find( iKuserObject => iKuserObject.id === iKownPropsP.iKuserId );

  return { iKAuthorNameObject: iKmatchingCorrectUserObject };
}; /*END mapStateToProps */


export default connect(mapStateToProps) (KauthorName);


/*iK not necessary to keep if you rather use it within the class component */
// KauthorName.propTypes = {
// 	kProps1: PropTypes.string,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END KauthorName.propTypes */

// KauthorName.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END KauthorName.defaultProps */


// export default KauthorName;
// import './KcomponentDidCatch1.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';

import KerrorPage1 from './KerrorPage1.js';

/**/
/*
*/

class KcomponentDidCatch1 extends React.Component {
	static propTypes = {
        KpageProps: PropTypes.string.isRequired
    }; /*END propTypes */

    static defaultProps = {
        KpageProps: "iK default value, meaning unidentified and you did not set KpageProps props on the component "
    }; /*END defaultProps */

    state = {
        iKhasError: false,
        KpageProps: this.props.KpageProps
    }; /*END state */

    componentDidCatch(iKerrorP, iKinfoP) {
        this.setState( {
            iKhasError: true,
            KpageProps: this.props.KpageProps
        } );
        console.log(iKerrorP);
        console.log(iKinfoP);
	};

    render () {
        if (this.state.iKhasError) {
            return <KerrorPage1 KoccuredIn={this.state.KpageProps} />;
        }
        else {
            return this.props.children;
        };
    }; /*END render */
}; /*END KcomponentDidCatch1 */


/*iK not necessary to keep if you rather use it within the class component */
// KcomponentDidCatch1.propTypes = {
// 	kProps1: PropTypes.string,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END KcomponentDidCatch1.propTypes */

// KcomponentDidCatch1.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END KcomponentDidCatch1.defaultProps */


export default KcomponentDidCatch1;
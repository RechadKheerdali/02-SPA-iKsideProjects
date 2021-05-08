// import './IkHoc1.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import DOMPurify from 'dompurify';
import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

const IkHoc1 = IkChildComponent => {
    // console.log( iKchildComponentProps );

    const IkComposedComponent1 = props => {
        /*iKcomplex version */
        return (
            <KcomponentDidCatch1 KpageProps="IkHoc1" >
                <IkChildComponent {...props} />
            </KcomponentDidCatch1>
        ); /*END return */

        /*iKsimple version */
        // return (
        //     <div>
        //         <IkChildComponent {...props} />
        //     </div>
        // ); /*END return */
    }; /*END IkComposedComponent1 */

    return IkComposedComponent1;
}; /*END IkHoc1 component */


// const mapStateToProps = (iKstateP, iKownPropsP) => {
//   return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
//   return {
//	   iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
//   };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (IkHoc1);


IkHoc1.propTypes = {
	kProps1: PropTypes.string.isRequired,
	kProps2: PropTypes.func
}; /*END IkHoc1.propTypes */

IkHoc1.defaultProps = {
	kProps1: "iKdefaultValue1",
	kProps2: () => ["iKdefaultValue2"]
}; /*END IkHoc1.defaultProps */


export default IkHoc1;
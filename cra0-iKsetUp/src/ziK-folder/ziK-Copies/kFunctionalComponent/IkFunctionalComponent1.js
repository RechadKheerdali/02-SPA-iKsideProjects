// import './IkFunctionalComponent1.css';
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

const IkFunctionalComponent1 = props => {
    console.log( props );

    /*iKcomplex version */
    return (
        <KcomponentDidCatch1 KpageProps="IkFunctionalComponent1" >
            <div id="background_image">
                <div id="body_wrapper">
                    <header id="main_header" role="banner">

                        iKheader working

                    </header>
                    <main id="main_page" role="main">

                        iKmain working

                    </main>
                    <footer id="main_footer" role="contentinfo">

                        iKfooter working

                    </footer>
                </div>
            </div>
        </KcomponentDidCatch1>
    ); /*END return */

    /*iKsimple version */
    // return (
    //     <div>
    //         iK IkFunctionComponent1 working 
    //     </div>
    // ); /*END return */

}; /*END IkFunctionalComponent1 component */


// const mapStateToProps = (iKstateP, iKownPropsP) => {
//   return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
//   return {
//	   iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
//   };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (IkFunctionalComponent1);


IkFunctionalComponent1.propTypes = {
	kProps1: PropTypes.string.isRequired,
	kProps2: PropTypes.func
}; /*END IkFunctionalComponent1.propTypes */

IkFunctionalComponent1.defaultProps = {
	kProps1: "iKdefaultValue1",
	kProps2: () => ["iKdefaultValue2"]
}; /*END IkFunctionalComponent1.defaultProps */


export default IkFunctionalComponent1;
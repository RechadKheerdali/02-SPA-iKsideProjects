import React, {useEffect} from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
// import { Provider, connect, ReactReduxContext } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
import axios from 'axios';
// import DOMPurify from 'dompurify';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*IK PLAY AROUND WITH AJAX METHODS AS YOU WILL SEE THE EFFECTS IT WILL HAVE ON THE '../../iKrestApiServer/db.json' FILE */
const KhomePage = props => {
    useEffect(() => {
        axios.post('http://localhost:3001/iKobjectDb', {iKpost: "iKposst"} )
            .then(iKresponse => {
                console.log( iKresponse.data )
            })
            .catch(iKerror => {
                console.log( "iKerror" )
            });
    }); /*END useEffect() */

    return (
        <div>KhomePage is working</div>
    ); /*END return */
}; /*END KhomePage component */


// const mapStateToProps = (iKstateP, iKownPropsP) => {
//   return {};
// }; /*END mapStateToProps */

// const mapDispatchToProps = (iKdispatchP, iKownPropsP) => {
//   return {
//	   iKactionCreatorDispatch1: () => iKdispatchP( iKactionCreator1() ) 
//   };
// }; /*END mapDispatchToProps */

// export default connect(mapStateToProps, mapDispatchToProps) (KhomePage);


// KhomePage.propTypes = {
// 	kProps1: PropTypes.string.isRequired,
// 	kProps2: PropTypes.func
// }; /*END KhomePage.propTypes */

// KhomePage.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: () => ["iKdefaultValue2"]
// }; /*END KhomePage.defaultProps */


export default KhomePage;
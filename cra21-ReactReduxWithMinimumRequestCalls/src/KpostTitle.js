// import './KpostTitle.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore, applyMiddleware, compose } from 'redux';
import { connect } from 'react-redux';
// import ReduxThunk from 'redux-thunk';
// import axios from 'axios';
// import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

import { iKdispatchBothPostTitle_AuthorNameActionCreator } from './iKactionCreators.js';
import KauthorName from './KauthorName.js';

/**/
/*
*/

class KpostTitle extends React.Component {
    componentDidMount() {
        this.props.iKdispatchBothPostTitle_AuthorNameDispatch();
    };

    iKloopList = () => {
        const { iKpostTitleReducerProps } = this.props;

        return iKpostTitleReducerProps.map(iKpostObject => {
            return (
                <div key={ iKpostObject.id }>
                    <KauthorName iKuserId={ iKpostObject.userId } />
                    <strong>{ iKpostObject.title }</strong>
                    <br />
                </div>
            );
        }); /*END return .map() */
    }; /*END iKloopList */

    render() {
        return (
            <article>{ this.iKloopList() }</article>
        ); /*END return */
    }; /*END render */
}; /*END KpostTitle component */


const mapStateToProps = iKstateP => {
    return { iKpostTitleReducerProps: iKstateP.iKpostTitleReducer };
}; /*END mapStateToProps */


const mapDispatchToProps = iKdispatchP => {
    return {
        iKdispatchBothPostTitle_AuthorNameDispatch: () => iKdispatchP( iKdispatchBothPostTitle_AuthorNameActionCreator() )
    };
}; /*END mapDispatchToProps */


export default connect(mapStateToProps, mapDispatchToProps) (KpostTitle);


/*iK not necessary to keep if you rather use it within the class component */
// KpostTitle.propTypes = {
// 	kProps1: PropTypes.string,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END KpostTitle.propTypes */

// KpostTitle.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END KpostTitle.defaultProps */


// export default KpostTitle;
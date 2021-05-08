import './IkImageContainer.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
// import axios from 'axios';
import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';
import IkImageList from './IkImageList.js';

/**/
/*
*/

const IkImageContainer = props => {

    // console.log(props.iKGetImageArrayProps);

    const iKloopList = props.iKGetImageArrayProps.map(iKitem => {
        return (
            <IkImageList
                key={iKitem.id}
                iKsrc={iKitem.urls}
                iKalt={iKitem.alt_description}
            />
        );
    }); /*END iKloopList*/

    return (
        <KcomponentDidCatch1 KpageProps="IkImageContainer" >
            <ul id="iKulGridContainer">
                {iKloopList}
            </ul>
        </KcomponentDidCatch1>
    ); /*END return */
}; /*END IkImageContainer */


IkImageContainer.propTypes = {
	iKGetImageArrayProps: PropTypes.array.isRequired
}; /*END IkImageContainer.propTypes */

IkImageContainer.defaultProps = {
	iKGetImageArrayProps: []
}; /*END IkImageContainer.defaultProps */


export default IkImageContainer;
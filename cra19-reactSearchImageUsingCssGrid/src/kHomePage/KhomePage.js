// import './KhomePage.css';
import React from 'react';
// import ReactDOM from 'react-dom';
// import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
import axios from 'axios';
import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';
import IkImageContainer from './IkImageContainer.js';

/**/
/*
*/

class KhomePage extends React.Component {
    state = {
        iKonControlSearchText: "",
        iKGetImageArray: []
    }; /*END state */

    iKonInputChange = event => {
        this.setState({ iKonControlSearchText: event.target.value });
    }; /*END iKonInputChange */

    iKonFormSubmit = event => {
        event.preventDefault();
        this.iKajax( this.state.iKonControlSearchText );
        // this.setState({ iKonControlSearchText: "" }); /*set this back afterwards */
    }; /*END iKonFormSubmit */

    componentDidMount() {
        this.iKajax();
    }; /*END componentDidMount */

    iKajax = async (iKsearchTextP) => {
        const iKimageData = await axios.get('https://api.unsplash.com/search/photos',{
            headers: {
                Authorization: 'Client-ID 0c670cc365c01f42300c8cc45814a6fcb52ca4ac1eb11bd1f57bd244272554d3'
            },
            params: {
                query: iKsearchTextP || 'cheetah'
            }
        }); /*END iKimageData */

        this.setState({ iKGetImageArray: iKimageData.data.results });
    }; /*END iKajax */

    render () {
        return (
            <KcomponentDidCatch1 KpageProps="KhomePage" >
                <form onSubmit={this.iKonFormSubmit} >
                    <input
                        type="search"
                        onChange={this.iKonInputChange}
                        value={this.state.iKonControlSearchText}
                    />
                </form>

                <IkImageContainer
                    iKGetImageArrayProps={ this.state.iKGetImageArray }
                />
            </KcomponentDidCatch1>
        ); /*END return */
    }; /*END render */
}; /*END KhomePage */


/*iK not necessary to keep if you rather use it within the class component */
// KhomePage.propTypes = {
// 	kProps1: PropTypes.string,
// 	kProps2: PropTypes.arrayOf( PropTypes.string )
// }; /*END KhomePage.propTypes */

// KhomePage.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END KhomePage.defaultProps */


export default KhomePage;
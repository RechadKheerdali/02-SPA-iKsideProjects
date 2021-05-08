import './IkImageList.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter, Route } from 'react-router-dom'; 
// import { createStore } from 'redux';
// import { Provider, ReactReduxContext } from 'react-redux';
// import axios from 'axios';
import KcomponentDidCatch1 from '../ziK-Tools/kError-pages/KcomponentDidCatch.js';

/**/
/*
*/

class IkImageList extends React.Component {
    constructor (props) {
        super(props);
        
        this.state = {iKspanNumber: 0}
        
        this.iKimgElement = React.createRef();
    }; /*END constructor */

    // componentDidMount() {
        // console.log(this.iKimgElement.current.clientHeight);
        // this.setState({iKspanNumber: this.iKimgElement.current.clientHeight});

        // console.log(this.iKimgElement.current.clientHeight);
        // this.iKimgElement.current.clientHeight.addEventlistener("load", this.iKlistNode );
    // }; /*END componentDidMount */

    iKlistNode = async (event) => {
        const iKimageHeight = await this.iKimgElement.current.clientHeight;
        // console.log(iKimageHeight);

        const iKspanForEachImage = Math.ceil(iKimageHeight / 5) + 1;
        // console.log(iKspanForEachImage);
        // this.setState({iKspanNumber: this.iKimgElement.current.clientHeight});
        // await this.setState({iKspanNumber: this.iKimgElement.current.clientHeight});
        this.setState({iKspanNumber: iKspanForEachImage});
        // console.log(this.iKimgElement.current);
        console.log(this.state.iKspanNumber);
        // console.log(event);
    }; /*END iKlistNode */

    render () {
        // console.log(this.props);
        // console.log(this.state.iKspanNumber);
        // console.log(this.iKimgElement);

        return (
            <KcomponentDidCatch1 KpageProps="IkImageList" >
                <li
                    className="iKliGridItem"
                    onLoad={this.iKlistNode}
                    style={{gridRowEnd: `span ${this.state.iKspanNumber}`}}
                >
                    <img
                        src={this.props.iKsrc.regular}
                        alt={this.props.iKalt}
                        ref={this.iKimgElement}
                    />
                </li>
            </KcomponentDidCatch1>
        ); /*END return */
    }; /*END render */
}; /*END IkImageList */


/*iK not necessary to keep if you rather use it within the class component */
IkImageList.propTypes = {
	iKsrc: PropTypes.object,
	iKalt: PropTypes.string
}; /*END IkImageList.propTypes */

// IkImageList.defaultProps = {
// 	kProps1: "iKdefaultValue1",
// 	kProps2: ["iKdefaultValue2"]
// }; /*END IkImageList.defaultProps */


export default IkImageList;
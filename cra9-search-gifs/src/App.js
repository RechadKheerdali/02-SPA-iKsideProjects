import React from 'react';
import axios from 'axios';
import IkGifUl from './iKgifList/IkGifUl.js';
// import polyfill from 'es6-promise';

// polyfill();

class App extends React.Component {
	state = {
		iKgifs : [] /*1+*/
	};

  iKajax = (iKsearchString = "kratos") => {
    axios.get(`http://api.giphy.com/v1/gifs/search?q=${iKsearchString}&limit=3&api_key=dc6zaTOxFJmzC`) /*2+*/
		.then( iKresponseObjectP => iKresponseObjectP.data.data) /*3+*/
		.then( iKapiDataArrayP => this.setState({ iKgifs: iKapiDataArrayP}) ) /*4+*/
  }; /*END iKajax */

  componentDidMount() {
    this.iKajax();
  }; /*END componentDidMount */

	iKsubmit = event => {
    event.preventDefault();
    this.iKajax( this.iKuserSearchString.value );
    event.currentTarget.reset();
	}; /*END iKsubmit */

	render() {
		return [  /*5+*/
			<form onSubmit={this.iKsubmit} key="iKformKey">
				<input type="search" ref={ iKdomElement => this.iKuserSearchString = iKdomElement }/>
				<button type="submit">submit request</button>
			</form>,

      <IkGifUl iKdataArray={this.state.iKgifs} key="IkGifUlKey" />
		]; /*6+*/
	}; /*END render */
}; /*END App */

export default App;

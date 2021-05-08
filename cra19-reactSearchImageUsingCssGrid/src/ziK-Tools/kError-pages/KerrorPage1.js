import React from 'react';
import PropTypes from 'prop-types';

/**/
/*
*/

const KerrorPage1 = ({ KoccuredIn }) => <h1>KerrorPage1, iK something went wrong from component = {KoccuredIn}.js</h1>;


KerrorPage1.propTypes = {
	KoccuredIn: PropTypes.string.isRequired
}; /*END KerrorPage1.propTypes */

KerrorPage1.defaultProps = {
	KoccuredIn: "iK not from component exactly, but I suspect something to do with url, using the react router "
}; /*END KerrorPage1.defaultProps */


export default KerrorPage1;
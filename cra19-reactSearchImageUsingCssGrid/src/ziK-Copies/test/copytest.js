import React from 'react';
import { render } from '@testing-library/react';
import KcomponentName1 from './KcomponentName1.js';

/*Jest*/
/*In cra jest expect() is already imported, but you will need to import for other SPA */

describe('iKcomponentName1', () => {
    let i;

    beforeEach(function() {
    });

    afterEach(function() {
    });

    test('1+ test if react component element text rendered onto the page accordingly.', () => {
        const { getByText } = render(<KcomponentName1 />); /*1+*/
        const linkElement = getByText(/iKheader/i);
        expect(linkElement).toBeInTheDocument();
    }); /*END test 1+ */

    test('2+', () => {
    }); /*END test 2+ */

}); /* END describe() */


/*1+ Alternatively you do not have to use render() , you could use 'data-testid' attribute props on the component element to connect to the react element.
  +\ <button data-testid="button" type="submit" disabled>submit</button>  =eg.
*/
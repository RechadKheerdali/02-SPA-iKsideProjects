import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/*IK CURRENTLY PENDING/SKIPPED BECAUSE APP DOES NOT NEED TESTING FROM WHAT I CAN SEE. */

/*Jest*/
/*In cra jest expect() is already imported, but you will need to import for other SPA */

describe('App component', () => {
  // let i;

  // beforeEach(function() {
  // });

  // afterEach(function() {
  // });

  xtest('renders learn react link (iK rewrite test to do something if needed)', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test.skip('App iktest', () => {
    expect(true).toBe(true);
  })

  // test('2+', () => {
  // }); /*END test 2+ */

}); /* END describe() */
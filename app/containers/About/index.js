/*
 *
 * About
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class About extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

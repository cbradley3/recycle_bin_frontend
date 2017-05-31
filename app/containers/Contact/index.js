/*
 *
 * Contact
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Contact extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

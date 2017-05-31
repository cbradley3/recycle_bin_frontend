/*
 *
 * Account
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Account extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Account" meta={[ { name: 'description', content: 'Description of Account' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

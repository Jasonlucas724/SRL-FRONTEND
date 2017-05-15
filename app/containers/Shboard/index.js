/*
 *
 * Shboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Shboard extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Shboard" meta={[ { name: 'description', content: 'Description of Shboard' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

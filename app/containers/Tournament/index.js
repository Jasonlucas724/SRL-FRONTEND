/*
 *
 * Tournament
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class Tournament extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="Tournament" meta={[ { name: 'description', content: 'Description of Tournament' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

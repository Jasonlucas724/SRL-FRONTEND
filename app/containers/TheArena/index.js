/*
 *
 * TheArena
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class TheArena extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet title="TheArena" meta={[ { name: 'description', content: 'Description of TheArena' }]}/>

      //Remove this line and you can start writing your code here.
      </div>
    );
  }
}

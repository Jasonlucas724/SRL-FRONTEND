/*
 *
 * Dashboard
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Jumbotron} from 'react-bootstrap';

export default class Dashboard extends React.PureComponent {
  render() {
  const jumbotron={


  }
    return (
      <div>
        <Helmet title="Dashboard" meta={[ { name: 'description', content: 'Description of Dashboard' }]}/>
          <Jumbotron style={jumbotron}>
            <h1>Sumo Robot League</h1>
            <p>Please feel free to register with us and get all the updates.</p>
          </Jumbotron>
      </div>
    );
  }
}

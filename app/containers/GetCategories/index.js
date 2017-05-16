/*
 *
 * GetCategories
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';


export default class GetCategories extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      categories:[]
    }
  }

  render() {
    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>





      </div>


    );
  }
}

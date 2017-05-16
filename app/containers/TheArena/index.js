/*
 *
 * TheArena
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import Products from 'containers/Products';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/svg-icons/navigation/Menu';


export default class TheArena extends React.PureComponent {
  render() {
    const navBar={
      textDecoration:"0%",
      display:"flex",
      flexDirection:"row",
      width:"100%",
      height:"200px",
      justifyContent:"space-between",
      background:"url(https://wallpaperscraft.com/image/red_black_abstract_496_2560x1080.jpg)",
    }
    const columnTwo={
      display:"flex"



    }
    const logo={
      width:"300px",
      height:"200px",
      background:"url(http://i558.photobucket.com/albums/ss22/jasonlucas724/hack.sumo_.badge__zpsfzzr6hi4.png)",
      backgroundSize:"cover",
      marginRight:"300px"
    }
    const navLink={
      textDecoration:"0",
      display:"flex",
      flexDirection:"row",
      padding:"15px",
      alignSelf:"center",
      color:"#ffffff",
      fontSize:"18px",
      fontFamily:"Roboto, sans serif",
      marginTop:"150px",
    }
    return (
      <div>
        <Helmet title="TheArena" meta={[ { name: 'description', content: 'Description of TheArena' }]}/>

          <div>
            <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <div>
          <header style={navBar}>
            <div style={columnTwo}></div>
            <div style={logo}></div>
              <Link to="/TOURNAMENT" style={navLink}>TOURNAMENT</Link>
              <Link to="/HOME" style={navLink}>HOME</Link>
              <Link to="/ABOUT" style={navLink}>ABOUT</Link>
              <Link to="/THE ARENA" style={navLink}>THE ARENA</Link>
              <Link to="/PRODUCTS" style={navLink}>PRODUCTS</Link>
          </header>
          </div>
      </div>
        </div>
    );
  }
}

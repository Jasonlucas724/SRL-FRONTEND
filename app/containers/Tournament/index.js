/*
 *
 * Tournament
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

export default class Tournament extends React.PureComponent {
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
    const mainStyle={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      width:"1450",
      height:"650px",
      background:"url(https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/56216d60e4b07de840c4a752/1445031271323/LCPWSSumoRobot-25.jpg?format=1500w)",
      alignItems:"center",
      margin:"auto",



    }
    const boxOne={
      fontSize:"30px",
      fontFamily:"Roboto,sans serif",
      color:"#FF3B0F",
      padding:"25px",
      alignSelf:"flex-start"


    }
    const menuContainer={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      width:"500px"

    }
    return (
      <div>
        <Helmet title="Tournament" meta={[ { name: 'description', content: 'Description of Tournament' }]}/>

          <div>
            <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <div>
          <header style={navBar}>
            <div style={columnTwo}></div>
            <div style={logo}></div>
              <Link to="/TOURNAMENT" style={navLink}>TOURNAMENT</Link>
              <Link to="/HOME" style={navLink}>HOME</Link>
              <Link to="/ABOUT" style={navLink}>ABOUT</Link>
              <Link to="/THEARENA" style={navLink}>THE ARENA</Link>
              <Link to="/PRODUCTS" style={navLink}>PRODUCTS</Link>
          </header>
          </div>

          <main>
            <div>
            <div style={mainStyle}>
              <div style={boxOne}>SPRING TOURNAMENT, SATURDAY MAY 2017</div>
            </div>
            </div>
            <div>
              <fieldset style={menuContainer}>
                <legend>Contact Details</legend>
                <label>Email:<br />
                <input type="text" name="email" /></label><br />
                <label>Mobile:<br />
                <input type="text" name="mobile" /></label><br />
                <label>Telephone:<br />
                <input type="text" name="telephone" /></label>
                </fieldset>
              </div>
          </main>
      </div>
      </div>
    );
  }
}

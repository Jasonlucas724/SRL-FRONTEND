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
import FlatButton from 'material-ui/FlatButton';


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

    const columnThree={
      display:"flex",
      flexDirection:"row",
      justifycontent:"space-between",
      marginTop:"100px",
      alignSelf:"center",

    }
    const image={
      width:"300px",
      height:"300px",
      background:"url(https://theclubhou.se/wp-content/uploads/2017/04/theclubhouselogo-1.png)",
      backgroundSize:"cover",


    }
    const columnFour={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      width:"100%",
      height:"50px",
      color:"#000000",

    }
    const h1={
      alignSelf:"center",
      marginTop:"100px",
    }
    const columnFive={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"100%",
      height:"50px",


    }
    const imageTwo={
      width:"800px",
      height:"500px",
      backgroundSize:"cover",
      background:"url(http://geekmom.com/wp-content/uploads/2013/08/EV3GM-800x510.png)",
      marginTop:"50px"

    }
    const columnSix={
      display:"flex",
      flexDirection:"row",
      justifyContent:"center",
      width:"1000px",
      height:"50px",
      marginTop:"500px"


    }
    const imageThree={
      width:"900px",
      height:"500px",
      backgroundSize:"cover",
      background:"url(https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/57b4bbd7ebbd1a29c1223dc1/1471462416323/Screen+Shot+2016-08-17+at+3.31.44+PM.png?format=1000w)",
      marginTop:"50px"
    }
    const button={
      dipslay:"flex",
      flexDirection:"row",
      width:"100px",
      height:"50px",
      marginLeft:"50px",
      marginBottom:"500px"

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
          <main>

              <div style={columnFour}>
                <h1 style={h1}>K-12 MINI SUMO TOURNAMENT</h1>
              </div>
              <div style={columnFive}>
                <div style={imageTwo}>
              </div>
              <div style={columnSix}>
                <div style={imageThree}>
              </div>

              <div>
              <FlatButton style={button} label="Register" />
              </div>
              <div>



              </div>
            </div>


            </div>







          </main>
      </div>
        </div>
    );
  }
}

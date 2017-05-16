/*
 *
 * Products
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import {Link} from 'react-router';
import Header from 'components/Header';
import Main from 'components/Main';
import Footer from 'components/Footer';
import TextField from 'material-ui/TextField';
import Menu from 'material-ui/svg-icons/navigation/Menu';

export default class Products extends React.PureComponent {
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
    const boxes={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      alignItems:"center"

    }
    const boxOne={
      width:"400px",
      height:"350px",
      background:"url(https://pbs.twimg.com/media/CaDknK_UkAEG-H-.jpg)",
      marginTop:"100px",
      backgroundSize:"cover"

    }
    const textField={
     display:"flex",
     justifyContent:"space-around",
     flexDirection:"row",
     alignItems:"center"

    }
    const text={
     display:"flex",
     fontSize:"30px",
     fontFamily:"Roboto,sans serif",
     color:"#000000",


    }
    const boxTwo={
      width:"400px",
      height:"350px",
      marginTop:"100px",
      background:"url(https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/5627da63e4b04589290475a6/1445452393695/LCPWSSumoRobot-41.jpg?format=500w)",

    }




    const boxThree={
      width:"400px",
      height:"350px",
      marginTop:"100px",
      background:"url(https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/56cc7275e707ebc39cf29e30/1456239228975/LCPWSSumoRobot-83.jpg?format=300w)",
      backgroundSize:"cover"
    }

    const boxFour={
      width:"200px",
      height:"200px",
      background:"#000000",
      marginTop:"100px"
    }
    const boxFive={
      width:"200px",
      height:"200px",
      background:"#000000",
      marginTop:"100px"
    }
    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

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

          <div>
          <main style={boxes}>
            <div style={boxOne}></div>
            <div style={boxTwo}></div>
            <div style={boxThree}></div>

          </main>
        </div>
            <div>
            <div style={textField}>
              <Link style={text}>Battle Buddy</Link>
              <Link style={text}>Classroom Kit</Link>
              <Link style={text}>Teacher Training and Support</Link>
            </div>


            </div>





      </div>

    );
  }
}

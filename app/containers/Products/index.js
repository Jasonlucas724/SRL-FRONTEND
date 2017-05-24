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
    const section1={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-around",
      flexWrap:"wrap",
      alignItems:"center"




    }
    const box={
      width:"350px",
      height:"350px",
      justifyContent:"center",
      marginTop:"100px",
      backgroundSize:"cover",
      color:"#fffffff",
      alignItems:"center",

    }
    const image = {
      width:"350px",
      height:'auto'
    }
    const textField={
     display:"flex",
     justifyContent:"space-around",
     flexDirection:"row",
     alignItems:"center",
     color:"white"

    }
    const text={
     display:"flex",
     fontSize:"30px",
     fontFamily:"Roboto,sans serif",
     color:"#000000",

    }

    const footerContainer={
      display:"flex",
      flexDirection:"row",


    }



    return (
      <div>
        <Helmet title="Products" meta={[ { name: 'description', content: 'Description of Products' }]}/>

          <div>
          <header style={navBar}>
            <div style={columnTwo}></div>
            <div style={logo}></div>
              <Link to="/Home" style={navLink}>HOME</Link>
              <Link to="/Tournament" style={navLink}>TOURNAMENT</Link>
              <Link to="/ABOUT" style={navLink}>ABOUT</Link>
              <Link to="/THEARENA" style={navLink}>THE ARENA</Link>
              <Link to="/PRODUCTS" style={navLink}>PRODUCTS</Link>
          </header>
          </div>


          <main>
          <div style={section1}>
            <div style={box}>
              <img style={image} src="https://pbs.twimg.com/media/CaDknK_UkAEG-H-.jpg"/>
              <div style={textField}>
                <Link style={text}>Battle Buddy</Link>
              </div>
            </div>

            <div style={box}>
              <img style={image} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/56f55e9c7c65e43ded13e454/1458921152639/2016+Sumo++Spring+Poster_olv2.jpg?format=500w"/>
              <div style={textField}>
                <Link style={text}>Competition Ring Poster</Link>
              </div>
            </div>


            <div style={box}>
              <img style={image} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/56f56116e321402dcfe312d6/1458921753820/Screen+Shot+2016-03-25+at+11.57.30+AM.png?format=500w"/>
              <div style={textField}>
                <Link style={text}>Textbook</Link>
              </div>
            </div>

            <div style={box}>
              <img style={image} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/56cc7275e707ebc39cf29e30/1456239228975/LCPWSSumoRobot-83.jpg?format=300w"/>
              <div style={textField}>
                <Link style={text}>Teaching</Link>
              </div>
            </div>

            <div style={box}>
              <img style={image} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/5627d938e4b0913312611611/1445452095410/LCPWSSumoRobot-5.jpg?format=500w"/>
              <div style={textField}>
                <Link style={text}>Club Kit</Link>
              </div>
            </div>

            <div style={box}>
              <img style={image} src="https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/55f0874be4b0b791f20c7f3d/5627da63e4b04589290475a6/1445452393695/LCPWSSumoRobot-41.jpg?format=500w"/>
              <div style={textField}>
                <Link style={text}>Classroom kit</Link>
              </div>
            </div>
          </div>

        </main>


          <footer style={footerContainer}>
            <div style={textField}>© 2015, Jason Lucas. ALL RIGHTS RESERVED.</div>




          </footer>
        </div>














    );
  }
}

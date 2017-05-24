/*
 *
 * About
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

export default class About extends React.PureComponent {
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
    const main={
      display:"flex",
      flexDirection:"column",
      marginTop:"100px",
      alignItems:"center"

    }
    const banner={
      width:"400px",
      height:"500px",
      background:"url(https://static1.squarespace.com/static/55f05957e4b049cf1b1396b0/t/570bbec4d51cd42a2811fd08/1460387529539/)",
      backgroundSize:"cover"
    }
    const main2={
      display:"flex",
      flexDirection:"column",
      fontSize:"20px",
      marginTop:"100px",
      alignItems:"center",
      marginLeft:"50px"

    }
    const h1={
      fontSize:"30px"
    }
    const main3={
      display:"flex",
      flexDirection:"column",
      marginTop:"100px",
      alignItems:"center",


    }
    const banner3={
      width:"1000px",
      height:"500px",
      backgroundSize:"cover",
      fontSize:"30PX"
    }
    const footerContainer={
      display:"flex",
      flexDirection:"column",
      marginTop:"300px"

    }
    const textField={
      width:"100%",
      height:"100px",
      background:"url(https://s-media-cache-ak0.pinimg.com/originals/a8/c6/d5/a8c6d59f63c797441c7ea65611761d1e.jpg)",
    }
    return (
      <div>
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

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
            <div style={main}>
              <div style={banner}></div>
          </div>
          <div style={main2}>
            <div style={h1}>COMPETITION & CURRICULUM</div>
          </div>
          <div style={main3}>
            <div style={banner3}>Sumo Robot League is a scalable STEM education platform that offers an affordable competitive robotics curriculum for middle and high school students. Our program provides multiple hands on lessons that give students the opportunity to build electrical circuits, design and 3D print adaptive components, and code sensor-based autonomous response algorithms using the actual C++ programming language. In additiona, our kits are expandable to include exercises in mobile app development, machine learning, and the internet of things.

            The League has a Fall and Spring season coordinated with local school system schedules. Regional competitions are held at the end of each season in local communities. The championship tournament is held in Augusta, Georgia at the Greater Augusta Innovation Academy located in an 18,000 sq. foot historic schoolhouse built in 1802. HACK Augusta is the non-profit that manages Sumo Robot League as well as theClubhou.se, a makerspace and startup incubator. This short video done by one of our students   gives a glimpse into the scope of our program and what kids can do.</div>
          </div>


            </main>




            <footer style={footerContainer}>
              <div style={textField}>© 2015, Jason Lucas. ALL RIGHTS RESERVED.</div>



            </footer>


      </div>
    );
  }
}

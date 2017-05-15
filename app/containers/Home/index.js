/*
 *
 * Home
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





export default class Home extends React.PureComponent {



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
      const bannerStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",



      }
      const paragraphStyle={
        fontSize:"30px",
        fontFamily:"Roboto, sans serif",
        color:"#000000",
        width:"1000px",
        textAlign:"center",
        alignSelf:"center",
        marginTop:"100px"
      }
      const imageContainer={
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        width:"500px",
        height:"500px",
        alignItems:"center"


      }
      const image={
       display:"flex",
       width:"1000px",
       height:"500px",
       background:"url(http://www.roboticstrends.com/images/wide/sumo-robot-league.jpg)",
       backgroundSize:"cover",
       justifyContent:"center",
       marginLeft:"1350px",
       marginTop:"100px"



      }
      const footerContainer={
        display:"flex",
        flexDirection:"column",


      }
      const footer={
        width:"100%",
        height:"100px",
        background:"url(https://s-media-cache-ak0.pinimg.com/originals/a8/c6/d5/a8c6d59f63c797441c7ea65611761d1e.jpg)",
      }



    return (
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

      <main style={bannerStyle}>
        <div style={paragraphStyle}>We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done.
           Sumo Robot League has made it easier for us to adapt and adopt by providing training,
           curriculum, materials, and support.</div>

         dfw
         <div style={imageContainer}>
           <div style={image}></div>

         </div>
       </main>













      </div>
    );
  }
}

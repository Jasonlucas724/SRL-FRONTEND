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
import Menu from 'material-ui/Menu';





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
        marginTop:"50px"




      }
      const image={
       width:"1450px",
       height:"700px",
       background:"url(http://i558.photobucket.com/albums/ss22/jasonlucas724/main_zps2tvq0fox.png)",
       backgroundSize:"cover",
       justifyContent:"space-between",
       alignSelf:"center",
      }
      const footerContainer={
        display:"flex",
        flexDirection:"column",

      }
      const textField={
        width:"100%",
        height:"100px",
        background:"url(https://s-media-cache-ak0.pinimg.com/originals/a8/c6/d5/a8c6d59f63c797441c7ea65611761d1e.jpg)",
      }
      const div1={
      display:"flex",
      flexDirection:"column",
      width:"200px",
      height:"100%",
      color:"#000000",
      background:"black",
      marginTop:"100px",
      marginLeft:"40%",
      marginLeft:"45%"
      }
      const inputOne={
      display:"flex",
      height:"35px",
      color:"white",
      fontFamily:"Roboto, sans serif",
      textAlign:"center"
      }
      const div2={
      display:"flex",
      flexDirection:"column",
      justifyContent:"space-between",
      width:"200px",
      height:"40px",
      marginTop:"10px",
      marginLeft:"45%"
      }

      const inputTwo={
      display:"flex",
      height:"35px",
      color:"white",
      fontFamily:"Roboto",
      background:"black",
      fontFamily:"Roboto",
      textAlign:"center"
      }

      const textArea={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      border:"2px solid black",
      color:"black",
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
          <Link to="/THEARENA" style={navLink}>THE ARENA</Link>
          <Link to="/PRODUCTS" style={navLink}>PRODUCTS</Link>
      </header>
      </div>

      <div style={imageContainer}>
        <div style={image}></div>
      </div>
      <div style={div1}>
        <input style={inputOne}  type="text" placeholder="Username" />
      </div>
      <div style={div2}>
        <input style={inputTwo}  type="text" placeholder="Password" />
      </div>

      <main style={bannerStyle}>
        <div style={paragraphStyle}>We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done.
           Sumo Robot League has made it easier for us to adapt and adopt by providing training,
           curriculum, materials, and support.</div>




         <footer style={footerContainer}>
           <div style={textField}>© 2015, Jason Lucas. ALL RIGHTS RESERVED.</div>



         </footer>



       </main>













      </div>
    );
  }
}

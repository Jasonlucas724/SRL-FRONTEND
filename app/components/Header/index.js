/**
*
* Header
*
*/

import React from 'react';

class Header extends React.PureComponent {
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
    );
  }
}

export default Header;

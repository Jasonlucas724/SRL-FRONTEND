/**
*
* Main
*
*/

import React from 'react';

class Main extends React.PureComponent {
  render() {
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
     width:"2000px",
     height:"500px",
     background:"url(https://cdn.evbuc.com/eventlogos/89711219/sumomasklogotmjpg.jpg)",
     backgroundSize:"cover",
     justifyContent:"center",
     marginLeft:"1350px",
     marginTop:"100px",




    }
    return (
      <div>
        <main style={bannerStyle}>
          <div style={paragraphStyle}>We all recognize that preparing our students for the demands of this 21st century world requires us to engage students in learning that is collaborative, problem-based, and integrates technology. However, that’s much easier said than done.
             Sumo Robot League has made it easier for us to adapt and adopt by providing training,
             curriculum, materials, and support.</div>


           <div style={imageContainer}>
             <div style={image}></div>
           </div>



         </main>

      </div>
    );
  }
}

export default Main;

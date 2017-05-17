/*
 *
 * SignUp
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

export default class SignUp extends React.PureComponent {
  render() {
    const border={
      display:"flex",
      flexDirection:"column",
      width:"100%",
      height:"300px",
      border:"2px solid black",
      maxWidth:"1000px",
      margin:"0 auto",
      marginTop:"350px"
    }
    const logo={
      color:"black",
      justifyContent:"center",
      alignSelf:"center",
      fontSize:"30px"


    }
    const headerStyle={
      height:"40px",
      width:"100%",
      background:"red",


    }
    const inputStyle={
      display:"flex",
      flexDirection:"column",
      justifyContent:"center",
      fontFamily:"Roboto, sans serif",
      border:"solid 1px",
      alignItems:"center"
    }

    const signinBox={
      display:"flex",
      flexDirection:"column",
      width:"100%",


    }
    const signupBox={
      width:"100%",
      alignItems:"center"
    }
    const labelOne={
      fontFamily:"Roboto, sans serif"
    }
    const labelTwo={
      fontFamily:"Roboto, sans serif"
    }
    const labelThree={
      display:"flex",
      flexDirection:"row",
      fontFamily:"Roboto, sans serif",
      marginTop:"15px"
    }
    const inputStyle3={
      fontFamily:"Roboto, sans serif",
      border:"solid 1px",

    }

    return (
      <div>
        <Helmet title="SignUp" meta={[ { name: 'description', content: 'Description of SignUp' }]}/>

          <div style={border}>
            <div style={logo}>SIGN UP TO CREATE ACCOUNT</div>
            <div style={signupBox}></div>

            <div style={signinBox}>
              <div style={headerStyle}></div>
              <div>
                <label style={labelOne}>Username</label>
                <input style={inputStyle} type="text" placeholder="Username" />
              </div>
              <div>
                <label style={labelTwo}>Password</label>
                <input style={inputStyle} type="text" placeholder="Password" />
              </div>
              <div>
                <label style={labelThree}>Forgot Username Or Password</label>
                <input style={inputStyle3} type="text" placeholder="Password" />
              </div>
            </div>
          </div>
        </div>

    );
  }
}

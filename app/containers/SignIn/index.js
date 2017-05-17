/*
 *
 * SignIn
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import RaisedButton from 'material-ui/RaisedButton';

export default class SignIn extends React.PureComponent {

    constructor(props){
      super(props);
      this.state={
        username:""
        password:""
      }
    }
    component WillMount(){
      fetch("")
      .then(funtion(res){
        return res.json();
      })
      .then(function(json){
        this.setState({
          Products:json
        })
      }:bind(this))
    }
    StoreProducts=() =>{
      vardata = new FormData(;
      data.append("key", this.state.data);

      fetch("",{
        method:"post",
        body:data,
      })
      .then(function(res){
        return res.json();
      })
      then(function(json){

      })
    }
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

    const signInBox={
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
    const button={
      display:"flex",
      flexDirection:"row",
      marginLeft:"600px",
      width:"150px",
      height:"50px",
      background:"red",
      alignSelf:"center"


    }
    return (
      <div>
        <Helmet title="SignIn" meta={[ { name: 'description', content: 'Description of SignIn' }]}/>

          <div style={border}>
            <div style={logo}>SIGN INTO YOUR ACCOUNT</div>
            <div style={signInBox}></div>

            <div style={signInBox}>
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
              <RaisedButton style={button}>Sign In</RaisedButton>
            </div>
          </div>



      </div>
    );
  }
}

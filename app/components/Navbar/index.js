/**
*
* Navbar
*
*/

import React from 'react';
import {Link} from "react-router";
import Responsive from 'react-responsive';
import MenuIcon from "material-ui/svg-icons/navigation/menu";
import IconButton from 'material-ui/IconButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class Navbar extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen:false,
      token:sessionStorage.getItem("token"),
      user:JSON.parse(sessionStorage.getItem("user")),
      open: false,
      username:"",
      emailSignIn:"",
      passwordSignIn:"",
      emailSignUp:"",
      passwordSignUp:"",
    }
  }

  handleMenu = () => {
    if(this.state.menuOpen == false)
    {
      this.setState({
        menuOpen:true
      })
    }
    else if(this.state.menuOpen == true)
    {
      this.setState({
        menuOpen:false
      })
    }
  }

  showMenu = () => {

    const nav={
      display:"flex",
      flexDirection:"column",
      alignSelf:'center'
      }

    const linkStyle={
      textDecoration:"none",
      color:"#000000",
      fontSize:"2em",
      fontFamily:"Oswald",
      fontStyle:"light",
      fontWeight:"500",
      textAlign:"center"
      };

    if(this.state.menuOpen == true)
    {
      var dashLink = <Link style={linkStyle} to= "/Dashboard"> Dashboard </Link>;

      if(this.state.token === null){
        dashLink="";
      }
      else{
        if(this.state.user.roleID !== 1){
          dashLink="";
        }
      }
      return(
        <nav style={nav}>
          <Link style={linkStyle2} to= "/"> Home </Link>
          <Link style={linkStyle2} to= "/About"> About </Link>
          <Link style={linkStyle2} to= "/Shop"> Shop </Link>
          <Link style={linkStyle2} to= "/Contact"> Contact </Link>
          <span style={linkStyle2} onTouchTap={this.handleOpen}> Login </span>
          {dashLink}
        </nav>
      )
    }
  }


  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

handleUsername = (event) => {
  this.setState({
    username: event.target.value
  })
}
handleEmailSignUp = (event) => {
  this.setState({
    emailSignUp: event.target.value
  })
}
handlePasswordSignUp = (event) => {
  this.setState({
    passwordSignUp:event.target.value
  })
}

   storeSignUp = () => {

     var data = new FormData ();
     data.append("username",this.state.username)
     data.append("email", this.state.emailSignUp);
     data.append("password", this.state.passwordSignUp);

 fetch("",{
   method:"post",
   body:data
 })
 .then(function(response){
   return response.json();
 })
 .then(function(json){
   if(json.token !== false){
     this.setState({
       username:"",
       emailSignUp:"",
       passwordSignUp:"",
     })

     sessionStorage.setItem("token", json.token);
     fetch(""+json.token, {
       headers:{
         "Authorization":"Bearer "+json.token
       }
     })
     .then(function(response){
       return response.json();
     })
     .then(function(json){
       sessionStorage.setItem("user", JSON.stringify(json));
       alert("Success! You did it!");
     })

   }
   else if (json.token === false){
     alert("Invalid credentials");
   }
   else if (json.error){
     alert("You need to fill out all fields.");
   }
 }.bind(this))
}

handleEmailSignIn = (event) => {
  this.setState({
    emailSignIn: event.target.value
  })
}
handlePasswordSignIn = (event) => {
  this.setState({
    passwordSignIn:event.target.value
  })
}

    storeSignIn = () => {

      var data = new FormData ();
      data.append("email", this.state.emailSignIn);
      data.append("password", this.state.passwordSignIn);

    fetch("",{
    method:"post",
    body:data
    })
    .then(function(response){
    return response.json();
    })
    .then(function(json){
    if(json.token !== false){
      this.setState({
        emailSignIn:"",
        passwordSignIn:"",
      })

      sessionStorage.setItem("token", json.token);
      fetch(""+json.token, {
        headers:{
          "Authorization":"Bearer "+json.token
        }
      })
      .then(function(response){
        return response.json();
      })
      .then(function(json){
        sessionStorage.setItem("user", JSON.stringify(json));
        alert("Success! You did it!");
      })

    }
    else if (json.token === false){
      alert("Invalid credentials");
    }
    else if (json.error){
      alert("You need to fill out all fields.");
    }
  }.bind(this))
}

  render() {

    const navStyle={
      margin:"0",
      padding:"10px",
      width:"100%",
      fontSize:"2em",
      fontFamily:"Open Sans",
      fontStyle:"light",
      fontWeight:"400",
      borderTop:"2px solid #000000",
      borderBottom:"1px solid #000000",
      textAlign:"center",
       }

    const navStyle2={
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      width:"100%",
      height:"100px",
      alignItems:"center",
      textDecoration:"none",
      color:"rgba(245, 128, 34, 1.00)",
      fontSize:".90em",
      fontFamily:"Open Sans",
      fontStyle:"light",
      fontWeight:"400",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
    const headStyle={
      width:"100%",
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between"
    }
    const logoStyle={
      marginTop:"20px",
      height:"75px",
      width:"auto",
      marginRight:"75px",
    }
    const linkStyle2={
      display:"flex",
      flexDirection:"row",
      paddingRight:"30px",
      textDecoration:"none",
      color:"#ffffff",
      fontSize:"1em",
      fontFamily:"Oswald",
      fontStyle:"light",
      fontWeight:"500",
      textAlign:"right",
      textTransform:"uppercase",
      letterSpacing:"2px",
    }
      const divStyle2Mobile={
        width:"100%",
        height:"auto",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        position:"fixed",
        top:"0",
        left:"0",
        background:"rgba(245, 128, 34, 1.00)",
        zIndex:"99999"
      }

      const actions = [
        <FlatButton
          label="Cancel"
          primary={true}
          onTouchTap={this.handleClose}
        />,
        <FlatButton
          label="Submit"
          primary={true}
          keyboardFocused={true}
          onTouchTap={this.handleClose}
        />,
      ];

      const dialogStyle={
        width:"300px",
        height:"300px",
        background:"#ffffff",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1em",
        fontFamily:"Oswald",
        fontStyle:"light",
        fontWeight:"500",
        textAlign:"center",
      }

      const dialogStyle2={
        width:"300px",
        height:"300px",
        background:"#ffffff",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1em",
        fontFamily:"Oswald",
        fontStyle:"light",
        fontWeight:"500",
        textAlign:"center",
        paddingTop:"10px",
        paddingBottom:"10px",
      }

      const inputBox={
        width:"280px",
        height:"40px",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"left",
        marginTop:"8px",
        marginBottom:"21px",
        background:"#ffffff"
      }

      const inputBox2={
        width:"280px",
        height:"40px",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"left",
        marginTop:"4px",
        paddingTop:"4px",
        paddingBottom:"4px",
        background:"#ffffff"
      }

      const buttonBox={
        width:"280px",
        height:"40px",
        color:"#ffffff",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"center",
        marginTop:"17px",
        background:"rgba(245, 128, 34, 1.00)"
      }

      const buttonBox2={
        width:"280px",
        height:"40px",
        color:"#ffffff",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"center",
        marginTop:"3px",
        background:"rgba(245, 128, 34, 1.00)"
      }

      const contactLeft={
        width:"100%",
        display:"flex",
        flexDirection:"column",
        paddingLeft:"3%",
        paddingTop:"5%"
      }

      const contactRight={
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"right",
        paddingLeft:"10%",
        paddingTop:"5%"
      }

      const textStyle={
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1.2em",
        fontFamily:"Open Sans",
        fontWeight:"300",
        textAlign:"left",
      }

      const wrapper={
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
      }


      var dashLink = <Link style={linkStyle2} to="/Dashboard">Dashboard</Link>;

      if(this.state.token === null){
        dashLink="";
      }
      else{
        if(this.state.user.roleID !== 1){
          dashLink="";
        }
      }

    return (
      <div>
        <Responsive minDeviceWidth={1024}>
        <div style={divStyle2Mobile}>
          <div style={{maxWidth:"800px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",}}>
            <div style={headStyle}>
              <img style={logoStyle} src="http://h4z.it/Image/bd3fd9_bin_logoW_sm.png"/>
              <nav style={navStyle2}>
                <Link style={linkStyle2} to= "/"> Home </Link>
                <Link style={linkStyle2} to= "/About"> About </Link>
                <Link style={linkStyle2} to= "/Shop"> Shop </Link>
                <Link style={linkStyle2} to= "/Contact"> Contact </Link>
                <span style={linkStyle2} onTouchTap={this.handleOpen}> Login </span>
                {dashLink}
              </nav>
            </div>
          </div>
        </div>
        </Responsive>

        <Dialog
          title="Login - Sign In / Sign Up"
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}>
          <div style={wrapper}>
            <div style={dialogStyle}>
              <div style={contactLeft}>
                <label style={textStyle}>Sign In<input onChange = {this.handleEmailSignIn} type="email" style={inputBox} value={this.state.emailSignIn} placeholder="Email Address"/> </label>
              </div>

              <div style={contactLeft}>
                <label style={textStyle}><input onChange = {this.handlePasswordSignIn} style={inputBox} type="password" value={this.state.passwordSignIn} placeholder="password"/> </label>
              </div>

              <div style={contactLeft}>
                <input onTouchTap = {this.storeSignIn} type="submit" value="Sign In" placeholder="Sign In" style={buttonBox}/>
              </div>
            </div>

            <div style={dialogStyle}>
              <div style={contactRight}>
                <label style={textStyle}>Sign Up<input onChange = {this.handleUsername} type="username" style={inputBox2} value={this.state.username} placeholder="Username"/> </label>
              </div>

              <div style={contactRight}>
                <label style={textStyle}><input onChange = {this.handleEmailSignUp} type="email" style={inputBox2} value={this.state.emailSignUp} placeholder="Email Address"/> </label>
              </div>

              <div style={contactRight}>
                <label style={textStyle}><input onChange = {this.handlePasswordSignUp} style={inputBox2} type="password" value={this.state.passwordSignUp} placeholder="password"/> </label>
              </div>

              <div style={contactRight}>
                <input onTouchTap = {this.storeSignUp} type="submit" value="Sign Up" placeholder="Sign Up" style={buttonBox2}/>
              </div>
            </div>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default Navbar;

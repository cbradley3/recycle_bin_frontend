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
      email:"",
      password:"",
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
handleEmail = (event) => {
  this.setState({
    email: event.target.value
  })
}
handlePassword = (event) => {
  this.setState({
    password:event.target.value
  })
}

   storeSignUp = () => {

     var data = new FormData ();
     data.append("username",this.state.username)
     data.append("email", this.state.email);
     data.append("password", this.state.password);

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
       email:"",
       password:"",
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

    storeSignIn = () => {

      var data = new FormData ();
      data.append("email", this.state.email);
      data.append("password", this.state.password);

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
        email:"",
        password:"",
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

      const inputBox={
        width:"280px",
        height:"40px",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"left",
        marginTop:"10px",
        marginBottom:"20px",
        background:"#ffffff"
      }

      const buttonBox={
        width:"280px",
        height:"40px",
        color:"#ffffff",
        fontSize:"1em",
        fontFamily:"Open Sans",
        fontWeight:"400",
        textAlign:"left",
        marginTop:"20px",
        marginBottom:"30px",
        background:"rgba(245, 128, 34, 1.00)"

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
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          
        >

        </Dialog>
      </div>
    );
  }
}

export default Navbar;

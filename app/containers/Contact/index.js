/*
 *
 * Contact
 *
 */

 import React from 'react';
 import Helmet from 'react-helmet';
 import Responsive from 'react-responsive';
 import {Link} from "react-router";
 import FlatButton from "material-ui/FlatButton";
 import NavBar from 'components/NavBar';
 import { Carousel } from 'react-bootstrap';
 import { Thumbnail } from 'react-bootstrap';
 import { Grid } from 'react-bootstrap';
 import { Row } from 'react-bootstrap';
 import { Col } from 'react-bootstrap';
 import FaFacebook from 'react-icons/lib/fa/facebook';
 import FaTwitter from 'react-icons/lib/fa/twitter';
 import FaYoutubePlay from 'react-icons/lib/fa/youtube-play';
 import FaInstagram from 'react-icons/lib/fa/instagram';


export default class Contact extends React.PureComponent {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      number:"",
      website:"",
      message:"",
    }
  }
  handleName = (event) => {
    this.setState({
      name: event.target.value
    })
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
  }
  handleNumber = (event) => {
    this.setState({
      number: event.target.value
    })
  }
  handleWebsite = (event) => {
    this.setState({
      website:event.target.value
    })
  }
handleMessage = (event) => {
  this.setState({
    message: event.target.value
  })
}


    storeContact = () => {
      var data = new FormData ();
      data.append("name", this.state.name);
      data.append("email", this.state.email);
      data.append("number", this.state.number);
      data.append("website", this.state.website);
      data.append("message", this.state.message);

    fetch("http://rb.thathashimottoslife.com/api/storeContact",{
      method:"post",
      body:data
    })
    .then(function(response){
      return response.json();
    })
    .then(function(json){
      if(json.success){
        this.setState({
          name:"",
          email:"",
          number:"",
          website:"",
          message:"",
        })
        alert(json.success);
      }

      else if (json.error){
        alert(json.error);
      }
    }.bind(this))
  }

  storeEmail = () => {
    var data = new FormData ();

    data.append("email", this.state.email);

  fetch("http://rb.thathashimottoslife.com/api/storeEmail",{
    method:"post",
    body:data
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.success){
      this.setState({
        name:"",
        email:"",
        number:"",
        website:"",
        message:"",
      })
      alert(json.success);
    }

    else if (json.error){
      alert(json.error);
    }
  }.bind(this))
}

  render() {
    const divStyleMain={
      display:"flex",
      width:"100%",
      minHeight:"100vh",
      background:"#EEEEEE",
      flexDirection:"column",
      alignItems:"center"
    }

    const divStyle1={
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
    }

    const divStyle2={
      width:"900px",
      height:"200px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingLeft:"10px",
      paddingRight:"10px",
      background:"rgba(245, 128, 34, 1.00)",
      color:"rgba(255, 255, 255, 1.00)",
    }

    const divStyle3={
      width:"900px",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingLeft:"10px",
      paddingRight:"10px",
      background:"rgba(255, 255, 255, 1.00)",
      color:"rgba(245, 128, 34, 1.00)",
    }

    const divStyle4={
      width:"900px",
      height:"100px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingLeft:"10px",
      paddingRight:"10px",
      background:"rgba(255, 255, 255, 1.00)",
      color:"rgba(245, 128, 34, 1.00)",
    }

    const divStyle5={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(245, 128, 34, 1.00)",
    }
    const divStyle5Mobile={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(245, 128, 34, 1.00)",

    }

    const divStyle6={
      width:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(189, 190, 192, 1.00)",
    }

    const divStyle6Mobile={
      width:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(189, 190, 192, 1.00)",
    }

    const inputBox={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"285px",
      height:"30px",
      border:"2px solid rgba(255, 255, 255, 1.00)",
      margin:"0 auto",
      marginTop:"20px",
      marginBottom:"20px",
      background:"rgba(189, 190, 192, 1.00)",

    }

    const inputBox2={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"1em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"left",
      width:"285px",
      height:"285px",
      margin:"0 auto",
      marginTop:"20px",
      marginBottom:"20px",
      background:"rgba(189, 190, 192, 1.00)",
      border:"2px solid rgba(255, 255, 255, 1.00)",
      margin:"0 auto",
    }

    const contactLeft={
      width:"100%",
      display:"flex",
      flexDirection:"column",
      paddingLeft:"5%",
      paddingTop:"8%"
    }

    const buttonBox={
      color:"rgba(245, 128, 34, 1.00)",
      fontSize:"1.25em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center center",
      textTransform:"uppercase",
      paddingTop:"5px",
      width:"150px",
      height:"40px",
      marginTop:"10px",
      marginBottom:"50px",
      background:"rgba(255, 255, 255, 1.00)",
      border:"2px solid rgba(109, 110, 114, 1.00)",
      display:"flex",
      justifyContent:"center",
    }

    const buttonBox2={
      color:"rgba(245, 128, 34, 1.00)",
      fontSize:"1.25em",
      fontFamily:"Open Sans",
      fontWeight:"400",
      textAlign:"center center",
      textTransform:"uppercase",
      paddingTop:"5px",
      width:"150px",
      height:"40px",
      margin:"0 auto",
      marginTop:"10px",
      marginBottom:"50px",
      background:"rgba(189, 190, 192, 1.00)",
      border:"2px solid rgba(109, 110, 114, 1.00)",
      display:"flex",
      justifyContent:"center",

    }

    const textStyle={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"1.2em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"left",
    }

    const textStyle2={
      color:"rgba(245, 128, 34, 1.00)",
      fontSize:"1.2em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"left",
    }

    const iconStyle={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"4em",
      paddingLeft:"20px",
    }
    const iconStyleMobile={
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"3em",
      paddingRight:"20px",
    }
    const headerStyle={
      textDecoration:"none",
      color:"rgba(255, 255, 255, 1.00)",
      fontSize:"2em",
      fontFamily:"Oswald",
      fontStyle:"light",
      fontWeight:"500",
      textAlign:"center"
      }

      const headerStyle2={
        textDecoration:"none",
        color:"rgba(245, 128, 34, 1.00)",
        fontSize:"2em",
        fontFamily:"Oswald",
        fontStyle:"light",
        fontWeight:"500",
        textAlign:"center"
        }

      const logoStyle={
        margin:"0 auto",
        marginTop:"20px",
        marginBottom:"20px",
        height:"75px",
        display:"flex",
        flexDirection:"row",
        alignSelf:"center",
      }

      const contactRowMobile={
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
        paddingTop:"5px",
        margin:"0 auto",
      }

      const logoStyleMobile={
        margin:"0 auto",
        marginTop:"20px",
        marginBottom:"20px",
        height:"50px",
        display:"flex",
        flexDirection:"row",
        alignSelf:"center",
      }

    return (
      <div style={divStyleMain}>
        <Helmet title="Contact" meta={[ { name: 'description', content: 'Description of Contact' }]}/>

        <header>
            <NavBar/>
        </header>

        <Responsive minDeviceWidth={1024}>
          <div style={divStyle1}>
            <Carousel style={{maxWidth:"900px", margin:"0 auto", marginTop:"30px", marginBottom:"0px", border:"25px solid #ffffff"}}>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/ec3db1_RCB_box.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/0449c9_s_Augusta_GA.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/5b2386_ndCharles001.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle1}>
            <Carousel style={{maxWidth:"900px", margin:"0 auto", marginTop:"30px", marginBottom:"0px", border:"10px solid #ffffff"}}>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/ec3db1_RCB_box.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/0449c9_s_Augusta_GA.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img width={900} height={500} alt="900x500" src="http://h4z.it/Image/5b2386_ndCharles001.jpg"/>
                <Carousel.Caption>
                  <h3>The Recycle Bin</h3>
                  <p>From our store to your door.</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </div>
        </Responsive>

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle3}>
            <div style={{maxWidth:"900px", margin:"0 auto", marginTop:"30px", marginBottom:"30px"}}>
              <div style={headerStyle2}>Contact</div>
              <img style={logoStyle} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
              <div style={textStyle2}>
                Recycle Bin is a subscription box service you can subscribe to from 2nd and Charles.
                Simply pick your categories of interest, your fandom and your desired subscription level and we ship goodies
                from our store to your door!<br/>
                If you wish to contact us with any questions or comments please fill out all of the fields below.<br/>
                Thank you for choosing Recycle Bin from 2nd and Charles.<br/>
                <br/></div>

                <div style={contactRowMobile}>
                  <label style={textStyle}><input onChange = {this.handleName} type="text" style={inputBox} value={this.state.name} placeholder="Name"/> </label>
                  </div>
                  <div style={contactRowMobile}>
                  <label style={textStyle}><input onChange = {this.handleEmail} type="email" style={inputBox} value={this.state.email} placeholder="Email Address"/> </label>
                </div>
                <div style={contactRowMobile}>
                  <label style={textStyle}><input onChange = {this.handleNumber} type="number" style={inputBox} value={this.state.number} placeholder="Phone Number"/> </label>
                  </div>
                <div style={contactRowMobile}>
                  <label style={textStyle}><textarea onChange = {this.handleMessage} type="text" style={inputBox2} placeholder="Your Message">{this.state.message}</textarea> </label>
                </div>
                <div style={{margin:"0 auto"}}>
                  <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={buttonBox2}/>
               </div>
              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
              <div style={divStyle3}>
                <div style={{maxWidth:"300px", margin:"0 auto", marginTop:"30px", marginBottom:"30px"}}>
                  <div style={headerStyle2}>Contact</div>
                  <img style={logoStyleMobile} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
                  <div style={textStyle2}>
                    Recycle Bin is a subscription box service you can subscribe to from 2nd and Charles.
                    Simply pick your categories of interest, your fandom and your desired subscription level and we ship goodies
                    from our store to your door!<br/>
                    If you wish to contact us with any questions or comments please fill out all of the fields below.<br/>
                    Thank you for choosing Recycle Bin from 2nd and Charles.<br/>
                    <br/></div>

                    <div style={contactRowMobile}>
                      <label style={textStyle}><input onChange = {this.handleName} type="text" style={inputBox} value={this.state.name} placeholder="Name"/> </label>
                      </div>
                      <div style={contactRowMobile}>
                      <label style={textStyle}><input onChange = {this.handleEmail} type="email" style={inputBox} value={this.state.email} placeholder="Email Address"/> </label>
                    </div>
                    <div style={contactRowMobile}>
                      <label style={textStyle}><input onChange = {this.handleNumber} type="number" style={inputBox} value={this.state.number} placeholder="Phone Number"/> </label>
                      </div>
                    <div style={contactRowMobile}>
                      <label style={textStyle}><textarea onChange = {this.handleMessage} type="text" style={inputBox2} placeholder="Your Message">{this.state.message}</textarea> </label>
                    </div>
                    <div style={{margin:"0 auto"}}>
                      <input onTouchTap = {this.storeContact} type="submit" placeholder="Send Message" style={buttonBox2}/>
                   </div>
                  </div>
                </div>
              </Responsive>

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle5}>
            <div>
              <a style={iconStyle} href= "https://www.facebook.com/2ndandCharles/"><FaFacebook/></a>
              <a style={iconStyle} href= "https://twitter.com/2ndandcharles"><FaTwitter/></a>
              <a style={iconStyle} href= "https://www.youtube.com/watch?v=HhZdYCWBbIs"><FaYoutubePlay/></a>
              <a style={iconStyle} href= "https://www.instagram.com/2ndandcharles/?hl=en"><FaInstagram/></a>
            </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle5Mobile}>
            <div>
              <a style={iconStyleMobile} href= "https://www.facebook.com/2ndandCharles/"><FaFacebook/></a>
              <a style={iconStyleMobile} href= "https://twitter.com/2ndandcharles"><FaTwitter/></a>
              <a style={iconStyleMobile} href= "https://www.youtube.com/watch?v=HhZdYCWBbIs"><FaYoutubePlay/></a>
              <a style={iconStyleMobile} href= "https://www.instagram.com/2ndandcharles/?hl=en"><FaInstagram/></a>
            </div>
          </div>
        </Responsive>

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle6}>
            <div style={{maxWidth:"320px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
            }}>
            <div style={contactLeft}>
                <label style={textStyle}>SUBSCRIBE FOR UPDATES<input type="text" style={inputBox} value={this.state.email} placeholder=" Email Address"/> </label>
                <input onTouchTap = {this.storeEmail} type="submit" placeholder="Send Message" style={buttonBox2}/>

                &copy; 2017<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Recycle Bin.<br/>Proudly designed by <a href="http://cb-iii.com">Charlie Bradley III</a> and Rebecca Van Loenen
            </div>
            </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle6Mobile}>
            <div style={divStyle6}>
              <div style={{maxWidth:"320px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
              }}>
              <div style={contactLeft}>
                  <label style={textStyle}>SUBSCRIBE FOR UPDATES<input type="text" style={inputBox} value={this.state.email} placeholder=" Email Address"/> </label>
                  <input onTouchTap = {this.storeEmail} type="submit" placeholder="Send Message" style={buttonBox2}/>

                  &copy; 2017<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Recycle Bin.<br/>Proudly designed by <a href="http://cb-iii.com">Charlie Bradley III</a> Rebecca Van Loenen
              </div>
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

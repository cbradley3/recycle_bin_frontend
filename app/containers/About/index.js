/*
 *
 * About
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


export default class About extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      email:"",
    }
  }
  handleEmail = (event) => {
    this.setState({
      email:event.target.value
    })
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
          email:"",
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
      marginTop:"10px",
      marginBottom:"10px",
      marginRight:"30px",
      background:"rgba(189, 190, 192, 1.00)"
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
      fontWeight:"600",
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
        <Helmet title="About" meta={[ { name: 'description', content: 'Description of About' }]}/>

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
              <div style={headerStyle2}>About</div>
              <img style={logoStyle} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
              <div>
                <p style={textStyle2}>Recycle Bin is the new way to get the awesomeness of  2nd & Charles shipped right to your door.
                Yes, that's right, all of the glory that is contained in 2nd & Charles is boxed up on a monthly bases and lands in your mailbox.
                Our Recycle Bin brains come together in a back room of our 2nd & Charles headquarters and select items of awesomeness to send your way.
                You just select the level of plan commitment  that fits your ultimate Recycle Bin desires. If you love your subscription plan then great, if not, you can change your interests, fandom and level on our Shop page.</p>

                <p style={textStyle2}>Our plans consist of:</p><br/>

                <p style={textStyle2}>Level #1: Basic<br/>
                - 2/3 items<br/>
                - shipped monthly<br/>
                - $15+shipping/handling</p><br/>

              <p style={textStyle2}>Level #2: Plus<br/>
                - 4/5 items<br/>
                - shipped monthly<br/>
                - $30+shipping/handling</p><br/>

                <p style={textStyle2}>Recycle Bin is the brainchild of Charlie Bradley III & Rebecca van Loenen</p><br/>

                <p style={textStyle2}>Charlie Bradley III:<br/>
                - Genius, billionaire, playboy, philanthropist.<br/>
                But when he isn't being Tony Stark, Charlie is busy with front and back end web development, print graphic design projects or creating
                artwork. Spending time at 2nd and Charles with his kids is his favorite past time...next to building arc reactor powered metal suits of armor, of course.</p><br/>

                <p style={textStyle2}>Rebecca van Loenen:<br/>
                - Imagine an American Ninja Warrior of the crafting world and you get Rebecca. Rebecca also practices the fine art of 'adulting' by offering
                her knowledge of project management and marketing to the Recycle Bin team. She enjoys long walks up and down the aisles of 2nd & Charles,
                you know, just for research purposes.</p><br/>
              </div>
              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
              <div style={divStyle3}>
                <div style={{maxWidth:"300px", margin:"0 auto", marginTop:"30px", marginBottom:"30px"}}>
                  <div style={headerStyle2}>About</div>
                  <img style={logoStyleMobile} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
                  <div>
                    <p style={textStyle2}>Recycle Bin is the new way to get the awesomeness of  2nd & Charles shipped right to your door.
                    Yes, that's right, all of the glory that is contained in 2nd & Charles is boxed up on a monthly bases and lands in your mailbox.
                    Our Recycle Bin brains come together in a back room of our 2nd & Charles headquarters and select items of awesomeness to send your way.
                    You just select the level of plan commitment  that fits your ultimate Recycle Bin desires. If you love your subscription plan then great, if not, you can change your interests, fandom and level on our Shop page.</p>

                    <p style={textStyle2}>Our plans consist of:</p><br/>

                    <p style={textStyle2}>Level #1: Basic<br/>
                    - 2/3 items<br/>
                    - shipped monthly<br/>
                    - $15+shipping/handling</p><br/>

                  <p style={textStyle2}>Level #2: Plus<br/>
                    - 4/5 items<br/>
                    - shipped monthly<br/>
                    - $30+shipping/handling</p><br/>

                    <p style={textStyle2}>Recycle Bin is the brainchild of Charlie Bradley III & Rebecca van Loenen</p><br/>

                    <p style={textStyle2}>Charlie Bradley III:<br/>
                    - Genius, billionaire, playboy, philanthropist.<br/>
                    But when he isn't being Tony Stark, Charlie is busy with front and back end web development, print graphic design projects or creating
                    artwork. Spending time at 2nd and Charles with his kids is his favorite past time...next to building arc reactor powered metal suits of armor, of course.</p><br/>

                    <p style={textStyle2}>Rebecca van Loenen:<br/>
                    - Imagine an American Ninja Warrior of the crafting world and you get Rebecca. Rebecca also practices the fine art of 'adulting' by offering
                    her knowledge of project management and marketing to the Recycle Bin team. She enjoys long walks up and down the aisles of 2nd & Charles,
                    you know, just for research purposes.</p><br/>
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

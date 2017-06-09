/*
 *
 * Shop
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
 import Checkbox from 'material-ui/Checkbox';
 import Divider from 'material-ui/Divider';
 import Paper from 'material-ui/Paper';
 import TextField from 'material-ui/TextField';


export default class Shop extends React.PureComponent {

  constructor(props){
    super(props);
    this.state={
      email:"",
      firstName:"",
      lastName:"",
      streetAddress:"",
      phoneNumber:"",
      accountEmail:"",
      categories:[]
    }
  }

  handleCheckBox = (category) => {
    var categories = this.state.categories;
    var found = false;
    var index = null;
    for(var i = 0; i<categories.length;i++)
    {
      if(categories[i]===category)
      {
        found = true;
        index = i;
      }
    }

    if(found === true){
      categories.splice(index,1);
      this.setState({
        categories:categories
      })
    }
    else if(found === false)
    {
      categories.push(category);
      this.setState({
        categories:categories
      })
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

    fetch("http://localhost:8000/api/storeEmail",{
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

  handleFirstName = (event) => {
    this.setState({
      firstName: event.target.value
    })
  }
  handleLastName = (event) => {
    this.setState({
      lastName: event.target.value
    })
  }
  handleStreetAddress = (event) => {
    this.setState({
      streetAddress: event.target.value
    })
  }
  handlePhoneNumber = (event) => {
    this.setState({
      phoneNumber: event.target.value
    })
  }
  handleAccountEmail = (event) => {
    this.setState({
      accountEmail: event.target.value
    })
  }

    storeAccountInfo = () => {

      var data = new FormData ();
      data.append("firstName",this.state.firstName)
      data.append("lastName", this.state.lastName);
      data.append("streetAddress", this.state.streetAddress);
      data.append("phoneNumber", this.state.phoneNumber);
      data.append("accountEmail", this.state.accountEmail);
      data.append("categories", JSON.stringify(this.state.categories));

  fetch("http://localhost:8000/api/storeAccountInfo",{
    method:"post",
    body:data
  })
  .then(function(response){
    return response.json();
  })
  .then(function(json){
    if(json.token !== false){
      this.setState({
        firstName:"",
        lastName:"",
        streetAddress:"",
        phoneNumber:"",
        accountEmail:"",
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
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      paddingLeft:"10px",
      paddingRight:"10px",
      background:"rgba(255, 255, 255, 1.00)",
      color:"rgba(245, 128, 34, 1.00)",
    }

    const divStyle5={
      width:"900px",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      background:"rgba(255, 255, 255, 1.00)",
    }

    const divStyle6={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(245, 128, 34, 1.00)",
    }
    const divStyle6Mobile={
      width:"100%",
      height:"150px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(245, 128, 34, 1.00)",
    }

    const divStyle7={
      width:"100%",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      background:"rgba(189, 190, 192, 1.00)",
    }

    const divStyle7Mobile={
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

    const buttonBox3={
      color:"rgba(255, 255, 255, 1.00)",
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
      background:"rgba(245, 128, 34, 1.00)",
      border:"2px solid rgba(245, 128, 34, 1.00)",
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

      const styles={
        block: {
          width:"33%",
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
        },
        checkbox: {
          marginBottom:"10px",
          marginTop:"20px",
          display:"flex",
          flexDirection:"row",
          alignItems:"center",
        },
      };

      const checkboxColumn={
        width:"100%",
        display:"flex",
        flexDirection:"column",
        alignItems:"left",
      };

      const textFieldstyle={
        marginLeft:"20px",
        width:"860px"
      };

      const columnWrapper={
        width:"100%",
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
      }


    return (
      <div style={divStyleMain}>
        <Helmet title="Shop" meta={[ { name: 'description', content: 'Description of Shop' }]}/>

        <header>
            <NavBar/>
        </header>

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

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle3}>
            <div style={{maxWidth:"900px", margin:"0 auto", marginTop:"30px", marginBottom:"30px"}}>
              <div style={headerStyle2}>Shop</div>
              <img style={logoStyle} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
              <div style={textStyle2}>
                Recycle Bin is a subscription box service you can subscribe to from 2nd and Charles.
                Simply pick your categories of interest, your fandom and your desired subscription level and we ship goodies
                from our store to your door!<br/>
                From books, comics, figurines and t-shirts
                to pre-owned vinyl records, DVDs, BluRays and video games, we have your interest covered!
                You just select the level of plan commitment that fits your ultimate Recycle Bin desires.

                Our plans consist of:<br/>

                Level #1: Basic<br/>
                - 2/3 items<br/>
                - shipped monthly<br/>
                - $15+shipping/handling<br/>

                Level #2: Plus<br/>
                - 4/5 items<br/>
                - shipped monthly<br/>
                - $30+shipping/handling<br/></div>
              </div>
            </div>
          </Responsive>

          <Responsive minDeviceWidth={1024}>
          <div style={divStyle4}>
           <div style={headerStyle2}>Interest</div>
           <div style={columnWrapper}>
            <div style={checkboxColumn}>
              <div style={styles.block}><Checkbox label="SciFi" style={styles.checkbox} onChange={()=>this.handleCheckBox("SciFi")}/></div>
              <div style={styles.block}><Checkbox label="Fantasy" style={styles.checkbox} onChange={()=>this.handleCheckBox("Fantasy")}/></div>
              <div style={styles.block}><Checkbox label="Mystery" style={styles.checkbox} onChange={()=>this.handleCheckBox("Mystery")}/></div>
              <div style={styles.block}><Checkbox label="Romance" style={styles.checkbox} onChange={()=>this.handleCheckBox("Romance")}/></div>
              <div style={styles.block}><Checkbox label="Cooking" style={styles.checkbox} onChange={()=>this.handleCheckBox("Cooking")}/></div>
           </div>
           <div style={checkboxColumn}>
              <div style={styles.block}><Checkbox label="Drama" style={styles.checkbox} onChange={()=>this.handleCheckBox("Drama")}/></div>
              <div style={styles.block}><Checkbox label="Horror" style={styles.checkbox} onChange={()=>this.handleCheckBox("Horror")}/></div>
              <div style={styles.block}><Checkbox label="Self/Help" style={styles.checkbox} onChange={()=>this.handleCheckBox("Self/Help")}/></div>
              <div style={styles.block}><Checkbox label="History" style={styles.checkbox} onChange={()=>this.handleCheckBox("History")}/></div>
              <div style={styles.block}><Checkbox label="Biographies" style={styles.checkbox} onChange={()=>this.handleCheckBox("Biographies")}/></div>
            </div>
            <div style={checkboxColumn}>
              <div style={styles.block}><Checkbox label="Poetry" style={styles.checkbox} onChange={()=>this.handleCheckBox("Poetry")}/></div>
              <div style={styles.block}><Checkbox label="Action/Adventure" style={styles.checkbox} onChange={()=>this.handleCheckBox("Action/Adventure")}/></div>
              <div style={styles.block}><Checkbox label="Comics" style={styles.checkbox} onChange={()=>this.handleCheckBox("Comics")}/></div>
              <div style={styles.block}><Checkbox label="Spiritual/NewAge" style={styles.checkbox} onChange={()=>this.handleCheckBox("Spiritual/NewAge")}/></div>
              <div style={styles.block}><Checkbox label="Science" style={styles.checkbox} onChange={()=>this.handleCheckBox("Science")}/></div>
            </div>
          </div>

        <div style={headerStyle2}>Fandom</div>
         <div style={checkboxColumn}>
           <div style={styles.block}><Checkbox label="Marvel" style={styles.checkbox} onChange={()=>this.handleCheckBox("Marvel")}/></div>
           <div style={styles.block}><Checkbox label="DC" style={styles.checkbox} onChange={()=>this.handleCheckBox("DC")}/></div>
           <div style={styles.block}><Checkbox label="StarWars" style={styles.checkbox} onChange={()=>this.handleCheckBox("StarWars")}/></div>
           <div style={styles.block}><Checkbox label="TheWalkingDead" style={styles.checkbox} onChange={()=>this.handleCheckBox("TheWalkingDead")}/></div>
           <div style={styles.block}><Checkbox label="TheXfiles" style={styles.checkbox} onChange={()=>this.handleCheckBox("TheXfiles")}/></div>
        </div>
        <div style={checkboxColumn}>
          <div style={styles.block}><Checkbox label="Transformers" style={styles.checkbox} onChange={()=>this.handleCheckBox("Transformers")}/></div>
           <div style={styles.block}><Checkbox label="Pokemon" style={styles.checkbox} onChange={()=>this.handleCheckBox("Pokemon")}/></div>
           <div style={styles.block}><Checkbox label="HarryPotter" style={styles.checkbox} onChange={()=>this.handleCheckBox("HarryPotter")}/></div>
           <div style={styles.block}><Checkbox label="StarTrek" style={styles.checkbox} onChange={()=>this.handleCheckBox("StarTrek")}/></div>
           <div style={styles.block}><Checkbox label="Disney" style={styles.checkbox} onChange={()=>this.handleCheckBox("Disney")}/></div>
         </div>
         <div style={checkboxColumn}>
           <div style={styles.block}><Checkbox label="Halo" style={styles.checkbox} onChange={()=>this.handleCheckBox("Halo")}/></div>
           <div style={styles.block}><Checkbox label="MarioBros" style={styles.checkbox} onChange={()=>this.handleCheckBox("MarioBros")}/></div>
           <div style={styles.block}><Checkbox label="GameOfThrones" style={styles.checkbox} onChange={()=>this.handleCheckBox("GameOfThones")}/></div>
           <div style={styles.block}><Checkbox label="Minecraft" style={styles.checkbox} onChange={()=>this.handleCheckBox("Minecraft")}/></div>
           <div style={styles.block}><Checkbox label="DragonballZ" style={styles.checkbox} onChange={()=>this.handleCheckBox("DragonballZ")}/></div>
         </div>

         <div style={headerStyle2}>Recycle Bin</div>
          <div style={checkboxColumn}>
            <div style={styles.block}><Checkbox label="Basic" style={styles.checkbox} onChange={()=>this.handleCheckBox("Basic")}/></div>
            <div style={styles.block}><Checkbox label="Plus" style={styles.checkbox} onChange={()=>this.handleCheckBox("Plus")}/></div>
         </div>

         </div>
        </Responsive>

        <Responsive minDeviceWidth={1024}>
        <div style={divStyle5}>
         <div style={headerStyle2}>Account Info</div>
          <Paper zDepth={2}>
            <TextField onChange = {this.handleFirstName} hintText="First name" style={textFieldstyle} value={this.state.firstName} underlineShow={false} />
            <Divider />
            <TextField onChange = {this.handlelastName} hintText="Last name" style={textFieldstyle} value={this.state.lastName} underlineShow={false} />
            <Divider />
            <TextField onChange = {this.handleStreetAddress} hintText="Street address" style={textFieldstyle} value={this.state.streetAddress} underlineShow={false} />
            <Divider />
            <TextField onChange = {this.handlePhoneNumber} hintText="Phone Number" style={textFieldstyle} value={this.state.phoneNumber} underlineShow={false} />
            <Divider />
            <TextField onChange = {this.handleAccountEmail} hintText="Email address" style={textFieldstyle} value={this.state.accountEmail} underlineShow={false} />
            <Divider />
          </Paper>

          <input onTouchTap = {this.storeAccountInfo} type="submit" placeholder="Submit" style={buttonBox3}/>

        </div>
        </Responsive>

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle6}>
            <div>
              <a style={iconStyle} href= "https://www.facebook.com/2ndandCharles/"><FaFacebook/></a>
              <a style={iconStyle} href= "https://twitter.com/2ndandcharles"><FaTwitter/></a>
              <a style={iconStyle} href= "https://www.youtube.com/watch?v=HhZdYCWBbIs"><FaYoutubePlay/></a>
              <a style={iconStyle} href= "https://www.instagram.com/2ndandcharles/?hl=en"><FaInstagram/></a>
            </div>
          </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
          <div style={divStyle6Mobile}>
            <div>
              <a style={iconStyleMobile} href= "https://www.facebook.com/2ndandCharles/"><FaFacebook/></a>
              <a style={iconStyleMobile} href= "https://twitter.com/2ndandcharles"><FaTwitter/></a>
              <a style={iconStyleMobile} href= "https://www.youtube.com/watch?v=HhZdYCWBbIs"><FaYoutubePlay/></a>
              <a style={iconStyleMobile} href= "https://www.instagram.com/2ndandcharles/?hl=en"><FaInstagram/></a>
            </div>
          </div>
        </Responsive>

      <Responsive minDeviceWidth={1024}>
          <div style={divStyle7}>
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
          <div style={divStyle7Mobile}>
            <div style={divStyle7}>
              <div style={{maxWidth:"320px", margin:"0 auto", marginTop:"30px", marginBottom:"30px",
              }}>
              <div style={contactLeft}>
                  <label style={textStyle}>SUBSCRIBE FOR UPDATES<input type="text" style={inputBox} value={this.state.email} placeholder=" Email Address"/> </label>
                  <input onTouchTap = {this.storeEmail} type="submit" placeholder="Send Message" style={buttonBox2}/>

                  &copy; 2017<script>new Date().getFullYear()>2017&&document.write("-"+new Date().getFullYear());</script>, Sumo Robot League.<br/>Proudly designed by <a href="http://cb-iii.com">Charlie Bradley III</a> Rebecca Van Loenen
              </div>
              </div>
            </div>
          </div>
        </Responsive>
      </div>
    );
  }
}

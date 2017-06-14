/*
 *
 * UpdateShop
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


export default class UpdateShop extends React.PureComponent {

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

  componentWillMount(){
      fetch("http://rb.thathashimottoslife.com/api/getAccountInfo" + this.state.token,{
        headers:{"Authorization":"Bearer "+this.state.token}
      })
      .then(function(res){
        return res.json()
      })
      .then(function(json){
        this.setState({
          categories:json
        })
      }.bind(this))
    }

    destroyOrder = (id) =>{
    var _this = this;
    fetch("http://rb.thathashimottoslife.com/api/destroyOrder/" + id + "?token=" + this.state.token, {
      method: "post",
      headers:{"Authorization":"Bearer "+this.state.token}
    })
    .then(function(res){
      return res.json();
    })
    .then(function(json){
      if(json.success)
      {
        alert(json.success);
        window.location.reload();
      }
      else if(json.error)
      {
        alert(json.error);
      }
    })
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

  fetch("http://rb.thathashimottoslife.com/api/storeAccountInfo",{
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

renderBoxes = (categoryList) => {
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
  var categories = this.state.categories;
  var checkBoxes = [];
  for(var i = 0; i < categoryList.length; i++)
  {
    if(categories.indexOf(categoryList[i]) === -1)
    {
      checkBoxes.push(<div style={styles.block}><Checkbox label={categoryList[i]} checked={false} style={styles.checkbox} onCheck={()=>this.handleCheckBox(categoryList[i])}/></div>);
    }
    else {
      checkBoxes.push(<div style={styles.block}><Checkbox label={categoryList[i]} checked={true} style={styles.checkbox} onCheck={()=>this.handleCheckBox(categoryList[i])}/></div>);
    }
  }

  return(checkBoxes);
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

    const divStyle3Mobile={
      width:"100%",
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

    const divStyle5Mobile={
      width:"100%px",
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

    const divStyleLast={
      width:"900px",
      height:"auto",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"center",
      margin:"0 auto",
      background:"rgba(255, 255, 255, 1.00)",
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
    const textStyle2Mobile={
      color:"rgba(245, 128, 34, 1.00)",
      fontSize:"1.2em",
      fontFamily:"Open Sans",
      fontWeight:"300",
      textAlign:"center",
      margin:"0 auto"
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

        const headerStyle3={
          textDecoration:"none",
          color:"rgba(245, 128, 34, 1.00)",
          fontSize:"2em",
          fontFamily:"Oswald",
          fontStyle:"light",
          fontWeight:"500",
          textAlign:"center",
          marginTop:"50px",
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
        marginLeft:"150px"
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

      const columnWrapperMobile={
        width:"100px",
        display:'flex',
        flexDirection:'column',
        margin:"0 auto"
      }


    return (
      <div style={divStyleMain}>
        <Helmet title="UpdateShop" meta={[ { name: 'description', content: 'Description of UpdateShop' }]}/>

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
              <div style={headerStyle2}>Shop</div>
              <img style={logoStyle} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
              <div style={textStyle2}>
                Recycle Bin is a subscription box service you can subscribe to from 2nd and Charles.
                Simply pick your categories of interest, your fandom and your desired subscription level and we ship goodies
                from our store to your door!<br/>
                From books, comics, figurines and t-shirts
                to pre-owned vinyl records, DVDs, BluRays and video games, we have your interest covered!
                You just select the level of plan commitment that fits your ultimate Recycle Bin desires.
                If you love your subscription plan then great, if not, you can change your interests, fandom and level here.<br/>
                <br/>
                Our plans consist of:<br/>
                <br/>
                Level #1: Basic<br/>
                - 2/3 items<br/>
                - shipped monthly<br/>
                - $15+shipping/handling<br/>
                <br/>
                Level #2: Plus<br/>
                - 4/5 items<br/>
                - shipped monthly<br/>
                - $30+shipping/handling<br/></div>
              </div>
            </div>
          </Responsive>

          <Responsive maxDeviceWidth={1023}>
              <div style={divStyle3Mobile}>
                <div style={{maxWidth:"300px", margin:"0 auto", marginTop:"30px", marginBottom:"30px"}}>
                  <div style={headerStyle2}>Shop</div>
                  <img style={logoStyleMobile} src="http://h4z.it/Image/edf6d5__bin_logo_sm.png"/>
                  <div style={textStyle2}>
                    Recycle Bin is a subscription box service you can subscribe to from 2nd and Charles.
                    Simply pick your categories of interest, your fandom and your desired subscription level and we ship goodies
                    from our store to your door!<br/>
                    From books, comics, figurines and t-shirts
                    to pre-owned vinyl records, DVDs, BluRays and video games, we have your interest covered!
                    You just select the level of plan commitment that fits your ultimate Recycle Bin desires.
                    If you love your subscription plan then great, if not, you can change your interests, fandom and level here.<br/>
                    <br/>
                    Our plans consist of:<br/>
                    <br/>
                    Level #1: Basic<br/>
                    - 2/3 items<br/>
                    - shipped monthly<br/>
                    - $15+shipping/handling<br/>
                    <br/>
                    Level #2: Plus<br/>
                    - 4/5 items<br/>
                    - shipped monthly<br/>
                    - $30+shipping/handling<br/></div>
                  </div>
                </div>
              </Responsive>

          <Responsive minDeviceWidth={1024}>
          <div style={divStyle4}>
           <div style={headerStyle3}>Interest</div>
           <div style={columnWrapper}>
            <div style={checkboxColumn}>
              {this.renderBoxes(["SciFi", "Fantasy", "Mystery", "Romance", "Cooking", "Thrillers"])}
           </div>
           <div style={checkboxColumn}>
              {this.renderBoxes(["Drama", "Horror", "Self/Help", "History", "Biographies", "Autobiographies"])}
            </div>
            <div style={checkboxColumn}>
              {this.renderBoxes(["Poetry", "Action/Adventure", "Comics", "Spiritual/NewAge", "Science", "Technology"])}
            </div>
          </div>

        <div style={headerStyle3}>Fandom</div>
          <div style={columnWrapper}>
           <div style={checkboxColumn}>
             {this.renderBoxes(["Marvel", "DC", "StarWars", "TheWalkingDead", "TheXfiles", "LordOfTheRings"])}
          </div>
          <div style={checkboxColumn}>
             {this.renderBoxes(["Transformers", "Pokemon", "HarryPotter", "StarTrek", "Disney", "MyLittlePony"])}
           </div>
           <div style={checkboxColumn}>
             {this.renderBoxes(["Halo", "MarioBros", "GameOfThrones", "Minecraft", "DragonballZ", "TheMatrix"])}
           </div>
         </div>

         <div style={headerStyle3}>Recycle Bin</div>
           <div style={columnWrapper}>
            <div style={checkboxColumn}>
              {this.renderBoxes(["Basic", "Plus"])}
           </div>
         </div>

         </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
        <div style={divStyle4}>
         <div style={headerStyle3}>Interest</div>
         <div style={columnWrapperMobile}>
          <div style={checkboxColumn}>
            {this.renderBoxes(["SciFi", "Fantasy", "Mystery", "Romance", "Cooking", "Thrillers"])}
         </div>
         <div style={checkboxColumn}>
            {this.renderBoxes(["Drama", "Horror", "Self/Help", "History", "Biographies", "Autobiographies"])}
          </div>
          <div style={checkboxColumn}>
            {this.renderBoxes(["Poetry", "Action/Adventure", "Comics", "Spiritual/NewAge", "Science", "Technology"])}
          </div>
        </div>

      <div style={headerStyle3}>Fandom</div>
        <div style={columnWrapperMobile}>
         <div style={checkboxColumn}>
           {this.renderBoxes(["Marvel", "DC", "StarWars", "TheWalkingDead", "TheXfiles", "LordOfTheRings"])}
        </div>
        <div style={checkboxColumn}>
           {this.renderBoxes(["Transformers", "Pokemon", "HarryPotter", "StarTrek", "Disney", "MyLittlePony"])}
         </div>
         <div style={checkboxColumn}>
           {this.renderBoxes(["Halo", "MarioBros", "GameOfThrones", "Minecraft", "DragonballZ", "TheMatrix"])}
         </div>
       </div>

       <div style={headerStyle3}>Recycle Bin</div>
         <div style={columnWrapperMobile}>
          <div style={checkboxColumn}>
            {this.renderBoxes(["Basic", "Plus"])}
         </div>
       </div>

       </div>
      </Responsive>

        <Responsive minDeviceWidth={1024}>
        <div style={divStyle5}>
         <div style={headerStyle3}>Account Info</div>
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


           <div style={textStyle2}>
           If you decide that Recycle Bin is not right for you at this time,<br/> you may click the button below to cancel your subscription.</div>

           <input onTouchTap={()=>this.destroyOrder(order.id)} type="submit" placeholder="Submit" style={buttonBox}/>


        </div>
        </Responsive>

        <Responsive maxDeviceWidth={1023}>
        <div style={divStyle5Mobile} style={{maxWidth:"300px", margin:"0 auto", marginTop:"30px", marginBottom:"30px", background:"rgba(255, 255, 255, 1.00)"}}>
         <div style={headerStyle3}>Account Info</div>
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
          </div>

          <div style={divStyle5Mobile}>
           <input onTouchTap = {this.storeAccountInfo} type="submit" placeholder="Submit" style={buttonBox3}/>



          <div style={textStyle2Mobile}>
          If you decide that Recycle Bin is not right for you at this time, you may click the button below to cancel your subscription.</div>

          <input onTouchTap={()=>this.destroyOrder(order.id)} type="submit" placeholder="Submit" style={buttonBox}/>

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

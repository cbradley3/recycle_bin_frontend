/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';
import Responsive from 'react-responsive';
import {Link} from "react-router";
import FlatButton from "material-ui/FlatButton";
import NavBar from 'components/NavBar';
import { Carousel } from 'react-bootstrap';


export default class Home extends React.PureComponent {
  render() {
    const divStyleMain={
      display:"flex",
      width:"100%",
      minHeight:"100vh",
      background:"#EEEEEE",
      flexDirection:"column",
    }

    const divStyle1={
      display:"flex",
      flexDirection:"column",
      alignItems:"center",

    }

    return (
      <div style={divStyleMain}>
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

          <header>
              <NavBar/>
          </header>

        <div style={divStyle1}>
          <Carousel style={{maxWidth:"900px", margin:"0 auto", marginTop:"30px", marginBottom:"30px", border:"25px solid #ffffff"}}>
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


      </div>
    );
  }
}

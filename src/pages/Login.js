import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap'

import "../assets/css/login.css"
import BG from "../assets/images/loginBg.jpeg"

function Login(){
  const [loader, setLoader ] = useState(false);

  const handleLogin = () => {
    console.log('nyaa');
  }
  const renderButton = () => {    
      if (!loader) {
        return( 
          <Button type="button" color='login' style={{ width: '100%' }} onClick={handleLogin}>Sign In</Button>
        )
      } else {
          return(
              <Button disabled type="button" color='login' style={{ width: '100%' }}>
                  <div className="d-flex align-items-center justify-content-center">
                      <div className="mr-2">Signing In</div>
                      <div className="buttonloader"></div>
                  </div>
              </Button>
          )
      }
  }

       
  return(
      <div style={{ height: '100vh' }}>
      <Row style={{  height: '100%' }}>
        <Col md={6} className="left-column text-center" style={{alignItems:'center', justifyContent:'center'}} >
          <img src={BG} style={{width:'80%', margin:'auto', padding:'auto', marginTop:'16em'}} />
        </Col>

        <Col md={6} className="right-column">
          <h1 style={{color:'#fff'}}>Hi there!</h1>
         
          <br /><br />
          <div className="login-form">
            <form>
              

              <div className="group">
                { renderButton()}
              </div>
            </form>
          </div>
        </Col>
      </Row>
      {/* <ErrorAlert text={this.state.text} toggle={this.state.toggle} parentToggle={this.childToggle} success={this.state.success} /> */}
    </div>
  )
}

export default Login
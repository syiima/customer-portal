import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap'

import "../assets/css/Login.css"
import BG from "../assets/images/loginBg.jpeg"

export const Login = () => {
  const [loader, setLoader ] = useState(false);

  const renderButton = () => {    
      if (loader) {
        return( 
          <Button type="button" color='login' style={{ width: '100%' }} onClick={this.handleLogin}>Sign In</Button>
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
        <Col md={6} className="left-column" style={{
          background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${BG})`, backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center', backgroundSize: 'cover'
        }}>
        </Col>

        <Col md={6} className="right-column">
          <h1 style={{}}>Hi there!</h1>
         
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
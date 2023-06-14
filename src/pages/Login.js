import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap'
import { googleLogout, useGoogleLogin, GoogleLogin,  } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

import "../assets/css/login.css"
import BG from "../assets/images/loginBg.jpeg"

let TOKEN = "372709308186-ikb6867gdosuknf8dmv0f3jpk9kpogue.apps.googleusercontent.com"

function Login(){
  const [loader, setLoader ] = useState(false);
  const [ profile, setProfile ] = useState([]);
  const [ user, setUser]  = useState([])

  const handleLogin = useGoogleLogin({
      onSuccess: (codeResponse) => next(codeResponse),
      onError: (error) => console.log('Login Failed:', error)
  });

  const next = (user) => {
    console.log('hellloo', user);
      fetch(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
        headers: {
            Authorization: `Bearer ${user.access_token}`,
            Accept: 'application/json'
        }
    })
    .then((res) => {
        console.log('apo ni', res.data);
        setProfile(res.data);
    })
    .catch((err) => console.log(err));
    
  }

  const responseMessage = (response) => {
    console.log('oii', response);

    let result = jwt_decode(response.credential)

    console.log('noww', result);
    let data = {
      email: result.email,
      name: result.email,
      img: result.picture,
    }

  }

  const errorMessage = (err) => {
    console.log('error', err);
  }


  const logOut = () => {
    googleLogout();
    setProfile(null);
  };


  const renderButton = () => {    
      if (!loader) {
        return( 
          <GoogleLogin onSuccess={responseMessage} onError={errorMessage} />
          // <Button type="button" color='login' style={{ width: '100%' }} onClick={handleLogin}>Sign in with Google</Button>
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

                <Button type="button" color='login' style={{ width: '100%', marginTop:20 }} onClick={logOut}>Logout pls</Button>

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
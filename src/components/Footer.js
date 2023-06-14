import React, { useState, useEffect } from "react";
import { Row, Col, Button } from 'reactstrap'

import "./Components.css"

export const Footer = () => {
    return(
        <div className="footer-clean">
        <footer>
            <div class="container">

                <div class="row ">
                    <div class="col-sm-4 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>
                    
                    
                </div>
                <div>
                    <p class="copyright">© 2023 || syima</p>
                </div>
            </div>
        </footer>
    </div>

        // <div className='text-center p-3' style={{ backgroundColor:  }}>
        //     © 2020 Copyright:
        //     <a className='text-white' href='https://mdbootstrap.com/'>
        //     MDBootstrap.com
        //     </a>
        // </div>
    )
    
}
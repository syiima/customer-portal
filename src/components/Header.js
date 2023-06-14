import React from "react";
import { Navbar, NavbarBrand } from 'reactstrap'

import "./Components.css"

export const Header = () => {
    return(
       <>
        <div className='header'>
            <h1 className='fw-bold'>Hi, username!</h1>
        </div>
       </>
    )
}
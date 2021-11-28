import React from "react";
import "./header.scss"
import logo from "../../images/logo.jpg"

const Header=()=>(
    <div className="header">
        <div className="header__logo">
            <a href="#">
                <img src={logo} alt="logo" />
            </a>
        </div>
    </div>
) 

export default Header
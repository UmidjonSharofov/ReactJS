import React from "react";
import logo from '../assets/icon/logo.png'
import './nav.css'

function Nav(){
    return(
        <nav>
        <div className="navbar">
         <div className="navbar_wraper">  
            <img src={logo} alt='logo'></img>
            <ul className="nav_ime">                                                              
                <li className="nav_ime"><a href="#Home">Home</a></li>
                <li className="nav_ime"><a href="#Tours">Tours</a></li>
                <li className="nav_ime"><a href="#Hotel">Hotel</a></li>
                <li className="nav_ime"><a href="#Gallery">Gallery</a></li>
                <li className="nav_ime"><a href="#Pages">Pages</a></li>
                <li className="nav_ime"><a href="#Blog">Blog</a></li>
                <li className="nav_ime"><a href="#Contact">Contact</a></li>
            </ul>
            <div className="btn">
            <button className="btne login paragraph">Login</button>
            <button className="btne  paragraph">Sign UP</button>
            </div>
         </div>
        </div>
    </nav>
    )
}
export default Nav
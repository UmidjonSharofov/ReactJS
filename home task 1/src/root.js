import React from "react";
import './root.css'
import Nav from './navbar/nav'
import Hed from './header/header'
import Secti from "./section";
import Footer from "./footer/footer";

 
function Root(){

    return (
        <div>
           <Nav/>
            <header>
                <div className="header_wrapper">
                   <navbar/>
                </div>
            </header>
            <Hed/>
            <div className="header3">
                <div className="name "><p className="black">Prev</p></div>
                <div className="name"><p>01</p></div>
                <div className="name"><p>02</p></div>
                <div className="name"><p>03</p></div>
                <div className="name"><p>04</p></div>
                <div className="name"><p className="blue">Next</p></div>    
            </div>
            <Secti/>
            <Footer/>
        </div>
    )
}
export default Root

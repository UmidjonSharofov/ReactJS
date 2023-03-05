import React, { Component } from "react";
import Header from "./Header/index";
import Mian from "./Hero/index";
import Header2 from "./Header2";
class Hero extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mian />
        <Header2/>
      </div>
    );
  }
}

export default Hero;

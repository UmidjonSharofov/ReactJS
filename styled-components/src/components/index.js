import React, { Component } from "react";
import Header from "./Header/index";
import Mian from "./Hero/index";
class Hero extends Component {
  render() {
    return (
      <div>
        <Header />
        <Mian />
      </div>
    );
  }
}

export default Hero;

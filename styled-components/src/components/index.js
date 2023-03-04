import React, { Component } from "react";
import Header from "./Header/index";
import Heros from "./index.js";
class Hero extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Heros/>
      </div>

    );
  }
}

export default Hero;

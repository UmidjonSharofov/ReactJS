import React, { Component } from "react";
import { Buttons } from "./main";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {children,wd,bg,cr,hover,bor}=this.props
    return <Buttons wd={wd} bg={bg} cr={cr} hover={hover} bor={bor}>{children}</Buttons>;
  }
}

export default Button;

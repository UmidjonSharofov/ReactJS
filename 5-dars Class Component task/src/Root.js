import React from "react";
import "./Dollar/dollar";
import './young/index'
import './calculator/inde'
import Dollar from "./Dollar/dollar";
import Yosh from "./young/index";
import Call from "./calculator/inde";



function Root() {
  return (
    <div>
      <Dollar />
      <Yosh/>
      <Call/>
    </div>
  );
}

export default Root;

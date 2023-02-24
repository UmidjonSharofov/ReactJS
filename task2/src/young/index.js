/* eslint-disable no-useless-constructor */
import React from "react";
import "./index.css";

class Yosh extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }
  render() {
    let qm = 0;
    let onchinch = (e) => {
      if(e.target.value>0){
         return qm = 2023 - e.target.value;
      }
      else {
        return "0"
      }
    };
    let clic = () => {
      this.setState({ count: `Siz ${qm} Yoshdasiz` });
    };
    return (
      <div className="boxes">
        <div className="box">
          <h2>Tug'ulgan Yilingizni Kiriting</h2>
          <input type="number" onChange={onchinch}></input>
          <button onClick={clic}>Transfer</button>
        </div>
        <h3>{this.state.count}</h3>
      </div>
    );
  }
}

export default Yosh;

/* eslint-disable react/no-direct-mutation-state */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from "react";
import "./main.css";
let obj = [{}];

export default class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shakil: "1",
      inpu: null,
      inpu1: null,
      inpu2: null,
      obj: obj,
    };
  }
  render() {
    let shakl = (e) => {
      const { value } = e.target;
      this.setState({ shakil: value });
    };
    let inp = (e) => {
      const { name, value } = e.target;
      this.setState({ [name]: value });
    };
    let cl = (a, b, c, d) => {
      console.log(c);
      let newobj = {
        id: this.state.obj.length + 1,
        shakl: a,
        rang: b,
        height: c,
        with: d,
      };
      this.setState({ obj: [...this.state.obj, newobj] });
    };
    return (
      <div>
        <div className="boxes">
          <div className="box">
            <label>divni shakli</label>
            <select onChange={shakl}>
              <option value="none">Square</option>
              <option value="50%">Circle</option>
              <option value="25px">Rounded corners!</option>
            </select>
          </div>
          <div className="box">
            <label>divni rangi </label>
            <input type="text" onChange={inp} name="inpu"></input>
          </div>
          <div className="box">
            <label>divni height</label>
            <input type="number" onChange={inp} name="inpu1"></input>
          </div>
          <div className="box">
            <label>divni Width</label>
            <input type="number" onChange={inp} name="inpu2"></input>
          </div>
          <button
            onClick={() =>
              cl(
                this.state.shakil,
                this.state.inpu,
                this.state.inpu1,
                this.state.inpu2
              )
            }
          >
            Create
          </button>
        </div>
        {this.state.obj.map((v) => (
          <div key={v.id} className="clic">
            <div
              style={{
                width: `${v.with}px`,
                height: `${v.height}px`,
                background: v.rang,
                borderRadius: v.shakl,
              }}
            ></div>
          </div>
        ))}
      </div>
    );
  }
}

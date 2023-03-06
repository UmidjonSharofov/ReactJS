/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import "./main.css";
import "./users";
import Obj from "./users";
// flags -bayroq population-aholisi continents-qtasi
export default class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        arr: [],
        inp: null,
        nul: {},
    };
}
render() {
    let chanch = (e) => {
        this.setState({ inp: e.target.value });
    };
    let inc = () => {
        let res = Obj.filter(
            (v) =>
            v.name.common.toLocaleLowerCase() ===
            this.state.inp.toLocaleLowerCase()
            );
            if(res.length<1){
                let res2={id:this.state.arr.length + 1,name:'Bundya Davlat Mavjut Emas'}
                this.setState({...this.state,nul:res2,arr:[]})
            } 
              else this.setState({ ...this.state, arr: res, nul:null });  
    };
    return (
      <div className="nav">
        <div className="inp">
          <input type={"text"} onChange={chanch} placeholder="Enter a Gountry name"></input>
          <button onClick={inc}>search</button>
        </div>
       {this.state.nul?<h4 className="h4">{this.state.nul.name}</h4>:""}
        {this.state.arr.map((v) => (
            <div key={v.name.common} className="main">
            <div className="img">
              <img src={v.flags.svg} alt="v.name.common"></img>
              <h4>State: {v.name.common}</h4>
            </div>
            <h4>State: {v.name.common}</h4>
            <h4>Population: {v.population}</h4>
            <h4>Continents: {v.continents[0]}</h4>
            <h4>Capital: {v.capital[0]}</h4>
          </div>
        ))}
      </div>
    );
  }
}

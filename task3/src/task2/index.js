/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css"

export default class  Arf extends React.Component{
    constructor(props){
        super(props)
        this.state={
            inp1:null,
            inp2:null,
            retur:null
        }
    }
    render(){
        let fun=(e)=>{
            const {value,name}=e.target
           this.setState({[name]:+value})
        }
        let onc=(a,b)=>{
            let qm=a+b
            this.setState({retur:`${qm} ortasi ${qm/2} `})
        }
        return(
           <div className="box">
            <div className="boxes">
              <span>son-1</span> 
              <input onChange={fun} type="number" name="inp1"></input> 
              <span>son-2</span> 
              <input onChange={fun} type="number" name="inp2"></input>
              <button onClick={()=> onc(this.state.inp1,this.state.inp2)}>Go</button>
            </div>
              <h2>{this.state.retur}</h2>
              <a href="https://github.com/UmidjonSharofov/ReactJS.git">Github</a>
           </div>
        )
    }

}
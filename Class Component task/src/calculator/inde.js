/* eslint-disable no-duplicate-case */
/* eslint-disable no-useless-constructor */
import React from "react";
import './main.css'
export default class Call extends React.Component {
     constructor (props){
        super(props)
        this.state={
            nm1:null,
            nm2:null,
            open:'+',
            jav:0
        }
     }
    render(){
        let chang =(e)=>{
            const {name,value}=e.target
          this.setState({[name]:+value})
        }
        let res=(e)=>{
            const {value}=e.target

          this.setState({open:value})
          console.log(value);
        }
        let clik =(nm1,nm2,open)=>{
         switch(open){
            case "+":
             this.setState({jav:nm1+nm2});
             break;
             case "-":
             this.setState({jav:nm1-nm2});
             break;
             case "*":
             this.setState({jav:nm1*nm2});
             break;
             case "/":
             this.setState({jav:nm1/nm2});
             break;
            default:
                ;

         }
        }
        let delet =()=>{
           this.setState({nm1:"",nm2:"",jav:0})
        }
        return(
             <><div className="inp">
                <input onChange={chang} value={this.state.nm1} name="nm1"></input>
                <select onChange={res}>
                    <option>+</option>
                    <option>-</option>
                    <option>*</option>
                    <option>/</option>
                </select>
                <input onChange={chang} value={this.state.nm2} name="nm2"></input>
                <span>{this.state.jav}</span>
                <button onClick={() => clik(this.state.nm1, this.state.nm2, this.state.open)}>=</button>
                <button onClick={delet}>delete</button>

            </div><a href="https://github.com/UmidjonSharofov/ReactJS.git">Github</a></>
        )
    }
}
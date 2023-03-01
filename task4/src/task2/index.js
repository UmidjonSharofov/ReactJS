import React from "react";
import './main.css'
import './users'
import Obj from "./users";
// flags -bayroq population-aholisi continents-qtasi
export default class States extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            inp:null,
            obj:false
           
        }
    }
    render (){
        let chanch =(e)=>{
          this.setState({inp:e.target.value})
          
        }
        let inc =()=>{
            let res=Obj.filter(v=> v.name.common.toLocaleLowerCase()===this.state.inp.toLocaleLowerCase())
             this.setState({...this.state, arr:res,})
        }
        // console.log(this.state.arr);
        return(
            <div  className="nav">
             <div className="inp">
                <input onChange={chanch} placeholder="Enter a Gountry name"></input>
                <button onClick={inc}>search</button>
             </div>

             {
                this.state.arr.map(v=>(
                    <div className="main">
                    <div className="img">
                      <img src={v.flags.svg} alt="v.name.common"></img>
                      <h4>State: {v.name.common}</h4>

                    </div>
                      <h4>State:  {v.name.common}</h4>
                      <h4>Population: {v.population}</h4>
                      <h4>Continents: {v.continents[0]}</h4>
                      <h4>Capital:    {v.capital[0]}</h4>
                    </div>
                ))
             }
            </div>
        )
    }
}
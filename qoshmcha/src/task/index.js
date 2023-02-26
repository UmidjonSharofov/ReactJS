import React from "react";
import './index.css'

export default class Pre extends React.Component {
   constructor(props){
     super(props)
     this.state={
        inp:0,
        inp1:null,
        inp2:null,
        qm:null,
        qosh:[]
     }
   }
   render (){
    let cang=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    let click =(a)=>{
       this.setState({qm:this.state.inp})
    }

    return(
          <div className="contener">
             <div className="boxes">
                <div className="box">
                  <h2>Budget</h2>
                  <input onChange={cang} name="inp" type="number" placeholder="Enter Total Amount"></input>
                  <button value={true} onClick={click}>Set Budget</button>
                </div>
                <div className="box1">
                    <h2>Expenses</h2>
                  <input onChange={cang}  name="inp1" type="text"  placeholder="Enter Total Amount"></input>
                  <input onChange={cang}  name="inp2" type="number"  placeholder="Enter Total Amount"></input>
                  <button>Set Budget</button>
                </div>
             </div>
             <div className="number">
                <div className="num">
                    <h3>Total Budget</h3>
                    <p>{this.state.qm?this.state.qm:0}</p>
                </div>
                <div className="num">
                <h3>Expenses</h3>
                <p></p>

                </div>
                <div className="num">
                <h3>Balance</h3>
                <p>0</p>
                </div>
             </div>
             <footer>
                <h2>Expenses List</h2>
             </footer>
          </div>
    )
   }
}
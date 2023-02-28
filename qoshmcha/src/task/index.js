/* eslint-disable no-unused-expressions */
import React from "react";
import './index.css'
let obj=[{}]
export default class Pre extends React.Component {
   constructor(props){
     super(props)
     this.state={
        inp:0,
        inp1:null,
        inp2:null,
        qm:null,
        expenses:null,
        balance:null,
        arr:obj
     }
   }
   render (){
    let cang=(e)=>{
        const {name,value}=e.target
        this.setState({[name]:value})
    }
    let click =(a)=>{
       this.setState({qm:this.state.inp})
       console.log(!this.state.izSho);
    }
    let click1 =(a,b,c)=>{
   //   !this.state.izSho
   //   this.setState({expenses:c})
   //   this.setState({balance:a-c})
   //   let newobj={id:this.state.qosh.length+1,name:b}
   //   this.setState({arr: [...this.state.arr, newobj] });
   console.log();
   }
   console.log(this.state.arr);

    return(
          <div className="contener">
             <div className="boxes">
                <div className="box">
                  <h2>Budget</h2>
                  <input onChange={cang} name="inp" type="number" placeholder="Enter Total Amount"></input>
                  <button  onClick={click}>Set Budget</button>
                </div>
                <div className="box1">
                    <h2>Expenses</h2>
                  <input onChange={cang}  name="inp1" type="text"  placeholder="Enter Total Amount"></input>
                  <input onChange={cang}  name="inp2" type="number"  placeholder="Enter Total Amount"></input>
                  <button onClick={()=>click1(this.state.inp,this.state.inp1,this.state.inp2)}>Set Budget</button>
                </div>
             </div>
             <div className="number">
                <div className="num">
                    <h3>Total Budget</h3>
                    <p>{this.state.qm?this.state.qm:0}</p>
                </div>
                <div className="num">
                <h3>Expenses</h3>
                <p>{this.state.expenses?this.state.expenses:0}</p>
                </div>
                <div className="num">
                <h3>Balance</h3>
                <p>{this.state.balance?this.state.balance:0}</p>
                </div>
             </div>
             <footer>
                <h2>Expenses List</h2>
              {/* {this.state.obj.map(v=>(
                 <div key={v.id}></div>
              ))} */}
             </footer>
          </div>
    )
   }
}
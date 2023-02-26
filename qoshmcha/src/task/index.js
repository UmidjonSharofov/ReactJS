import React from "react";
import './index.css'

export default class Pre extends React.Component {
   constructor(props){
     super(props)
     this.state={}
   }
   render (){
    return(
          <div className="contener">
             <div className="boxes">
                <div className="box">
                  <h2>Budget</h2>
                  <input placeholder="Enter Total Amount"></input>
                  <button>Set Budget</button>
                </div>
                <div className="box1">
                    <h2>Expenses</h2>
                  <input placeholder="Enter Total Amount"></input>
                  <input placeholder="Enter Total Amount"></input>
                  <button>Set Budget</button>
                </div>
             </div>
             <div className="number">
                <div className="num">
                    <h3>Total Budget</h3>
                    <p>0</p>
                </div>
                <div className="num">
                <h3>Total Budget</h3>
                    <p>0</p>
                </div>
                <div className="num">
                <h3>Total Budget</h3>
                    <p>0</p>
                </div>
             </div>
             <footer></footer>
          </div>
    )
   }
}
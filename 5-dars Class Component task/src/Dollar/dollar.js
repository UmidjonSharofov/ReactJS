import React from "react";
import "./dollar.css"

class Dollar extends React.Component {
  constructor(props){
    super(props);
    this.state={
        count:null
    }
  }
  render(){ 
    let qm=0
    let krqm=0
    let qimat=(a)=>{
     qm=+a.target.value * 15000
     krqm=a.target.value
    }
    let clik =()=>{
     this.setState({count: `Siz kiritgan ${krqm}$ O'zbek sumida ${qm} so'mini tashkil qiladi!`})
    }
    return(
        <div className="dollor">
          <div className="box">
           <><h2>Dollarni Kiriting </h2><input onChange={qimat} type="number"></input> <h2>1$ O'zbek summasida  15000 summaini tasgkil etadi</h2><button onClick={clik} >Transfer</button></>
          </div>
           <h2 className="h2">{this.state.count}</h2>
       </div>
    )
  }
}

export default Dollar
import React from "react";
import "./index.css";
let arr = [
  { id: 1, name: "Islom", status: "oq", age: 20 },
  { id: 2, name: "Nurmat", status: "", age: 20 },
  { id: 3, name: "Alisher", status: "", age: 20 },
  { id: 4, name: "Sherali", status: "", age: 20 },
];

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: arr,
      inp:null,
      inp1:null,
      inp2:null,
      inp3:null,
      selec: "name",
    };
  }
  render() {
    let statu = (e) => {
      const { value } = e.target;
      this.setState({ selec: value });
    };
    let search = (e) => {
      const { value } = e.target;
      let res = arr.filter((v) =>
        v[this.state.selec]
          .toString()
          .toUpperCase()
          .includes(value.toUpperCase())
      );
      this.setState({ ...this.state, inp: value, obj: res });
    };
    let change =(e)=>{
      const { value,name } = e.target;
      this.setState({[name]:value})
    }
    let add = (a,b,c)=>{
       let res={id:this.state.obj.length+1,name:a,status:b,age:c}
       this.setState({obj:[...this.state.obj,res]})
    }
    return (
      <>
        <h1>Webbrain Academay</h1>
        <div className="box">
          <div className="Search">
            <input onChange={search} ></input>
            <select defaultValue="name" onChange={statu}>
              <option>name</option>
              <option>id</option>
              <option>status</option>
            </select>
          </div>
          <div className="nameid">
            <h2>ID</h2>
            <h3>Name</h3>
            <h3>Status</h3>
            <h3>Age</h3>
            <h3>Edit</h3>
            <h3>Name</h3>
            {this.state.obj.map((v) => (
              <li key={v.id}>{v.name}</li>
            ))}
          </div>
          <div className="edit">
            <input name="inp1" onChange={change} placeholder="name"></input>
            <input name="inp2" onChange={change} placeholder="Status"></input>
            <input name="inp3" onChange={change} placeholder="Age"></input>
            <button onClick={()=>add(this.state.inp1,this.state.inp2,this.state.inp3)}>Add</button>
          </div>
        </div>
      </>
    );
  }
}
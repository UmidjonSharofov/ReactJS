import React from "react";
import "./index.css";
let arr = [
  { id: 1, name: "Islom",   status: "Student", age: 20 },
  { id: 2, name: "Nurmat",  status: "Programmmer", age: 20 },
  { id: 3, name: "Alisher", status: "Biologist", age: 20 },
  { id: 4, name: "Sherali", status: "Artist", age: 20 },
];

export default class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      obj: arr,
      inp: null,
      inp1: null,
      inp2: null,
      inp3: null,

      selec: "name",
      user: null,
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
    let change = (e) => {
      const { value, name } = e.target;
      this.setState({ [name]: value });
    };
    let add = (a, b, c) => {
      let res = { id: this.state.obj.length + 1, name: a, status: b, age: c };
      this.setState({ obj: [...this.state.obj, res] });
    };
    let delet = (id) => {
      let res = this.state.obj.filter((v) => v.id !== id);
      this.setState({ ...this.state, obj: res });
    };
    let obde = (v) => {
      this.setState({ ...this.state, user: v });
    };
    let addqilsih = (e) => {
      const { value, name } = e.target;
      this.setState({
        ...this.state,
        user: { ...this.state.user, [name]: value },
      });
    };
    let cilk = () => {
      let res = this.state.obj.map((v) =>
        v.id === this.state.user.id ? this.state.user : v
      );

      this.setState({ ...this.state, obj: res, user: null });
    };
    return (
      <>
        <h1>Webbrain Academay</h1>
        <div className="cantener">
          <div className="box">
            <div className="Search">
              <input placeholder="Search" onChange={search}></input>
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
            </div>
            {this.state.obj.map((v) => (
              <div className="boxes" key={v.id}>
                <div>
                  <h4>{v.id}</h4>
                </div>
                <div>
                  <p>
                    {this.state.user ? (
                      this.state.user.id === v.id ? (
                        <input
                          onChange={addqilsih}
                          name="name"
                          value={this.state.user.name}
                        ></input>
                      ) : (
                        v.name
                      )
                    ) : (
                      v.name
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {this.state.user ? (
                      this.state.user.id === v.id ? (
                        <input
                          onChange={addqilsih}
                          name="status"
                          value={this.state.user.status}
                        ></input>
                      ) : (
                        v.status
                      )
                    ) : (
                      v.status
                    )}
                  </p>
                </div>
                <div>
                  <p>
                    {this.state.user ? (
                      this.state.user.id === v.id ? (
                        <input
                          onChange={addqilsih}
                          name="age"
                          value={this.state.user.age}
                        ></input>
                      ) : (
                        v.age
                      )
                    ) : (
                      v.age
                    )}
                  </p>
                </div>
                <div className="delet">
                <i class="fa-solid fa-trash" onClick={() => delet(v.id)}></i>
                {this.state.user?.id === v?.id ? (
                  <i class="fa-solid fa-plus" onClick={cilk}></i>
                  ) : (
                    <i
                    class="fa-solid fa-pen-to-square"
                    onClick={() => obde(v)}
                    ></i>
                    
                    )}
              </div>
                    </div>
            ))}
          </div>
          <div className="adit">
            <input name="inp1" onChange={change} placeholder="name"></input>
            <input name="inp2" onChange={change} placeholder="Status"></input>
            <input name="inp3" onChange={change} placeholder="Age"></input>
            <button
              onClick={() =>
                add(this.state.inp1, this.state.inp2, this.state.inp3)
              }
            >
              Add
            </button>
          </div>
        </div>
      </>
    );
  }
}

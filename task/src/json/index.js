import React, { Component } from "react";
import { Container, Div, Nav, Hisob } from "./main";
class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      kiyim: null,
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ users: json }));
  }
  render() {
    let kiyim = () => {
      this.setState({ kiyim: "a" });
      let a = this.state.users.filter((v) => v.id < 10);
      console.log(a);
    };
    return (
      <Container>
        <Nav>
          <h1>Logo</h1>
          <ul>
            <li>Clothes for men</li>
            <li>Jewelry</li>
            <li>Household appliances</li>
            <li>Clothes for women</li>
          </ul>
          <Hisob>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>0</p>
          </Hisob>
        </Nav>
        <h1 onClick={kiyim}>kim</h1>
        {this.state.kiyim ? <Div>{<h1>aaa</h1>}</Div> : ""}
        <div
          style={{ display: "grid", gridTemplateColumns: "repeat(3, 300px)" }}
        >
          {this.state.users?.map((v) => (
            <div key={v.id}>
              <div>
                <img src={v.image} alt={v.title} />
              </div>
            </div>
          ))}
        </div>
      </Container>
    );
  }
}

export default Fetch;

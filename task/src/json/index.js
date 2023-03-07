import React, { Component } from "react";
import { Container, Div, Nav, Hisob, Container2, Header, Cart } from "./main";
class Fetch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      kiyim: null,
      men: [
        {
          category: "men's clothing",
          description:
            "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
          id: 1,
          image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
          price: 109.95,
          rating: { rate: 3.9, count: 120 },
          title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        },
        {
          category: "men's clothing",
          description:
            "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
          id: 2,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          price: 22.3,
          rating: { rate: 4.1, count: 259 },
          title: "Mens Casual Premium Slim Fit T-Shirts ",
        },
        {
          category: "men's clothing",
          description:
            "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
          id: 3,
          image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          price: 55.99,
          rating: { rate: 4.7, count: 500 },
          title: "Mens Cotton Jacket",
        },
        {
          category: "men's clothing",
          description:
            "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
          id: 4,
          image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
          price: 15.99,
          rating: { rate: 2.1, count: 430 },
          title: "Mens Casual Slim Fit",
        },
      ],
      Jewelry: null,
      appliances: null,
      women: null,
      Tv:null,
      Total:0

    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => this.setState({ users: json }));
  }
  render() {
    let kiyim = () => {
      this.setState({ Jewelry: null, appliances: null, women: null });
    };
    let jewelry = () => {
      let res = this.state.users.filter((v) => v.id > 4 && v.id < 9);
      this.setState({ Jewelry: res,appliances:null,women:null,Tv:null});
    };
    let Household =()=>{
      let res=this.state.users.filter(v=>v.id>8&&v.id<13)
      this.setState({appliances:res,Jewelry:null,women:null,Tv:null})
    }
    let Clothes =()=>{
      let res=this.state.users.filter(v=>v.id>12&&v.id<17)
      this.setState({women:res,appliances:null,Jewelry:null,Tv:null})

    }
    let total =(e)=>{
      let res=this.state.users.filter((v)=>v.id===e)
      let to=res.map((v)=>v.price)
      to=Number.parseInt(to)
      console.log(to);
      this.setState({Total:this.state.Total+ to})
    }
    console.log(this.state.Total);
    let tv=()=>{
      let res=this.state.users.filter(v=>v.id>12&&v.id<17)
      this.setState({women:res,appliances:null,Jewelry:null})
    }
    return (
      <Container>
        <Nav>
          <h1>Logo</h1>
          <ul>
            <li onClick={kiyim}>Men's clothing</li>
            <li onClick={jewelry}>Jewelry</li>
            <li onClickCapture={Household} >Household appliances</li>
            <li onClick={tv}>Clothing va Tv</li>
            <li onClick={Clothes}>Clothes for women</li>
           
          </ul>
          <Hisob>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>0</p>
          </Hisob>
        </Nav>
        <Container2>
          <Header>
            {!this.state.Jewelry&& !this.state.appliances && !this.state.women&&!this.state.Tv
              ? this.state.men.map((v) => (
                  <div key={v.id}>
                    <div className="box">
                      <div className="img">
                        <img src={v.image} alt={v.title} />
                      </div>
                      <div className="bottom">
                        <p className="maxsulot">{v.title}</p>
                        <p className="narx">${v.price}</p>
                      </div>
                      <button onClick={()=>total(v.id)}>add to cart</button>
                    </div>
                  </div>
                ))
              : ""}
              

              {
                this.state.Jewelry?.map(v=>(
                  <div key={v.id}>
                    <div className="box">
                      <div style={{width:'10px'}} className="img">
                        <img className="images" src={v.image} alt={v.title} />
                      </div>
                      <div className="bottom">
                        <p className="maxsulot">{v.title}</p>
                        <p className="narx">${v.price}</p>
                      </div>
                      <button onClick={()=>total(v.id)}>add to cart</button>
                    </div>
                  </div>
                ))
              }
              {
                this.state.appliances?.map(v=>(
                  <div key={v.id}>
                    <div className="box">
                      <div style={{width:'10px'}} className="img">
                        <img className="images" src={v.image} alt={v.title} />
                      </div>
                      <div className="bottom">
                        <p className="maxsulot">{v.title}</p>
                        <p className="narx">${v.price}</p>
                      </div>
                      <button onClick={()=>total(v.id)}>add to cart</button>
                    </div>
                  </div>
                ))
              }
              {
                this.state.women?.map(v=>(
                  <div key={v.id}>
                    <div className="box">
                      <div style={{width:'10px'}} className="img">
                        <img className="images" src={v.image} alt={v.title} />
                      </div>
                      <div className="bottom">
                        <p className="maxsulot">{v.title}</p>
                        <p className="narx">${v.price}</p>
                      </div>
                      <button onClick={()=>total(v.id)}>add to cart</button>
                    </div>
                  </div>
                ))
              }
          </Header>
          <Cart>
            <div className="box">
              <h3>My Cart</h3>
            </div>
            <div className="total">
              <h3>Total</h3>
              <p>${this.state.Total}</p>
            </div>
          </Cart>
        </Container2>
        <h1 onClick={kiyim}>kim</h1>
        {this.state.kiyim ? <Div>{<h1>aaa</h1>}</Div> : ""}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 300px)",
            padding: "200px 0",
          }}
        >
          {this.state.users?.map((v) => (
            <div key={v.id}>
              <div>
                <img src={v.image} alt={v.title} />
              </div>
            </div>
          ))}

          {this.state.men?.map((v) => (
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

import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-top: 80px;
    width: 80%;
    img{
      width: 180px;
    }
 
`
const Div = styled.div`
  display: flex;
  color: red;
`
const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color:#DAA520;
  padding: 40px;
  height: 120px;
  border-radius: 8px;
  color: #fff; 
  width: 100%;
  ul{
    display: flex;
    gap: 40px;
    font-size: 22px;
    cursor: pointer;
  }
  ul li:hover{
    color: red;
    transform: scale(1.2);
  }
  h1{
    font-size: 40px;
  }
`
const Hisob = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #fff;
    width: 120px;
    height: 50px;
    border-radius: 8px;
    gap: 20px;
    font-size: 23px;
  i {
    color: #DAA520;
  }
  p{
    background: #DAA520;
    padding: 4px 10px;
    border-radius: 50%;
  }
`
const Container2 = styled.div`
  width: 100%;
  display: flex;
  padding: 20px;
  gap: 30px;
  justify-content: space-between;
  `
const Header = styled.header`

display: grid;
grid-template-columns:1fr 1fr;
text-align: center;
align-items: center;
justify-content: center;
gap: 20px;



.box{
      min-height: 550px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #DAA520;
       gap: 20px;
       border-radius: 5px;
       text-align: center;
.img{
        width: 100%;
        height: 180px;
        display: flex;
        align-items: center;
        justify-content: center;
       }
.bottom {
        margin: 40px 0;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 110px;
        gap: 20px;
       }
p{
        font-size: 19px;
       }
.maxsulot{
        font-size: 18px;
        width: 70%;
        height: 80px;
       }
.narx{
        color: red;
        font-size: 25px;
       }
 button {
        width: 80%;
        position: relative;
        border: none;
        border-radius:5px;
        background: goldenrod;
        padding: 12px 18px;
        cursor: pointer;
        color: white;
 }    
 button:hover{
  background-color: #333;
 }
}    
`
const Cart = styled.div`
  background-color: #eee;
  border-radius: 5px;
  width: 40%;
`


export { Container, Div, Nav, Hisob, Container2, Header, Cart }
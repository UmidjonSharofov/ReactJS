import styled from 'styled-components'

const Container = styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    width: 80%;
 
`

const Nav = styled.nav`
   margin-top: 80px;
   margin-bottom: 20px;
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
    font-size: 20px;
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
    img{
      width: 120px;
    }

.images {
  width: 90px;
}
p{
  
}
.box{
      min-height: 350px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border: 1px solid #DAA520;
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
        margin: 10px 0;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 80px;
        
       }

.maxsulot{
        font-size: 18px;
        width: 70%;
        
       }
.narx{
        color: red;
        font-size: 20px;
       }
 button {
        font-size: 18px;
        width: 80%;
        position: relative;
        border: none;
        border-radius:5px;
        background: goldenrod;
        padding: 12px 18px;
        cursor: pointer;
        color: white;
        margin-bottom: 20px;
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
     display: flex;
     flex-direction: column;
     align-items: center;
     gap: 50px;
     padding: 40px;
.box {
     background-color: goldenrod;
     width: 100%;
     height: 60px;
     border-radius: 8px;
     padding: 15px;
     font-size: 22px;
     color: #fff;
  }
.total{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content:space-between;
  border-top: 2px solid black;
  padding: 20px;
  font-size: 22px;
  color: red;
}
`
const MyCart=styled.div`
display: flex;
flex-direction: column;
width: 100%;
gap: 20px;
.boxes{
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  .p{
    font-size: 14px;
    width: 40%;
    text-align: center;
  }
  .color{
    color: red;
    font-size: 20px;
  }
  i{
    color: goldenrod;
    font-size: 22px;
    cursor: pointer;
  }
}
 img{
  width: 80px;
  height: 80px;
  border-radius: 50px;
  padding: 10px;
  border: 2px solid goldenrod ;
 }
`


export { Container, Nav, Hisob, Container2, Header, Cart,MyCart }

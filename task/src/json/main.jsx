import styled from 'styled-components'

const Container =styled.div`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding-top: 80px;
    width: 80%;
  img{
    width: 100px;
  }
`
const Div =styled.div`
  display: flex;
  color: red;
`
const Nav=styled.nav`
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
const Hisob =styled.div`
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
const Container2=styled.div``


export {Container,Div,Nav,Hisob}
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
     gap: 145px;
    padding:164px  177px 0 177px; 
`
const Wrapper = styled.div` 
    max-width:1500px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 27px;
h2{
    width: 265px;
}
p{
  width: 228px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: var(--primary-gray);
  padding: 27px 0 33px 0;
  color: black;
}
`
const Boxes = styled.div`
background-color:rgba(53, 115, 110, 0.1);
border-radius: 20px;
width: 260px;
height: 307px;
display: flex;
align-items: center;
flex-direction: column;
position: relative;
top: 50px;
`
const Product = styled.img`
 position: relative;
 top: -110px;
`
const Box = styled.div`
  
p{
    position: relative;
    top: -50px;
    padding: 0;
    text-align: center;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;  
}
`
const Product2 = styled.img`
    width:207px;
    height: 240px;

`
const P = styled.div`
padding: 44px 0;
  p{
    padding: 0px;
    text-align: center;
  }
`
const Pilus = styled.div`
    position: relative;
 
   
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 50%;
    top: -25px;
    padding: 10px 18px;
    font-size: 20px;
`
const Wrapper2 = styled.div`    
    max-width:1500px ;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 27px;
    padding: 222px 0;
`
const Divp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
p{
    width: 444px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
}
`
const Main =styled.div``
export { Container, Wrapper, Boxes, Product, Box, Product2, P, Pilus, Wrapper2, Divp,Main }
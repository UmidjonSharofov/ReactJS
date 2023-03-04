import styled from "styled-components";

const Buttons = styled.button`
  width: ${(props) => (props.wd ? props.wd+"px" : "122px")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border: ${(proos)=>proos.bor?proos.bor+"px"+'solid'+"#fff":'none'};
  height: 50px;
  border-radius:50px;
  color: ${(props)=>props.cr?props.cr:""};
  :hover{
    background: none;
    border: 1px solid ${(props)=>props.hover?props.hover:'black'};
    color: var(--primary-white);
  }
`;

export { Buttons };

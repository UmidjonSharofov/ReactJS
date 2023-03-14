import styled from "styled-components";

const Main=styled.main`
  padding: 100px 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  .main{
    display: flex;
    input{
        width: 200px;
    }
  }
`
const Contener = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 80%;
  margin: auto;
  .box {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  div{
    display: flex;
    align-items: center;
    margin-left: 30px;
    gap: 10px;
  }
`;

export { Contener, Main};

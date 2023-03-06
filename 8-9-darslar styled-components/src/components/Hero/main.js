import styled from "styled-components";

const Container = styled.main`
  width: 100%;
  background-color: var(--primary-green);
  padding-top: 102px;
`;
const Wrapper = styled.div`
  max-width: 1500px;
  width: 100%;
  padding: 0 178px;
  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  h1 {
    max-width: 419px;
  }
`;
Content.Btns = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 117px 0;
`;
const Image= styled.img`
  width: 710px;
`
export { Container, Wrapper, Content,Image};

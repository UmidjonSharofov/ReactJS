import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/svg/Furni..svg";
const Container = styled.header`
  width: 100%;
  background: var(--primary-green);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 49px 178px;
  margin: auto;
  border: 1px solid red;
`;
const Logo = styled(logo)``;
const Left = styled.div``;

export { Container, Wrapper, Logo, Left };

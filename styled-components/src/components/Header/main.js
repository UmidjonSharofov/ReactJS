import styled from "styled-components";
import { ReactComponent as logo } from "../../assets/svg/Furni..svg";
import { ReactComponent as user } from "../../assets/svg/User.svg";
import { ReactComponent as cart } from "../../assets/svg/Cart.svg";
const Container = styled.header`
  width: 100%;
  background: var(--primary-green);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 1500px;
  width: 100%;
  padding: 49px 178px;
  margin: auto;
`;
const Logo = styled(logo)``;
const User = styled(user)``;
const Cart = styled(cart)``;
const Left = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 95px;
`;
const Navigation = styled.nav`
  display: flex;
  align-items: flex-end;

  ul {
    display: flex;
    align-items: flex-end;
    gap: 43px;
    li {
      font-family: "Inter";
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 19px;
      color: var(--primary-white);
      height: 30px;

      :hover {
        border-bottom: 5px solid var(--primary-yellow);
        padding-bottom: 7px;
      }
    }
  }
`;
const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export { Container, Wrapper, Logo, Left, Navigation, User, Cart, Icons };

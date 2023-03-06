import React, { Component } from "react";
import product from "../../assets/img/product-1.png";
import product2 from "../../assets/img/product-2 (1).png";
import Button from "../button/index";
import product3 from "../../assets/img/product-3.png";

import {
  Container,
  Wrapper,
  Boxes,
  Product,
  Box,
  Product2,
  P,
  Pilus,
  Wrapper2,
  Divp,
  Main,
  Text,
  Truck,
  Choose,
  Shop,
  Support,
  Return
} from "./main";

class Header2 extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <div>
            <h2>Crafted with excellent material.</h2>
            <p>
              Donec mattis porta eros, aliquet finibus risus interdum at. Nulla
              vivethe as it was for us to know what was to be done.
            </p>
            <Button cr="#fff" bg="black">
              Explore
            </Button>
          </div>
          <Boxes>
            <Product src={product} alt="product" />
            <Box>
              <p>Nordic CHAIR</p>
              <p>$50.00</p>
            </Box>
            <Pilus>+</Pilus>
          </Boxes>
          <div>
            <Product2 src={product2} alt="" />
            <P>
              <p>Kruzo Aero Chair</p>
              <p>$78.00</p>
            </P>
          </div>
          <div>
            <Product2 height="40px" src={product3} />
            <P>
              <p>Ergonomic Chair</p>
              <p>$43.00</p>
            </P>
          </div>
        </Wrapper>
        <Wrapper2>
          <Main>
            <Divp>
              <h2>Why Choose Us</h2>
              <p>
                Donec mattis porta eros, aliquet finibus risus interdum at.
                Nulla vivethe as it was for us to know what was to be done. the
              </p>
            </Divp>
            <Choose>
              <Text>
                <Truck />
                <h3>Fast & Free Shipping </h3>
                <p>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </p>
              </Text>
              <Text>
                <Shop />
                <h3>Fast & Free Shipping </h3>
                <p>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </p>
              </Text>
              <Text>
                <Support/>
                <h3>Fast & Free Shipping </h3>
                <p>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </p>
              </Text>
              <Text>
               <Return/>
                <h3>Fast & Free Shipping </h3>
                <p>
                  Donec mattis porta eros, aliquet finibus risus interdum at.
                  Nulla vivethe as it was
                </p>
              </Text>
            </Choose>
          </Main>
        </Wrapper2>
      </Container>
    );
  }
}

export default Header2;

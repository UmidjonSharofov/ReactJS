import React, { Component } from "react";
import { Container, Wrapper, Content, Image } from "./main";
import Heroimg from '../../assets/img/couch 1.png'
import Button from "../button";
class Mian extends Component {
    render() {
        return (
            <Container>
                <Wrapper>
                    <Content>
                        <h1>Modern Interior
                            Design Studio</h1>
                        <Content.Btns>
                            <Button bg='#F9BF29;' wd="150">Shop Now</Button>
                            <Button bor="1" bg="none"  wd="132">Explore</Button>
                        </Content.Btns>
                    </Content>
                    <Image src={Heroimg} alt="Heroimg"></Image>
                </Wrapper>
            </Container>
        );
    }
}

export default Mian;

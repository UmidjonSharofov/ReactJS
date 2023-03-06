import React, { Component } from 'react'
import { Container,Wrapper,Logo,Left,Navigation,User,Cart,Icons} from './main'

class Header extends Component {
    render () {
        return (
            <div>
                <Container>
                 <Wrapper>
                 <Logo/>
                 <Left>
                    <Navigation>
                        <ul>
                            <li>Home</li>
                            <li>About us</li>
                            <li>Services</li>
                            <li>Blog</li>
                            <li>Contac us</li>
                        </ul>
                    </Navigation>
                    <Icons>
                    <User/>
                    <Cart/>
                    </Icons>
                 </Left>
                 </Wrapper>
                </Container>
            </div>
        )
    }
}

export default Header
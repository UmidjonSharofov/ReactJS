import React, { Component } from 'react'
import { Container,Wrapper,Logo,Left} from './main'

class Header extends Component {
    render () {
        return (
            <div>
                <Container>
                 <Wrapper>
                 <Logo/>
                 <Left>a</Left>
                 </Wrapper>
                </Container>
            </div>
        )
    }
}

export default Header
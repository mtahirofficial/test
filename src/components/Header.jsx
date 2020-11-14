import React, { Component } from 'react'
// import CustomButton from './Buttons'
import { Container } from 'reactstrap';
import MyNav from './MyNav';

class Header extends Component{
    constructor(){
        super()
        this.state = {
            buttonLabel: ''
        }
    }
    render(){
        
        return(
            <div style={{backgroundColor: '#F7F8F9'}} className='' >
                <Container className="themed-container">
                    <MyNav />
                </Container>
            </div>
        )
    }
}

export default Header;
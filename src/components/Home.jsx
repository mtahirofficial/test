import React, {Component} from 'react'
// import Houses from "./Houses";
import { Container } from 'reactstrap';
import Recommendations from './Recommendations';

export default class Home extends Component{
    render(){
        return(
            <div>
                <Container className="themed-container">
                    {/* <Houses /> */}
                    <Recommendations />
                </Container>
            </div>
        )
    }
}
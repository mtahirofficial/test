import React from 'react'
import { Redirect, Route } from 'react-router-dom';
import firebase from '../firebase/firebase'

export default class PrivateRoute extends React.Component{
    constructor(){
        super()
        this.state = {
            isLoded: false,
        }
    }
    componentDidMount(){
        // var name, email, photoUrl, uid, emailVerified;
            this.setState({
            user:firebase.auth().currentUser,
            isLoded: true,
            })
            console.log(this.state.user)
        }
    render(){
        const Sell = this.props.component
        return(
            
            <Route path={this.props.path} component={(props) =>
                this.state.user && this.state.user.email ? (<div><Sell {...props} /></div>)
                    : (
                        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
                    )
            } />
        )
    }
}
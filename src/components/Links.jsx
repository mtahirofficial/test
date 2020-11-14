import React from 'react'
import {Link} from 'react-router-dom'

class CustomLink extends React.Component {
    render(){
        return(
            <Link style={this.props.linkStyle} to={this.props.to}>{this.props.text}</Link>
        )
    }
}

export default CustomLink;
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button } from 'reactstrap'



const CustomButton = (props) => {

        return(
            <Button style={props.btnStyle} className='m-1' outline color={props.color} onClick={()=> props.handleClick()}>
                <FontAwesomeIcon icon={props.icon} /> {props.text}
            </Button>
        )
    }


// class SignUpButton extends Component{
//     render(){
//         return(
//             <Button className='m-1' color={this.props.color} onClick={
//                 () => { 
//                     handleClick('This is Signup')
//                 }
//             }>
//                 {this.props.text}
//             </Button>
//         )
//     }
// }
export default CustomButton

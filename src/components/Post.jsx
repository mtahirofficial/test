import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const postStyle = {
  minWidth: '200px',
  width: 'auto',
  height: 'auto',
  display: 'inline-block',
  marginTop: '5px'
}
const imageStyle = {
  padding: '10px'
}
const heartStyle = {
  position: 'absolute',
  right: '5px',
  top: '5px',
  fontSize: '30px',
  zIndex: '999'
}

class Post extends React.Component {
  constructor(){
    super()
    this.state = {
      isLogin : true,
      isFavourited: false,
      icon: 'far'
    }
  }
  render(){

  this.handleFavourite = () => {
    if(
      this.state.isLogin === true
    ){
        this.setState({
          isFavourited: !this.state.isFavourited
      })
    } else {
    }
  }
  

  return (
      <Card style={postStyle}>
        <FontAwesomeIcon className='class1' style={heartStyle} icon={[this.state.isFavourited ? 'fas' : 'far', 'heart']} onClick={() => {this.handleFavourite()}} />
        <CardImg style={imageStyle} top width="100%" src={this.props.imageSrc} alt={this.props.altVal} />
        <CardBody style={{padding: '10px'}}>
          <CardTitle>
            <h4>
              {this.props.price}
            </h4>
          </CardTitle>
          <CardSubtitle>
            <h6>
              {this.props.specification}
            </h6>
          </CardSubtitle>
          <CardText>
              {this.props.location}
          </CardText>
        </CardBody>
      </Card>
    
  );
  }
};

export default Post;
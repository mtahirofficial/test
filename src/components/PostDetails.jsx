import React, {Component} from 'react'
import { Row, Col, Table, Container } from 'reactstrap'
import './css/PostDetails.css'
import Post from './Post'
import image5 from '../images/05.jpg'
import CustomLink from './Links'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import image from '../images/06.jpg'
import  CustomButton from './Buttons'
import { faPhone, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';


class PostDetaials extends Component{
    render(){
        
        return(
            <div>
                <Container>
                    <Row xs='1'>
                        <Col xs='12' md='7'>
                            <Row>
                                <Col xs='12'>
                                    <div className='cover'>
                                        <Cover imgSrc={image5} imgAlt='Cover' imgWidth='100%' imgHeight='100%' />
                                    </div>      
                                    <Description description='Best location kenchi phatak ferozpur road 80 Lac Price' />
                                    <RelatedAds />
                                </Col>
                            </Row>
                        </Col>
                        <Col xs='12' md='5'>
                            <Price 
                            price='9,500,000' 
                            specification='5 Bds - 6 Ba - 5 Marla' 
                            location='House Is Available For Sale In D H A 9 Town Lahore' 
                            sellerLocation='DHA 9 Town, Lahore, Punjab'
                            postDate='Sep 15'
                            />
                            <SellerContact 
                            altValue='Seller Image'
                            sellerName='Seller Name'
                            phone='03001234567'
                            />
                        </Col>
                        
                    </Row>
                </Container>
            </div>
        )
    }
}

class Description extends Component{
    render(){
        return(
            <div className='descrption-container'>
                <h4>Details</h4>
                <Row>
                    <Col xs='12' md='6'>
                        <Table>
                            <tbody>
                                <tr>
                                    <td style={{paddingRight: '80px'}}>Bedrooms</td>
                                    <td style={{paddingRight: '80px'}}>3</td>
                                </tr>
                                <tr>
                                    <td style={{paddingRight: '80px'}}>Area unit</td>
                                    <td style={{paddingRight: '80px'}}>Marla</td>
                                </tr>
                                <tr>
                                    <td style={{paddingRight: '80px'}}>Furnished</td>
                                    <td style={{paddingRight: '80px'}}>No</td>
                                </tr>
                            </tbody>
                         </Table>
                    </Col>
                    <Col xs='12' md='6'>
                        <Table>
                            <tbody>
                                <tr>
                                    <td style={{paddingRight: '80px'}}>Bathrooms</td>
                                    <td style={{paddingRight: '80px'}}>3</td>
                                </tr>
                                <tr>
                                    <td style={{paddingRight: '80px'}}>Area</td>
                                    <td style={{paddingRight: '80px'}}>400</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
                    
                <hr/>
                <h4>Description</h4>
                <p>{this.props.description}</p>
            </div>
        )
    }
}

class RelatedAds extends Component{
    render(){
        
        return(
            <div className='ad'>
                <Row>
                    <Col xs='12'>
                        <h4>Related Ads</h4>
                        <Row>
                            <Col xs='4'>
                                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to='/house-001' text={<Post  imageSrc={image5} name='image1' price='Rs 9,500,000' specification='3 Bds - 3 Ba - 235 Square Yards' altVal='3 Bds - 3 Ba - 235 Square Yards' location='Bahria Town Karachi, Precinct 31 235sq yards Villa' />} />
                            </Col>
                            <Col xs='4'>
                                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to='/house-002' text={<Post  imageSrc={image5} name='image2' price='Rs 9,500,000' specification='3 Bds - 3 Ba - 235 Square Yards' altVal='3 Bds - 3 Ba - 235 Square Yards' location='Bahria Town Karachi, Precinct 31 235sq yards Villa' />} />
                            </Col>
                            <Col xs='4'>
                                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to='/house-003' text={<Post  imageSrc={image5} name='image3' price='Rs 9,500,000' specification='3 Bds - 3 Ba - 235 Square Yards' altVal='3 Bds - 3 Ba - 235 Square Yards' location='Bahria Town Karachi, Precinct 31 235sq yards Villa' />} />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

class Price extends Component{
    constructor(){
        super()
        this.state = {
          isLogin : true,
          isFavourited: false
        }
      }
    render(){
        const heartStyle = {
            position: 'absolute',
            right: '15px',
            top: '5px',
            fontSize: '30px',
            cursor: 'pointer',
            zIndex: '999'
          }

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
        return(
            <div className='price'>
                <Row>
                    <Col xs='12'>
                    <FontAwesomeIcon style={heartStyle} icon={[this.state.isFavourited ? 'fas' : 'far', 'heart']} onClick={() => {this.handleFavourite()}} />
                        <h1>
                            Rs {this.props.price}/-
                        </h1>
                        <h6>
                            {this.props.specification}
                        </h6>
                        <p>
                            {this.props.location}
                        </p>
                        <Row>
                            <Col xs='9'>
                                <p>
                                    {this.props.sellerLocation}
                                </p>
                            </Col>
                            <Col xs='3'>
                                <p>
                                    {this.props.postDate}
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        )
    }
}

class SellerContact extends Component{
    constructor(){
        super()
        this.state = {
            inputType: true
        }
    }
    handleShowPhone = () => {
        this.setState(
            {
                inputType : !this.state.inputType
            }
        )
    }
    render(){
        return(
            <div className="sellerContacr">
                <Row>
                    <Col xs='12'>
                        <Container>
                            <h4>Seller Description</h4>
                            <div style={{marginTop: '10px', maxWidth: '380px'}}>
                                <img className='sellerImage' src={image} alt={this.props.altValue}  />
                                <h6 style={{display: 'inline-block', margin: '0px 8px 0px'}} >{this.props.sellerName}</h6>
                            </div>
                            <div style={{marginTop: '10px', maxWidth: '100%'}}>
                                <CustomButton color='success' text='Contact Seller' btnStyle={{width: '100%' }} icon={faPhoneVolume} />
                                <FontAwesomeIcon icon={faPhone} className='ml-3' />
                                <input className='phone' type={
                                    this.state.inputType ? 'password' : 'text'
                                } value={this.props.phone} disabled/>
                                <span className='showPhone' onClick={()=> this.handleShowPhone()}>
                                    Show Phone
                                </span>
                            </div>
                        </Container>
                    </Col>
                </Row>
            </div>
        )
    }
}

const Cover = (props) => {
    return(
            <img src={props.imgSrc} alt={props.imgAlt} width={props.imgWidth} height={props.imgHeight}  />
    )
}

function mapStateToProps(store){
    return (
      {
        post: store.postReducer[store.postReducer.length-1]
      }
    )
  }
export default connect(mapStateToProps, null)(PostDetaials);

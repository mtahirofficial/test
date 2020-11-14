import React, {Component} from 'react'
import { Container, Row, Col } from 'reactstrap'
import CustomList from './CustomList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default class Footer extends Component{
    render(){
        const footerStyle = {
            backgroundColor: '#EBEEEF',
            height: 'auto',
            minHeight: '150px',
            
        }
        const socialIconStyle = {
            textDecoration: 'none',
            color: '#557477',
            margin: '5px',
            fontSize: '25px'
        }
        const lowerFooter={
            backgroundColor: '#002F34',
            color: 'white'
        }

        const currentYear = new Date().getFullYear()
        return(
            // style={{ position:'absolute', bottom: '0', width: '100%'}}
            <div>
                <div className='mt-5' style={footerStyle}>
                    <Container>
                        <Row>
                            <Col className='text-left mt-3' xs='3'>
                                <h6>POPULAR CATEGORIES</h6>
                                <CustomList listItems={['Cars','Flats for rent','Jobs','Mobile Phone']} />
                            </Col>
                            <Col className='text-left mt-3' xs='3'>
                                <h6>TRENDING SEARCHES</h6>
                                <CustomList listItems={['Bikes','Watches','Books','Dogs']} />
                            </Col>
                            <Col className='text-left mt-3' xs='3'>
                                <h6>ABOUT US</h6>
                                <CustomList listItems={['About Esale group','Contact Us', 'Help', 'Legal and privacy information']} />
                            </Col>
                            <Col className='text-right mt-3' xs='3'>
                                <h6>FOLLOW US</h6>
                            <a className='social' style={socialIconStyle} target="_blank" rel='noopener noreferrer' title="Like us" href='https://www.facebook.com/FMDevAndDesign/'> <FontAwesomeIcon icon={['fab', 'facebook']} /></a>
                            <a className='social' style={socialIconStyle} target="_blank" rel='noopener noreferrer' title="Subscribe us" href='https://www.youtube.com/channel/UCX7VhlHMJT9BXLSoDKGWocg' ><FontAwesomeIcon icon={['fab', 'youtube']} /></a>
                            <a className='social' style={socialIconStyle} target="_blank" rel='noopener noreferrer' title="Follow us" href='https://www.insagram.com/'> <FontAwesomeIcon icon={['fab', 'instagram']} /></a>
                            <a className='social' style={socialIconStyle} target="_blank" rel='noopener noreferrer' title="Follow us" href='https://www.twitter.com/' ><FontAwesomeIcon icon={['fab', 'twitter']} /></a>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={lowerFooter}>
                    <Container>
                        <Row className='p-3'>
                            <Col className='text-left pl-3' xs='6'>
                                Esale.com <FontAwesomeIcon icon={['far', 'copyright']} /> {currentYear}
                            </Col>
                            <Col className='text-right'  xs='6'>
                                Developed By: <a style={{color: 'white', fontWeight: '600'}} href='https://www.facebook.com/FMDevAndDesign/' target='_blank' rel='noopener noreferrer' title="Visit Us" >fm dev&design</a>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        )
    }
}
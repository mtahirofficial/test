import React, {Component} from 'react'
import CustomLink from './Links';
import Post from './Post'
import image1 from '../images/01.jpg'
import image2 from '../images/02.jpg'
import image3 from '../images/03.jpg'
import image4 from '../images/04.jpg'
import { Col, Row } from 'reactstrap';


class Houses extends Component{
    render(){
        const divStyle = {
            padding: '15px',
            marginTop: '10px',
            backgroundColor: '#F8F9FA',
            width: '100%',
            height: 'auto'
        }
        return(
            <div style={divStyle}>
                <h2>More on Houses</h2>
                <Row>
                    <Col xs='3'>
                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }} to='/house-001' text={<Post  imageSrc={image1} name='image1' price='Rs 9,500,000' specification='3 Bds - 3 Ba - 235 Square Yards' altVal='3 Bds - 3 Ba - 235 Square Yards' location='Bahria Town Karachi, Precinct 31 235sq yards Villa' />} />
                    </Col>
                    <Col xs='3'>
                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }} to='/house-002' text={<Post  imageSrc={image2} name='image2' price='Rs 4,500,000' specification='4 Bds - 3 Ba - 275 Square Yards' altVal='4 Bds - 3 Ba - 275 Square Yards' location='Bahria Town Lahore, Precinct 35 275sq yards Villa' />} />
                    </Col>
                    <Col xs='3'>
                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }} to='/house-003' text={<Post  imageSrc={image3} name='image3' price='Rs 7,506,000' specification='2 Bds - 3 Ba - 215 Square Yards' altVal='2 Bds - 3 Ba - 215 Square Yards' location='Bahria Town Islamabad, Precinct 21 215sq yards Villa' />} />
                    </Col>
                    <Col xs='3'>
                <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }} to='/house-004' text={<Post  imageSrc={image4} name='image4' price='Rs 8,518,200' specification='3 Bds - 3 Ba - 235 Square Yards' altVal='3 Bds - 3 Ba - 235 Square Yards' location='Bahria Town Karachi, Precinct 31 235sq yards Villa' />} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Houses;
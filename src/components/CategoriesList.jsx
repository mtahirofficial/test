import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Container,
} from 'reactstrap';
import CustomLink from './Links';

const CategoriesList = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className='mb-3'>
      <Container className="themed-container">
      <Navbar light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <CustomLink linkStyle={{ color: '#138496', padding: '10px' }}  to='/mobile-phones' text='Mobile Phones' /> 
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to='/cars' text='Cars' />
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to="/motorcycles" text='Motor Cycles'/>
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to="/houses" text='Houses'/>
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to="/tv-video-audio" text='TV-Video-Audio'/>
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to="/tablets" text='Tablets'/>
            </NavItem>
            <NavItem>
              <CustomLink  linkStyle={{ color: '#138496', padding: '10px' }}  to="/lands-plots" text='Lands & Plots'/>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
            </Container>
    </div>
  );
}

export default CategoriesList;
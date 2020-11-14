import React, { useState } from 'react';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, ButtonDropdown , DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import Logo from './Logo'
import Search from './Search'
import Accounts from './Accounts';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { logoutUser } from '../store/actions/Actions';
import firebase from '../config/firebase/firebase'
import { faAd, faComment, faPlus, faQuestionCircle, faSignInAlt, faSignOutAlt, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import CustomLink from './Links'

const MyNav = (props) => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(!dropdownOpen);
  const toggleNavbar = () => setCollapsed(!collapsed);

  const signout = () => {
    firebase.auth().signOut().then(function() {
      window.location = '/'
      firebase.database().ref('/user/' + props.uid + '/isLogged').set(false)
      firebase.database().ref('/user/' + props.uid).once('value', function(data){
        // console.log(data.val().isLogged)
        props.changeStateToReducer(data.val())
      })
    }).catch(function(error) {
      alert(error)
    });
  }
  return (
    <div>
      <Navbar color="faded" light expand='md'>
      <Logo height="96px" width="96px" to="/" />
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <Search />
                </NavItem>
                
                {props.isLogged?
                    <ButtonDropdown style={{fontSize: '30px'}} nav className='m-2' isOpen={dropdownOpen} toggle={toggle}>
                      <DropdownToggle caret nav color='info'>
                        {props.displayName}
                      </DropdownToggle>
                      <DropdownMenu>
                          <DropdownItem >
                            <div>
                              <p style={{color: '#5C7A7D', marginBottom: '0px'}}>Hellow,</p>
                              <h5>hmtahirs1</h5>
                              <p style={{textDecoration: 'underline', fontSize: '12px'}}>View and edit profile</p>
                            </div>
                          </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem><FontAwesomeIcon icon={faPlus} /> <CustomLink to='/post' text='Sell' linkStyle={{ textDecoration: 'none'}} /> </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem><FontAwesomeIcon icon={faAd} /> My Ads</DropdownItem>
                        <DropdownItem><FontAwesomeIcon icon={faComment} /> Chats</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem><FontAwesomeIcon icon={faQuestionCircle} /> help</DropdownItem>
                        <DropdownItem><FontAwesomeIcon icon={faSlidersH} /> Settings</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem onClick={signout}><FontAwesomeIcon icon={faSignOutAlt} /> Logut</DropdownItem>
                      </DropdownMenu>
                    </ButtonDropdown> 
                  :
                  <NavItem>
                    <Accounts buttonLabel='Login' color='secondary' icon={faSignInAlt} />
                    <Accounts buttonLabel='Signup' color='info' icon={faSignOutAlt} />
                  </NavItem>
                }
                </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

function mapStateToProps(user) {
  
  return ( 
    {
      displayName: user.userReducer.displayName,
      email: user.userReducer.email,
      emailVerified: user.userReducer.emailVerified,
      photoUrl: user.userReducer.photoUrl,
      isAnonymous: user.userReducer.isAnonymous,
      uid: user.userReducer.uid,
      providerData: user.userReducer.providerData,
      isLogged: user.userReducer.isLogged
    }
   )
}
function mapDispatchToProps(dispatch) {
  return ({
      changeStateToReducer: (user) => {
          dispatch(logoutUser(user))
      }
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(MyNav)
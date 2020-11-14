import React, { useState } from 'react';
import { Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import CustomButton from './Buttons';
import Slider from './Slider';
import firebase from '../config/firebase/firebase'
import { connect } from 'react-redux';
import { email_login, facebook_login, userLogin } from '../store/actions/Actions.js'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Accounts = (props) => {
  const [condition, setCondition] = useState(false)
  const [mail, setMail] = useState('')
  const [password, setPassword] = useState('')
  const [modal, setModal] = useState(false);


  
  const {
    buttonLabel,
    className,
    color,
    icon,
    email_login,
    facebook_login
  } = props;

  const toggle = () => setModal(!modal);

  const changeCondition = () => setCondition(!condition)

  const handleChangeMail = (e) => setMail(e.target.value)
  
  const handleChangePassword = (e) => setPassword(e.target.value)



 
  const continueWithEmail = () => {
    let currentUser = {
      displayName: '',
      email: '',
      emailVerified: '',
      photoUrl: '',
      isAnonymous: '',
      uid: '',
      providerData: '',
      isLogged: ''
    }
    if(mail === ''){
      alert('Please provide your email first.')

    } else if (password === ''){
      alert('Please enter password for your account.')
    }
    else{
      if(buttonLabel === 'Login')
      {
          return firebase.auth().signInWithEmailAndPassword(mail, password)
          .then(
            (user) => {
              currentUser.displayName = user.user.displayName
              currentUser.email = user.user.email
              currentUser.emailVerified = user.user.emailVerified
              currentUser.isAnonymous = user.user.isAnonymous
              currentUser.uid = user.user.uid
              currentUser.providerData = user.user.providerData
              currentUser.isLogged = true
              changeCondition()
              firebase.database().ref('/user/' + currentUser.uid).set(currentUser)
              firebase.database().ref('/user/' + currentUser.uid).once('value', (data) => {
  
                props.changeStateToReducer(data.val())
              })
            }
            
          )
          .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(errorCode, errorMessage)
          });
      
      }
      else if (buttonLabel === 'Signup')
      {
        
        firebase.auth().createUserWithEmailAndPassword(mail, password)
        .then(
          (user) => {
            let abc = user.user.email
            let username = abc.slice(0, abc.indexOf('@'))
            // console.log(username);
            
            currentUser.displayName = username
            currentUser.email = user.user.email
            currentUser.emailVerified = user.user.emailVerified
            currentUser.isAnonymous = user.user.isAnonymous
            currentUser.uid = user.user.uid
            currentUser.providerData = user.user.providerData
            currentUser.isLogged = true
            changeCondition()
            firebase.database().ref('/user/' + currentUser.uid).set(currentUser)
            firebase.database().ref('/user/' + currentUser.uid).on('value', (snapshot) => {
              // console.log(snapshot.val())
              props.changeStateToReducer(snapshot.val())
            })

          }
        )     
        .catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorCode, errorMessage)
        });
      }
      else {
        console.log('No valid value is entered.')
      }
    }
  }
  return(
    <div style={{display: 'inline-block'}}>
        <CustomButton text={buttonLabel} icon={icon} color={color} handleClick={toggle} btnStyle={{width: '95%' }} />
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle} >
          </ModalHeader>
          <ModalBody>
            <Slider imgWidth='50%' imgHeight='50%' />
          </ModalBody>
            <Row>
              <Col xs='12' className='text-center' >
              {condition
              ?
              <div>

                <input className='emailInput mb-1' type='email' name='email' placeholder='Enter your email' onChange={handleChangeMail} /><br />
                <input className='passwordInput' type='password' name='password' placeholder='Enter your password' onChange={handleChangePassword} /><br />
                <CustomButton text='Next' color='info' handleClick={()=> email_login(mail, password, buttonLabel)} btnStyle={{width: '25%' }} />
                {/* <CustomButton text='Next' color='info' btnWidth='150px' handleClick={continueWithEmail} btnStyle={{width: '25%' }} /> */}
                <CustomButton text='Cancel' color='danger' handleClick={changeCondition} btnStyle={{width: '25%' }} />
                <hr />
              </div>
                :
                <CustomButton text='Continue with Email' color='info' icon={faEnvelope} btnStyle={{width: '50%' }} handleClick={changeCondition} />
                
              }

              </Col>
              <Col xs='12' className='text-center' >
            <CustomButton text='Continue with Facebook' color='info' handleClick={()=> facebook_login()} icon={faFacebook} btnStyle={{width: '50%' }} />
              </Col>
              <Col xs='12' className='text-center' >
            <CustomButton text='Continue with Google' color='info' icon={faGoogle} btnStyle={{width: '50%' }} />
              </Col>
            </Row>
            <div style={{margin: '20px auto'}} >
            We won't share your personal information with anyone
            </div>
        </Modal>
    </div>
  )
}

function mapStateToProps(user) {
  return ({
      displayName: user.userReducer.displayName,
      email: user.userReducer.email,
      emailVerified: user.userReducer.emailVerified,
      photoUrl: user.userReducer.photoUrl,
      isAnonymous: user.userReducer.isAnonymous,
      uid: user.userReducer.uid,
      providerData: user.userReducer.providerData,
      isLogged: user.userReducer.isLogged
  })
}
const mapDispatchToProps = (dispatch) => ({
      // changeStateToReducer: (currentUser) => {
          // dispatch(userLogin(currentUser))
          // console.log(currentUser)
          email_login: (mail, password, buttonLabel) => dispatch(email_login(mail, password, buttonLabel)),
          facebook_login: () => dispatch(facebook_login())

      // }
  })

export default connect(mapStateToProps, mapDispatchToProps)(Accounts)
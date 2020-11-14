import actiontypes from '../constants/Constants.js'
import firebase from '../../config/firebase/firebase'
import FacebookAuthProvider from 'firebase'

export function userLogin(user){
    return dispatch => {
        dispatch({
            type: actiontypes.userLogin,
            payload: user
        })
    }
}
export function logoutUser(user){
    return dispatch => {
        dispatch({
            type: actiontypes.logoutUser,
            payload: user
        })
    }
}
export function savePost(post){
    return dispatch => {
        dispatch({
            type: actiontypes.savePost,
            payload: post
        })
    }
}
export function email_login(mail, password, buttonLabel){
    return (dispatch) => {
        if(buttonLabel === 'Login')
      {
          return firebase.auth().signInWithEmailAndPassword(mail, password)
          .then(
            (user) => {
                console.log(user.user)
            //   firebase.database().ref('/user/' + user.uid).set(user)
            //   firebase.database().ref('/user/' + user.uid).once('value', (data) => {
            //   })
            dispatch({
                type: actiontypes.userLogin,
                payload: user
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
              console.log(user.user.displayName)
            let abc = user.user.email
            let username = abc.slice(0, abc.indexOf('@'))
            user.user.updateProfile({
                displayName: username,
                // photoURL: "https://example.com/jane-q-user/profile.jpg"
            })
            console.log(user.user.displayName)
            firebase.database().ref('/user/' + user.uid).set(user)
            // firebase.database().ref('/user/' + user.uid).on('value', (snapshot) => {
            // })
            dispatch({
                type: actiontypes.userLogin,
                payload: user
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

export const facebook_login = () => {
  return(dispatch) => {
    var provider = new firebase.auth.FacebookAuthProvider()
    firebase.auth().signInWithPopup(provider)
    .then((result) => {
      let token = result.credential.accessToken
      let user = result.user
      console.log("Token", token, "User", user) 
    }).catch((error) => {
      let code = error.code;
      let message = error.message;
      console.log(code, message)
    })
  }
}
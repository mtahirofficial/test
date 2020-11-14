// import React, { Component } from "react"
// import firebase from '../firebase/firebase'
// import { Provider } from 'react-redux'
// import store from '../../store/index'
// import { connect } from 'react-redux'
// import { userLogin } from '../../store/actions/Actions'

// class UserProvider extends Component {
//   state = {
//     user: null
//   };

//   componentDidMount = () => {
//     firebase.auth().onAuthStateChanged(userAuth => {
//       this.setState({ user: userAuth});
//     });
//     this.props.changeStateToReducer(this.state.user)
//   };
//   render() {
//     return (
//       <Provider store={store} >
//         {this.props.children}
//       </Provider>
//     );
//   }
// }

// function mapDispatchToProps(dispatch){
//     return({
//         changeStateToReducer: currentUser => {
//             dispatch(userLogin(currentUser))
//             console.log(currentUser)
//         }
//     })
// }


// export default connect(null, mapDispatchToProps)(UserProvider);
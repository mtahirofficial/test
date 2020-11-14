import React, {
    // useState, 
    // useEffect
} from 'react'
import {
    BrowserRouter, 
    // Redirect, 
    Route
  } from "react-router-dom";

import Header from '../../components/Header';
import Categories from '../../components/CategoriesList';
import PostDetaials from '../../components/PostDetails';
import Home from '../../components/Home';
import Footer from '../../components/Footer';
import Sell from '../../components/Sell';
// import PrivateRoute from './PrivateRoute';
// import Login from '../../components/Login';
// import firebase from '../firebase/firebase'

const Router = () => {
    // const [user, setUser] = useState('')

    // useEffect(() => {
    //     firebase.auth().onAuthStateChanged(function(user) {
    //         if (user) {
    //             setUser(user)
    //         } else {
    //           // No user is signed in.
    //         }
    //       });
    // })
        return(
            <BrowserRouter>
                    <Header />
                    <Categories />
                    <hr/>

                    <Route exact path='/' component={Home} />
                    <Route exact component={PostDetaials} path='/house-001'  />
                    <Route exact component={PostDetaials} path='/house-002'  />
                    <Route exact component={PostDetaials} path='/house-003'  />
                    <Route exact component={PostDetaials} path='/house-004'  />
                    <Route exact component={Sell} path='/post'  />
                    {/* <PrivateRoute exact path='/post' component={Sell} /> */}
                    {/* <Route exact path='/login' component={Login} /> */}
                    {/* {user?
                    <Route exact path='/post' component={Sell} />
                    :
                    <Redirect to='/login' />
                    } */}
                
                <Footer />
            </BrowserRouter>
        )
    
}

export default Router
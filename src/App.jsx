import React, {Component} from 'react';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faHeart, far } from '@fortawesome/free-regular-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Router from './config/Routing/Router';
import { Provider } from 'react-redux';
import store from './store/index.js'

library.add(fab, far, fas, faHeart)
class App extends Component {
  
  
  render (){
    return(
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}

export default App;

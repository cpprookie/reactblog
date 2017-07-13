import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Signin from './components/Signin'
import Signup from './components/Signup'
// import axios from 'axios'

// import axios globally
// if (!Window.$http) {
//   Window.$http = axios
// }

class App extends Component {
  render() {
    return (
     <div className="blog">
      <Route path="/signin" component={Signin} />
      <Route path='/signup' component={Signup} />
     </div> 
    )
  }
}

export default App;

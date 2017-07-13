import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Signin from './components/Signin'
import Signup from './components/Signup'
import Mock from  'mockjs'

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

// Mock data
Mock.mock('/signin', options => {
  var body = JSON.parse(options.body)
  if(body.username === "mocktest" && body.password === "1234qwer") {
    return {
      success: true,
      status: 200
    }
  }
  return {
    success: false,
    status: 404
  }
})

export default App;

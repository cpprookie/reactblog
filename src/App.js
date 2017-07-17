import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import Signin from './components/Signin'
import Signup from './components/Signup'
import Posts from './components/Posts'
import Post from './components/Post'
import User from './components/User'
import Mock from  'mockjs'

// import axios from 'axios'

// import axios globally
// if (!Window.$http) {
//   Window.$http = axios
// }

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      headerFix: false,   // record scroll event    
    }
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll (e) {
    if(window.scrollY > 100) {
      this.setState({headerFix : true})
    } else {
      this.setState({headerFix : false})
    }
  }

  componentDidMount () {
    window.addEventListener("scroll", this.handleScroll.bind(this))
  }

  render() {
    return (
    <div className="blog">
      <Route exact path="/" component={Home} />
      <Route path="/signin" component={Signin} />
      <Route path='/signup' component={Signup} />
      <Route path='/posts' render= {props=> <Posts headerFix={this.state.headerFix} {...props} />} />
      <Route path='/post' render= {props=> <Post headerFix={this.state.headerFix} {...props} />} />
      <Route path='/user' render= {props=> <User headerFix={this.state.headerFix} {...props} />} />
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

import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SigninLink from './containers/SigninLink'
import Signup from './components/Signup'
import StatedPosts from './containers/StatedPosts'
import StatedPost from './containers/StatedPost'
import StatedNewPost from './containers/StatedNewPost'
import Post from './components/Post'
import User from './components/User'
// import Mock from  'mockjs'

import Mock from './mock'

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
      <Route path="/signin" component={SigninLink} />
      <Route path='/signup' component={Signup} />
      <Route path='/posts' render= {props=> <StatedPosts headerFix={this.state.headerFix} {...props} />} />
      <Route path='/post' render= {props=> <StatedPost headerFix={this.state.headerFix} {...props} />} />
      <Route path='/user/:userID' render= {props=> <User headerFix={this.state.headerFix} {...props} />} />
      <Route path='/new-post' component={StatedNewPost} />  
    </div> 
    )
  }
}

export default App;

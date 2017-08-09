import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Home from './components/Home'
import SigninLink from './containers/SigninLink'
import Signup from './components/Signup'
import StatedPosts from './containers/StatedPosts'
import StatedPost from './containers/StatedPost'
import StatedNewPost from './containers/StatedNewPost'
import StatedUser from './containers/StatedUser'
import {connect} from 'react-redux'
import {watchHeaderFix} from './actions'

import Mock from './mock'

class Root extends Component {
  constructor (props) {
    super(props)
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll () {
    if(window.scrollY > 100) {
      this.props.fixHeader(true)
    } else {
      this.props.fixHeader(false)
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
      <Route path='/posts'  component={StatedPosts} />
      <Route path='/post' component={StatedPost} />
      <Route path='/user/:userID' component= {StatedUser} />
      <Route path='/edit-post' component={StatedNewPost} />  
    </div> 
    )
  }
}

const mapStateToProps = state => {
  return {headerFix: state.headerFix}
}
const mapDispatchToProps = dispatch => {
  return {
    fixHeader: flag => {
      return dispatch(watchHeaderFix(flag))}
  }
}
const App = connect (
  mapStateToProps,
  mapDispatchToProps
)(Root)

export default App;

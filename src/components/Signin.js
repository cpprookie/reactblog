import React, {Component} from 'react'
import axios from '../config'
import {Link} from 'react-router-dom'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleuserName (e) {
    this.setState({userName: e.target.value})
  }

  handlePassword (e) {
    this.setState({password: e.target.value})
  }

  // Need an component used to show message!
  handleClick () {
    console.log('click')
    if (this.state.userName.length === 0) {
      console.log("userName can't be null!")
      return false
    }

    if (this.state.password.length < 8) {
      console.log("Illegal password format!")
      return false
    }

    // signin request
    axios.post('/signin',{userName: this.state.userName, password:this.state.password})
      .then( ret=> {
        console.log('signin invoked!')
        if(ret) {
          this.props.userCache(ret.data.user)
          this.props.history.replace('/posts')
        }
      })
      .catch(error => console.log(error))
  }

  render () {

    return (
      <div className="signin">
        <div className="signin-wrap">
          <div className="signin-logo">R&B</div>
          <div className="signin-block">
            <h1>sign in </h1>
            <label htmlFor="userName">userName</label>
            <input id="userName" type="text" onChange={this.handleuserName.bind(this)} autoFocus/>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" onChange={this.handlePassword.bind(this)} />
            <button onClick={this.handleClick.bind(this)}>submit</button>
          </div>
          <p className="create-account">New to R&B? 
            <Link to='/signup'><span>Create an account.</span></Link></p>
        </div>
      </div>
    )
  }
}

export default Signin

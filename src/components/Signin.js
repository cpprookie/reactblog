import React, {Component} from 'react'
import axios from 'axios'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername (e) {
    this.setState({username: e.target.value})
  }

  handlePassword (e) {
    this.setState({password: e.target.value})
  }

  // Need an component used to show message!
  handleClick () {
    if (!this.state.username.length) {
      console.log("Username can't be null!")
      return false
    }

    if (this.state.password.length < 8) {
      console.log("Illegal password format!")
      return false
    }

    axios.post('/signin',this.state)
      .then( ret=> {
        if(ret.data.success) {
          console.log('login success')
        }
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="signin-wrap">
        <div className="signin-logo">R&B</div>
        <div className="signin-block">
          <h1>sign in </h1>
          <label htmlFor="username">Username</label>
          <input id="username" type="text" onChange={this.handleUsername.bind(this)} autoFocus/>
          <label htmlFor="password">Password</label>
          <input id="password" type="password" onChange={this.handlePassword.bind(this)} />
          <button onClick={this.handleClick.bind(this)}>submit</button>
        </div>
        <p className="create-account">New to R&B?<a href="/signup">Create an account.</a></p>
      </div>
    )
  }
}

export default Signin

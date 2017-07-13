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

    axios.post('/login',this.state)
      .catch(error => console.log(error))
  }

  render () {
    return (
      <div className="signin-block">
        <h1>Sign In</h1>
        <input type="text" placeholder="username" onChange={this.handleUsername.bind(this)} autoFocus/>
        <input type="password" placeholder="password" onChange={this.handlePassword.bind(this)} />
        <button onClick={this.handleClick.bind(this)}>submit</button>
      </div>
    )
  }
}

export default Signin

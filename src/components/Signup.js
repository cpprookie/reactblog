import React, {Component} from 'react'
import {Redirect, Link} from 'react-router-dom'
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repeat: ''
    }
    this.checkRepeat = this.checkRepeat.bind(this)
  }

  handleUsername (e) {
    this.setState({username: e.target.value})
  }

  handlePassword (e) {
    this.setState({password: e.target.value})
  }

  handleRepeat (e) {
    this.setState({repeat: e.target.value})
  }

  checkRepeat () {
    if (this.state.password !== this.state.repeat) {
      console.log(' different password!')
      return false
    }
  }

  handleSubmit () {
    if (!this.state.username) {
      console.log("Username can't be null!")
      return false;
    }
    if (this.state.password.length < 8) {
      console.log("Illegal password format!")
      return false
    }
    if(!this.checkRepeat()) {
      return false
    }
    axios.post('/signup', {
      username: this.state.username,
      password: this.state.password
    }).then(()=>{console.log("successful signup!")}).catch(e=>{console.log(e.message)})
  }

  render () {
    if (this.state.redirectToSignin) {
      return <Redirect to='/signin' />
    }
    return (
      <div className="signup">
        <div className="signup-wrap">
          <div className="signin-logo">R&B</div>
          <div className="signup-block">
            <h1>Sign Up</h1>
            <label htmlFor="username">Username</label>
            <input name="username" type="text" id="username"
              onChange={this.handleUsername.bind(this)}/>
            <label htmlFor="password">Password</label>
            <input name="password" type="password" id="password"
              onChange={this.handlePassword.bind(this)} />
            <label htmlFor="repeat">Repeat password</label>
            <input name="repeat" type="password" id="repeat"
              onChange={this.handleRepeat.bind(this)}/>
            <button onClick={this.handleSubmit.bind(this)}>sign up</button>
          </div>
          <p className="had-account">Already have an account?
            <Link to='/signin'>
              <span> I will sign in</span>
            </Link>       
          </p>
        </div>
      </div>
    )
  }
}

export default Signup

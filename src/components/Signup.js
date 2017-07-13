import React, {Component} from 'react'
import axios from 'axios'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      repeat: '',
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
    return (
      <div className="signup-block">
        <h1>Sign Up</h1>
        <input name="username" type="text" placeholder="username"
           onChange={this.handleUsername.bind(this)}/>
        <input name="password" type="password" placeholder="password"
           onChange={this.handlePassword.bind(this)} />
        <input name="repeat" type="password" placeholder="repeat password" 
           onChange={this.handleRepeat.bind(this)}/>
        <button onClick={this.handleSubmit.bind(this)}>SUBMIT</button>
      </div>
    )
  }
}

export default Signup

import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import axios from '../../config'

class UserUpdate extends Component {
  constructor (props) {
    super(props)
    this.state = {
      userName: '',
      password: '',
      newPassword: '',
      repeatPassword: '',
      redirectToSignin: false  //after successfully edit password turns to true
    }
  }
  handlePassword (e) {
    this.setState({password: e.target.value})
  }
  handleNewPassword (e) {
    this.setState({newPassword: e.target.value})
  }
  handleRepeatPassword (e) {
    this.setState({repeatPassword: e.target.value})
  }
  submitUpdate () {
    if(this.state.newPassword !== this.state.repeatPassword) {
      console.log('different password!')
      return 
    }
    if(this.state.password.length < 8 || 
       this.state.newPassword.length < 8 ||
       this.state.repeatPassword.length < 8) {
         console.log('password needs to be more than 8 characters')
       }
    axios.post(`/user/${this.props.userID}/account`, {
      password: this.state.password,
      newPassword: this.state.newPassword
    })
      .then(res => {
        if (res.data.success) {
          this.setState({redirectToSignin: true})
        }
      })
  }
  render () {
    if (this.state.redirectToSignin) {
      return <Redirect to='/signin'/>
    }
    if(!this.props.userID) {
      return null
    }
    return (
      <div className="user-update">
        <h1>Update password </h1>
        <div className="password-area">
          <div className="password-area-item">
            <label>Old password</label>
            <input className="password-area-input" type="password" 
               onChange={this.handlePassword.bind(this)}/>
          </div>
          <div className="password-area-item">
            <label>New password</label>
            <input className="password-area-input" type="password"
               onChange={this.handleNewPassword.bind(this)}/>
          </div>
          <div className="password-area-item">
            <label>Repeat new password</label>
            <input className="password-area-input" type="password"
              onChange={this.handleRepeatPassword.bind(this)}/>
          </div>
        </div>
        <button className="update-submit-btn" onClick={this.submitUpdate.bind(this)}>Update password</button>
      </div>
    )
  }
}

export default UserUpdate
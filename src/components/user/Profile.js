import React, {Component} from 'react'

class Profile extends Component {
  constructor (props) {
    super(props)

  }
  render () {
    return (
      <div className="profile-container">
        <div className="profile-form">
          <label htmlFor="user_profile_name">Name</label>
          <input id="user_profile_name" type="text"/>
        </div>
        <div className="profile">
          <label htmlFor="user_profile_name">bio</label>
          <textarea id="user_profile_name"></textarea>
        </div>
      </div>
    )
  }
}

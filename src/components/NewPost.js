import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleTitle (e) {
    this.setState({title: e.target.value})
  }

  handleBody (e) {
    this.setState({body: e.target.value})
  }

  render () {
      if (!this.props.user.userName) {
        return <Redirect to='/signin' />
      }

      return (
        <div className="new-post">
          <div className="new-post-header">
          </div>
          <div className="new-post-content">
            <div className="new-post-title" onChange={this.handleTitle.bind(this)}>
              {this.state.title}
            </div>
            <div className="new-post-body">
              <textarea onChange={this.handleBody.bind(this)}>
                {this.state.body}
              </textarea>
            </div>
          </div>
        </div>
      )
    }
}

export default NewPost
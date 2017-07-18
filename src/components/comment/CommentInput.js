import React, {Component} from 'react'

class CommentInput extends Component {
  constructor (props) {
    super(props)
    this.state = {commentText: ''}
  }

  handleInput (e) {
    this.setState({commentText: e.target.value})
  }

  // import axois and communicate with server.
  handleClick () {
    this.props.submit(this.state.commentText)
  }

  render () {
    return (
      <div className="comment-form">
        <div className="comment-input">
          <input type="text" placeholder="comment here..." onChange= {this.handleInput.bind(this)}/>
        </div>
        <button className="comment-submit" onClick={this.handleClick.bind(this)}>submit</button>
      </div>
    )
  }
}

export default CommentInput


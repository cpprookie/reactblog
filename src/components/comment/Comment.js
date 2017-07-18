import React, {Component} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

class Comment extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      commentList: [{id: 1, author: 'test1', content: 'test'}]
    }
  }

  addComment (content) {
    let comment = {id: 2, author:'user', content: content}
    this.setState(prevState => {
      prevState.commentList.push(comment)
      return {commentList: prevState.commentList} })
  }

  render () {
    return (
      <div className="comments-container">
        <CommentList comments={this.state.commentList} />
        <CommentInput submit={this.addComment.bind(this)}/>
      </div>
    )
  }
}

export default Comment
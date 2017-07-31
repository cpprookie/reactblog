import React, {Component} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'

class Comment extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      commentList: [
        {
          id: 1, 
          author: {
            _id: '234',
            userName: 'cttest',
            avatar: 'https://avatars0.githubusercontent.com/u/18083815?v=4&s=40'
          },
          content: 'test',
          publishTime: '5 minutes ago'
        }
      ]
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
        <div className="comments-topbar">
          <h2 className="topbar-title">{this.props.totalComments}comments</h2>
        </div>
        <CommentList comments={this.state.commentList} 
          isAuthor={this.props.isAuthor} userID={this.props.userID} />
        {/**
         * 未登陆不渲染评论框
         */}
        {this.props.userID ? <CommentInput submit={this.addComment.bind(this)}/> : null}
      </div>
    )
  }
}

export default Comment
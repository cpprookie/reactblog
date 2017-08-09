import React, {Component} from 'react'
import CommentList from './CommentList'
import CommentInput from './CommentInput'
import axios from '../../config'
import Pagination from '../common/Pagination'

class Comment extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      totalComments: Number,
      totalPages: Number,
      commentList: [
        {
          _id: String, 
          author: [
            {
               _id: String,
              userName: String,
              avatar: 'https://avatars0.githubusercontent.com/u/18083815?v=4&s=40'
            }
          ],
          content: String,
          timeago: String
        }
      ]
    }
    this.getCommentList = this.getCommentList.bind(this)
    this.deleteComment = this.deleteComment.bind(this)
  }

  /**
   * 
   * @todo {*} comment comonent needs pagination too. 
   */
  addComment (content) {
    const user = this.props.user
    axios.put(`/post/${this.props.postID}/comment`, {
      comment: {
        author: user.userID,
        content
      }
    }).then( res => {
      if(res.data.success) {
        console.log(res.data.comment)
        let putComment = Object.assign({}, res.data.comment, {author: [user]})
        this.setState(prevState => {
          prevState.commentList.push(putComment)
          return {
            commentList: prevState.commentList,
            totalComments: prevState.totalComments+1
           }
        })
        this.props.putComment()
      }
    })
  }

  deleteComment (id) {
    axios.delete(`/post/${this.props.postID}/comment${id}`, {user: this.props.user._id})
      .then(res => {
        if(res.data.success) {
          this.getCommentList(0)
        }
      })
  }

  getCommentList (page) {
    axios.get(`/post/${this.props.postID}/comment`,{params: {page}})
      .then(res => {
        console.log(res.data.comments)
        if(res.data.success) {
          this.setState({
            commentList: res.data.comments.commentList,
            totalComments: res.data.comments.totalComments,
            totalpages: res.data.comments.totalPages
          })
        }
      }).catch(e => console.log(e.message))
  }

  // update commentList when switch comment page
  switchCommentPage (page) {
    this.getCommentList(page-1)
  }

  componentWillMount () {
    console.log(`getcommentList called!`)
    this.getCommentList(0)
  }

  render () {
    return (
      <div className="comments-container">
        <div className="comments-topbar">
          <h2 className="topbar-title">{this.state.totalComments} comments</h2>
        </div>
        <CommentList comments={this.state.commentList} deleteComment={this.deleteComment}
          isAuthor={this.props.isAuthor} userID={this.props.user.userID} />
        {/**
         * 未登陆不渲染评论框
         */}
        {this.props.user.userID ? <CommentInput submit={this.addComment.bind(this)}/> : null}
        {this.state.totalPages > 1 ? <Pagination totalPages={this.state.totalPages} 
               switchCommentPage={this.switchCommentPage.bind(this)} /> : null}
      </div>
    )
  }
}

export default Comment
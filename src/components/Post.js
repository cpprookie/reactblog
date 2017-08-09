import React, {Component} from 'react'
import StatedHeader from '../containers/StatedHeader'
import Comment from './comment/Comment'
import StatesBlogEdit from '../containers/StatedBlogEdit'
import axios from '../config'
import {Redirect, Link} from 'react-router-dom'

/**
 * @todo 页面数据初始化放在 componentWillMount里去做
 */
class Post extends Component {
  constructor (props) {
    super(props)
    this.state = { 
      post: {
        "_id": "",
        "title": "",
        "author": 
          {
            _id: String,
            userName: String,
            avatar: String
          },
        "content": "",
        comments: Number
      },
      commentToggleFlag: false,
      redirectToPosts: false,
      authorEditFlag: false
    }
  }

  deletePost () {
    // after deleting post , redirect to '/posts'
    axios.delete(`/user/${this.props.user.userID}/post/${this.state.post._id}`)
      .then(res => {
        if (res.data.success) {
          this.setState({redirectToPosts: true})
        }
      })
  }

  // update post after add comment
  putComment () {
    axios.get(`/post/${this.state.post._id}`, {params: {userID: this.props.user.userID}})
      .then(res => {
        if(res.data.success) {
          this.setState({post: res.data.post})
        }
      }).catch(e => {console.log(e.message)})
  }

  // add record in user history if logged
  componentWillMount () {
    // get post id from url 
    const arr = this.props.location.pathname.split('/')
    const postID = arr[arr.length-1]
    const userID =  this.props.user.userID ? this.props.user.userID : ''
    axios.get(`/post/${postID}`, {params: {userID}})
      .then(res => {
        if(res.data.success) {
          this.setState({post: res.data.post})
        }
      }).catch(e => {console.log(e.message)})
  }

  toggleComments () {
    console.log('comments toglle')
    this.setState(prevState => {
      return {commentToggleFlag: !prevState.commentToggleFlag}
    })
  }

  render () {
    if (this.state.redirectToPosts) {
      return <Redirect to="/posts" />
    }

    let isAuthor = this.props.user.userID === this.state.post.author._id
    return (
      <div className="post">
        <StatedHeader/>
        <div className="post-wrapper">
          <StatesBlogEdit pattern="view" post={this.state.post} />
          <footer>
            <div className="post-footer">
              {isAuthor ? null : 
                <span className="post-footer-link">
                  <Link to={`/user/${this.state.post.author._id}`}>
                    author: {this.state.post.author.userName}
                  </Link>
                </span>}
              <span className="post-footer-date">
                 publish at: {this.state.post.lastEditTime}
              </span>
              <span className="post-footer-comment clickable" onClick={this.toggleComments.bind(this)}>
                {this.state.commentToggleFlag ? 'toggle' : `comments(${this.state.post.comments})`}
              </span>
              {isAuthor ? 
                <div className="post-footer-action">
                  <span className="post-footer-link" onClick={()=> this.setState({authorEditFlag: true})}>
                    <Link to={{
                      pathname: "/edit-post",
                      state: {post: this.state.post}
                    }}>edit</Link> 
                  </span>
                  <span className="clickable" onClick={this.deletePost.bind(this)}>
                    delete
                  </span>
                </div> : null}
            </div>
            
              {this.state.commentToggleFlag?  <Comment 
                isAuthor={isAuthor} postID={this.state.post._id}
                user={this.props.user} putComment={this.putComment.bind(this)} /> : null}
          </footer>
          {/**
           * userID 用来判断浏览者是否登陆以及浏览者是否是评论者,true才用渲染的权限。   
           */}
        </div>
      </div>
    )
  }
}

export default Post
import React, {Component} from 'react'
import StatedHeader from '../containers/StatedHeader'
import Comment from './comment/Comment'
import StatesBlogEdit from '../containers/StatedBlogEdit'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
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
        "author": {
            "_id": "",
            "userName": "",
            "avatar": ""
        },
        "content": "This project is almost done",
      },
      commentToggleFlag: false,
      comments: []
    }
  }

  // add record in user history if logged
  componentWillMount () {
    // get post id from url 
    const arr = this.props.location.pathname.split('/')
    const postID = arr[arr.length-1]

    axios.get(`/post/${postID}`)
      .then(res => {
        if(res.data.success) {
          this.setState({post: res.data.post})
        }
      }).catch(e => {console.log(e.message)})

    // if(this.props.user.userID) {
    //   axios.get(`/user/${this.props.user.userID}/`)
    //        .catch(e => {console.log(e.message)})
    // }
  }
  toggleComments () {
    console.log('comments toglle')
    this.setState(prevState => {
      return {commentToggleFlag: !prevState.commentToggleFlag}
    })
  }
  render () {
    return (
      <div className="post">
        <StatedHeader isFixed={this.props.headerFix} />
        <div className="post-wrapper">
          <StatesBlogEdit />
          <footer>
            <div className="post-info">
              {this.props.user.userId === this.state.post.author._id ? null : (<div className="post-info-author"></div>)}
              <div className="post-info-date">edit at: {this.state.post.lastEditTime}</div>
              <div className="post-footer-comment" onClick={this.toggleComments.bind(this)}>
              {this.state.commentToggleFlag ? 'toggle' : `comments(${this.state.post.comments})`}</div>
            </div>
            
              {this.state.commentToggleFlag?  <Comment totalComments={11} 
                isAuthor={this.state.post.author._id === this.props.user.userID} 
                userID={this.props.user.userID} /> : null}
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
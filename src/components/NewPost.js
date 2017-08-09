import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import axios from '../config'
import StatedBlogEdit from '../containers/StatedBlogEdit'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitSuccess: false,  //控制页面跳转，无论新建或是更新，请求成功后都会跳转至浏览页面。
      renderPostID: '' // 新建或更新的文档ID
    }
  }

  cancel () {
    this.props.history.goBack()
  }


  submitPost (post) {
    // edit post
    if (this.props.location.state) {
      const postID = this.props.location.state.post._id
      axios.post(`/user/${this.props.user.userID}/post/${postID}`,{post})
      .then(res => {
        if (res.data.success) {
          // console.log(res.data)
          this.props.history.push(`/post/${res.data.editPost._id}`)
        }
      })
    }
    // create post
    axios.put(`/user/${this.props.user.userID}/post`,{post})
      .then(res => {
        if (res.data.success) {
          this.props.history.push(`/post/${res.data.createPost._id}`)
        }
      })
  }

  render () {
      if (!this.props.user.userName) {
        return <Redirect to='/signin' />
      }

      return (
        <div className="new-post">
          <div className="header">
            <div className="header-wrapper">
              <div className="header-content">
                <div className="header-logo">
                  <Link to='/posts'>R&B</Link>
                </div>
                <div className="header-nav">
                  <Link to='/user'>
                    <span className="nav-user">
                      <img src={this.props.user.avatar} alt="avatar"/>
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <StatedBlogEdit pattern="edit" 
             post ={this.props.location.state ? this.props.location.state.post: {}} 
            submitPost={this.submitPost.bind(this)} cancel={this.cancel.bind(this)} />
        </div>
      )
    }
}

export default NewPost
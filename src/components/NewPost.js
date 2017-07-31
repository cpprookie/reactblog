import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'
import StatedBlogEdit from '../containers/StatedBlogEdit'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      submitSuccess: false,
      createPostID: ''
    }
  }

  submitPost (post) {
    axios.put(`/user/${this.props.user.userID}/post`,post)
      .then(res => {
        if (res.data.success) {
          this.setState({
            submitSuccess: true,
            createPostID: res.data.createPost._id
          })
        }
      })
  }

  render () {
      if (!this.props.user.userName) {
        return <Redirect to='/signin' />
      }
      if (this.state.submitSuccess) {
        return <Redirect to={`/post/${this.state.createPostID}`} />
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
          <StatedBlogEdit pattern="author" submitPost={this.submitPost.bind(this)} />
        </div>
      )
    }
}

export default NewPost
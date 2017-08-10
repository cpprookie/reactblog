import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import PostList from './common/PostList'
import History from './common/History'
import StatedHeader from '../containers/StatedHeader'
import UserNav from './user/UserNav'
import UserUpdate from './user/UserUpdate'
import axios from '../config'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      history: [],
      totalPage: Number,
      author: {
        userName: '',
        _id: '',
        avatar: ''
      }
    }
    this.getAuthorPosts = this.getAuthorPosts.bind(this)
    this.updateAvatar = this.updateAvatar.bind(this)
  }

  getAuthorPosts (num, author) {
    axios.get('/posts', {
      params: {
        author: this.state.author._id ||author,
        page: num-1
      }
    })
      .then(res => {
        if(res.data.success) {
          this.setState({
            postList: res.data.postList,
            totalPage: res.data.totalPage
          })
        }
      })
  }

  updateAvatar () {
    let formData = new FormData()
    const file = this.filesInput.files[0]
    // console.log(file)
    formData.append('avatar', file)
    axios.post(`/user/${this.state.author._id}/avatar`, formData)
      .then(res=> {
        this.setState({author: {avatar: res.data.avatar}})
        let user = this.props.user
        user.avatar = res.data.avatar
        this.props.changeAvatar(user)
      })
      .catch(e => console.log(e.message))
  }
  switchPage (num) {
    this.getAuthorPosts(num)
  }

  /**
   * get author'posts and browser history
   */
  componentWillMount () {
    let url = this.props.match.url.split('/')
    let _id = url[url.length-1]
    this.setState({author: {_id}})
    axios.get(`/user/${_id}`)
      .then(res => {
        if(res.data.success) {
          this.setState({author: res.data.author[0]})
        }
      })
    this.getAuthorPosts(1, _id)
    axios.get(`/user/${_id}/history`,{
      params: {all: true}
    })
      .then(res => {
        if (res.data.success) {
          this.setState({history: res.data.history})
        }
      })
  }

  render () {
    if (!this.props.user.userID) {
      return <Redirect to='/signin' />
    }

    let isAuthor = this.state.author._id === this.props.user.userID

    return (
      <div className="user">
        <StatedHeader/>
        <div className="user-wrapper">
          <div className="user-basic">
            <img src={this.state.author.avatar} alt="user-avatar" className="user-avatar"/>
            <div className="user-name">
              {this.state.author.userName}
            </div>
            {isAuthor ? <label htmlFor="update_avatar">
              <span className="update-submit-btn">Update avatar</span>
            </label>: null}
            <form>
              <input type="file" id="update_avatar" ref={(input)=>{this.filesInput = input}}
                onChange={this.updateAvatar} />
            </form>
          </div>
          <div className="user-info">
            <UserNav url={this.props.match.url} fullPath={this.props.location.pathname} 
              isAuthor={isAuthor}/>
            <div className="user-info-content">
              <Route path={`${this.props.match.url}/posts`} render={()=>
                <PostList containerClass="user-info-posts" shortPosts={this.state.postList} 
                totalPage={this.state.totalPage} switchPage={this.switchPage.bind(this)}/>}/>
              <Route path={`${this.props.match.url}/update`}  render={()=>
                <UserUpdate userID={this.state.author._id} />}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default User
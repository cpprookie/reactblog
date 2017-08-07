import React,{Component} from 'react'
import {Route,Redirect} from 'react-router-dom'
import PostList from './common/PostList'
import History from './common/History'
import StatedHeader from '../containers/StatedHeader'
import UserNav from './user/UserNav'
import axios from 'axios'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: [],
      totalPage: Number,
      author: {
        userName: '',
        _id: '',
        avatar: ''
      }
    }
    this.getAuthorPosts = this.getAuthorPosts.bind(this)
  }

  getAuthorPosts (num, author) {
    axios.get('/posts', {
      author: this.state.author ||author,
      page: num-1
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

  switchPage (num) {
    this.getAuthorPosts(num)
  }

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
  }

  render () {
    if (!this.props.user.userID) {
      return <Redirect to='/signin' />
    }

    return (
      <div className="user">
        <StatedHeader/>
        <div className="user-wrapper">
          <div className="user-basic">
            <img src="https://avatars7.githubusercontent.com/u/18083815?v=4&s=460" alt="user-avatar" className="user-avatar"/>
            <div className="user-name">
              {this.state.author.userName}
            </div>
          </div>
          <div className="user-info">
            <UserNav url={this.props.match.url} fullPath={this.props.location.pathname} 
              isAuthor={this.state.author._id === this.props.user.userID ? true: false}/>
            <div className="user-info-content">
              <Route path={`${this.props.match.url}/posts`} render={()=>
                <PostList containerClass="user-info-posts" shortPosts={this.state.postList} 
                totalPage={this.state.totalPage} switchPage={this.switchPage.bind(this)}/>}/>
              {/*
                <Route path={`${this.props.match.url}/history`} render={()=>
                <History history={historyData} />} /> 
              */}
              <Route path={`${this.props.match.url}/information`}  />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default User
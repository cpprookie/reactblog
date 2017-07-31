import React ,{Component} from 'react'
import StatedHeader from '../containers/StatedHeader'
import PostList from './common/PostList'
import History from './common/History'
import Pagination from './common/Pagination'
import axios from 'axios'


class Posts extends  Component {
  constructor (props) {
    super(props)
    this.state = {
      postList: [],
      totalPage: Number,
      history: []
    }
  }

  switchPage (num) {
    console.log(`/posts?page=${num-1}`)
    axios.get('/posts',{page: num-1})
      .then(res => this.setState({
        postList: res.data.postList,
        totalPage: res.data.totalPage
      }))
  }

  componentWillMount () {
    axios.get('/posts')
      .then(res =>this.setState({
        postList: res.data.postList,
        totalPage: res.data.totalPage
      }))

    if (this.props.user.userName) {
      axios.get(`/user/${this.props.user.userID}/history`)
        .then(res => this.setState({history: res.data.history}))
    }
  }

  render () {
    return (
      <div className="posts">
        <StatedHeader isFixed={this.props.headerFix} />
        <section className="posts-body">
          <div className="postList">
            <PostList shortPosts={this.state.postList} containerClass="postList" />
        
            {this.state.totalPage > 0 ? <Pagination totalPages={this.state.totalPage} 
               switchPage={this.switchPage.bind(this)} /> : null}
          </div>
          
          {this.props.user.userID ? <History history={this.state.history} />: null}
        </section>
      </div>
    )
  }
}

export default Posts
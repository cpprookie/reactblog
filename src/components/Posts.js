import React ,{Component} from 'react'
import StatedHeader from '../containers/StatedHeader'
import PostList from './common/PostList'
import History from './common/History'
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

    if (this.props.user.userID) {
      axios.get(`/user/${this.props.user.userID}/history`)
        .then(res => this.setState({history: res.data.history}))
    }
  }

  render () {
    return (
      <div className="posts">
        <StatedHeader/>
        <section className="posts-body">
          <PostList shortPosts={this.state.postList} containerClass="postList"
            totalPage={this.state.totalPage} switchPage={this.switchPage.bind(this)}/>
          {this.props.user.userID ? <History history={this.state.history} />: null}
        </section>
      </div>
    )
  }
}

export default Posts
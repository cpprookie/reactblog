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
      browsedHistory: []
    }
  }

  componentWillMount () {
    // console.log('posts will mount')
    axios.get('/posts')
      .then(ret =>this.setState({postList: ret.data.postList}))

    if (this.props.user.userName) {
      axios.get(`/${this.props.user.userID}/history`)
        .then(ret => this.setState({browsedHistory: ret.data.history}))
    }
  }

  render () {
    return (
      <div className="posts">
        <StatedHeader isFixed={this.props.headerFix} />
        <section className="posts-body">
          <PostList shortPosts={this.state.postList} containerClass="postList" />
          {this.props.user.userName ? <History history={this.state.browsedHistory} />: null}
        </section>
        <Pagination totalPages={10} />
      </div>
    )
  }
}

export default Posts
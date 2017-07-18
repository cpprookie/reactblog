import React ,{Component} from 'react'
import Header from './common/Header'
import PostList from './common/PostList'
import History from './common/History'

const testData = [
  {"id":0,"title":"Manchester Welcomes Mobike","author":"Author: Mobike UK","date":"Date: 29th June","agree": 0, "comments": 1},
  {"id":1,"title":"‘Mobike Japan’ in Fukuoka","author":"Author: Mobike Global","date":"Date: 22nd June","agree": 0, "comments": 1},
  {"id":2,"title":"Mobike Raises Over $600 Million in Series E Financing Led by Tencent","author":"Author: Mobike UK","date":"Date: 16th June", "agree": 0, "comments": 1},
  {"id":3,"title":"Manchester is Mobike’s 100th city","link":"https://mobike.com/global/blog/post/mobike-in-manchester","author":"Author: Mobike UK","date":"Date: 12th June", "agree": 0, "comments": 1},
  {"id":4,"title":"WWF Awards Mobike the first ‘Climate Solver Sustainable Urban Mobility Special Award’","link":"https://mobike.com/global/blog/post/wwf-sustainable-award","author":"Author: MobikeGlobal","date":"Date: 8th June", "agree": 0, "comments": 1},
  {"id":5,"title":"Mobike Partners with Dow Chemical","link":"https://mobike.com/global/blog/post/dow-partners-mobike","author":"Author: Mobike Global","date":"Date: 25th May", "agree": 0, "comments": 1},
  {"id":6,"title":"Mobike, Qualcomm and the China Mobile Research Institute – The Future of IoT Technology","link":"https://mobike.com/global/blog/post/future-of-iot","author":"Author: Mobike Global","date":"Date: 25th May 2017", "agree": 0, "comments": 1},
  {"id":7,"title":"The Mobike White Paper: Bike-Share in the City","link":"https://mobike.com/global/blog/post/mobike-white-paper","author":"Author: Mobike Global","date":"Date: 19th May 2017", "agree": 0, "comments": 1}
]

const historyData = [
  {"id":0,"title":"Manchester Welcomes Mobike", agree: 2},
  {"id":1,"title":"Mobike Japan in Fukuoka", agree: 3}
]

class Posts extends  Component {
  constructor (props) {
    super(props) 
  }

  componentDidMount () {
    console.log(`user--->${this.props.store.getState().user}`)
  }
  render () {
    return (
      <div>
        <Header isFixed={this.props.headerFix} user={{avatar: 'https://avatars4.githubusercontent.com/u/18083815?v=4&s=40'}} />
        <section className="posts-body">
          <PostList shortPosts={testData} containerClass="postList" />
          <History history={historyData} />
        </section>
      </div>
    )
  }
}

export default Posts
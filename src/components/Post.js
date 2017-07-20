import React, {Component} from 'react'
import StatedHeader from '../containers/StatedHeader'
import Comment from './comment/Comment'

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = { post: {
      "postID":0,
      "title":"Manchester Welcomes Mobike",
      "author":"Mobike UK",
      "date":"29th June",
      "agree": 0, 
      "comments": 1,
      "content": "Areas of high-traffic and need have been identified to begin. Mobike will work closely with local partners and authorities (TfGM, and Manchester and Salford City councils) to identify suitable additional locations that will best service users and the city alike."
      }
    }
  }
  componentWillMount () {
    console.log(JSON.stringify(this.props))
  } 
  render () {
    return (
      <div className="post">
        <StatedHeader isFixed={this.props.headerFix} />
        <div className="post-wrapper">
          <section className="post-content">
            <h1 className="post-title">{this.state.post.title}</h1>
            <div className="post-info">
              {this.props.isAuthor ? null : (<div className="post-info-author"></div>)}
              <div className="post-info-date">{this.state.post.date}</div>
            </div>
            <div className="post-body">{this.state.post.content}</div>
            <div className="post-footer">
              <div className="post-agree">{this.state.post.agree}</div>
              <div className="post-comment">{this.state.post.comment}</div>
            </div>
          </section>
          <Comment />
        </div>
      </div>
    )
  }
}

export default Post
import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'
import axios from 'axios'

class BlogEdit extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      post: {
        title: '',
        content: ''
      },
      markdownViewFlag: false
    }
  }

  handleTitle (e) {
    this.setState({post: {title: e.target.value}})
  }

  handleBody (e) {
    this.setState({post: {content: e.target.value}})
  }

  handleWrite (e) {
    this.setState({markdownViewFlag: false})
  }

  handlePreview (e) {
    this.setState({markdownViewFlag: true})
  }

  render () {
    return (
      <div>
        <div className="post-content">
          <div className="post-title">
            <input placeholder="title..." onChange={this.handleTitle.bind(this)} /> :
          </div>
          <div className="post-body">
            <div className="post-body-nav">
              <div className="post-body-tabs">
                <button className={`post-body-tab ${!this.state.markdownViewFlag? `selected`:``}`} 
                  onClick={this.handleWrite.bind(this)}>Edit</button>
                <button className={`post-body-tab ${this.state.markdownViewFlag? `selected`:``}`}
                  onClick={this.handlePreview.bind(this)}>Preview</button>
              </div>
              <div className="post-body-nav-info">
                Styling with markdown!
              </div>
            </div>
            <div className="post-body-container">
              {!this.state.markdownViewFlag ?  <textarea value={this.state.post.content}
                    onChange={this.handleBody.bind(this)} placeholder="This is your breakpoint..." >
                </textarea> : <ReactMarkdown source={this.state.post.content} />}
            </div>
          </div>
        </div>
        <div className="post-footer">
          <button onClick={()=>{this.props.submitPost(this.state.post)}}>submit</button>
        </div>
        }
      </div>
    )
  }
}

export default BlogEdit 
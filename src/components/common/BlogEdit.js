import React,{Component} from 'react'
import ReactMarkdown from 'react-markdown'

class BlogEdit extends Component {
  constructor (props) {
    super(props) 
    this.state = {
      post: {
        title: "",
        content: ""
      },
      markdownViewFlag: false
    }
  }

  handleTitle (e) {
    let value = e.target.value
    this.setState(prevState => {
      prevState.post.title = value
      return {post: prevState.post}
    })
  }

  handleBody (e) {
    let value = e.target.value
    this.setState((prevState,e) => {
      prevState.post.content = value
      return {post: prevState.post}
    })
  }

  handleWrite (e) {
    this.setState({markdownViewFlag: false})
  }

  handlePreview (e) {
    this.setState({markdownViewFlag: true})
  }

  // 如果传入了post，用传入的post初始化组件状态。
  componentWillMount () {
    if (this.props.post._id) {
      this.setState({post: this.props.post})
    }
  }

  render () {
    // 编辑和
    if(this.props.pattern === "view") {
      return (
        <div className="post-content">
          <div className="post-title">
            <h2>{this.props.post.title}</h2>
          </div>
          <div className="post-body">
            <div className="post-body-container">
              <ReactMarkdown source={this.props.post.content}/>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="post-content">
        <div className="post-title">
          <input placeholder={this.state.post.title ?　this.state.post.title: 'title...'}
            onChange={this.handleTitle.bind(this)} />
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
            {!this.state.markdownViewFlag ?  
              <textarea value={this.state.post.content}
                onChange={this.handleBody.bind(this)} placeholder="This is your breakpoint..." >
              </textarea> : <ReactMarkdown source={this.state.post.content} />}
          </div>
        </div>
        <div className="post-edit-footer">
          <button className="post-edit-submit" onClick={()=>{
            console.log(`this.state.post-->${this.state.post}`)
            this.props.submitPost(this.state.post)
          }}>submit</button>
          <button className="post-edit-cancel" onClick={()=>{this.props.cancel()}}>cancel</button>
        </div>
      </div>
    )
  }
}

export default BlogEdit 
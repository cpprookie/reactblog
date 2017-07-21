import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: '',
      previewFlag: false
    }
  }

  handleTitle (e) {
    this.setState({title: e.target.value})
  }

  handleBody (e) {
    this.setState({body: e.target.value})
  }

  handleWrite (e) {
    this.setState({previewFlag: false})
  }

  handlePreview (e) {
    this.setState({previewFlag: true})
  }

  render () {
      if (!this.props.user.userName) {
        return <Redirect to='/signin' />
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
          <div className="new-post-content">
            <div className="new-post-title">
              <input placeholder="title..." onChange={this.handleTitle.bind(this)} 
                     value={this.state.title}/>
            </div>
            <div className="new-post-body">
              <div className="new-post-body-nav">
                <div className="new-post-body-tabs">
                  <button className={`new-post-body-tab ${!this.state.previewFlag? `selected`:``}`} 
                    onClick={this.handleWrite.bind(this)}>Write</button>
                  <button className={`new-post-body-tab ${this.state.previewFlag? `selected`:``}`}
                    onClick={this.handlePreview.bind(this)}>Preview</button>
                </div>
                <div className="new-post-body-nav-info">
                  Styling with markdown!
                </div>
              </div>
              <div className="new-post-body-container">
                {!this.state.previewFlag ?  <textarea 
                      onChange={this.handleBody.bind(this)} placeholder="This is your breakpoint..." 
                      value={this.state.body}>
                  </textarea> : <ReactMarkdown source={this.state.body} />}
              </div>
            </div>
          </div>
          <div className="new-post-footer">
             <button>submit</button>
          </div>
        </div>
      )
    }
}

export default NewPost
import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import SignoutConfirm from '../../containers/SignoutConfirm'

class Header extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatar: ''
    }
  }
  
  componentWillMount () {
    //console.log('Header is a class now')
    this.setState({avatar: this.props.user.avatar})
  }

  /**
   * 
   * @param {*} nextProps  force header update user avatar
   */
  componentWillReceiveProps(nextProps) {
    //console.log('Header will receive props called!')
    //console.log(nextProps.user.avatar)
    if(this.props.user.avatar !== nextProps.user.avatar) {
      this.setState({avatar: nextProps.user.avatar})
    }
  }

  render () {
    return (
      <div className={this.props.headerFix? "header-fixed" : "header"}>
        <div className="header-wrapper">
          <div className="header-content">
            <div className="header-logo">
              <Link to={this.props.user.userName? '/posts': '/'}>R&B</Link>
            </div>
            <input type="checkbox" id="dropdown-trigger" className="dropdown-trigger"/>
            <SignoutConfirm />
            {this.props.user.userName ? (
              <div className="dropdown-menu">
                <div className="dropdown-menu-header">Signed in as {this.props.user.userName}</div>
                <Link className="dropdown-menu-item" to={`/user/${this.props.user.userID}`}>Profile</Link>
                <span className="dropdown-menu-item" onClick={this.props.openSignoutDialog}>Sign out</span>
              </div>) : null}
            {this.props.user.userName ? (
              <div className="header-nav">
                <Link to="/edit-post">
                  <span className="nav-write">Write here</span>
                </Link>
                <label htmlFor="dropdown-trigger">
                  <span className="nav-user">
                    <img src={this.state.avatar} alt="avatar"/>
                  </span>
                </label>
              </div>
              ) : (
                <div className="header-nav">
                  <Link to="/signin">
                    <span className="nav-write">sign in</span>
                  </Link>
                </div>
              )}
            </div>
        </div>
      </div>
    )
  }
}

export default Header


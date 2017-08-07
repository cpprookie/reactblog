import React from 'react'
import {Link} from 'react-router-dom'
import SignoutConfirm from '../../containers/SignoutConfirm'

const Header = props => (
  <div className={props.headerFix? "header-fixed" : "header"}>
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-logo">
          <Link to={props.user.userName? '/posts': '/'}>R&B</Link>
        </div>
        <input type="checkbox" id="dropdown-trigger" className="dropdown-trigger"/>
        <SignoutConfirm />
        {props.user.userName ? (
          <div className="dropdown-menu">
            <div className="dropdown-menu-header">Signed in as {props.user.userName}</div>
            <span className="dropdown-menu-item"><Link to={`/user/${props.user.userID}`}>Profile</Link></span>
            <span className="dropdown-menu-item" onClick={props.openSignoutDialog}>Sign out</span>
          </div>) : null}
        {props.user.userName ? (
          <div className="header-nav">
            <Link to="/edit-post">
              <span className="nav-write">Write here</span>
            </Link>
            <label htmlFor="dropdown-trigger">
              <span className="nav-user">
                <img src={props.user.avatar} alt="avatar"/>
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

export default Header


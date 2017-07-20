import React from 'react'
import {Link} from 'react-router-dom'

const Header = props => (
  <div className={props.isFixed? "header-fixed" : "header"}>
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-logo">
          <Link to={props.user.userName? '/posts': '/'}>R&B</Link>
        </div>
        {props.user.userName ? (
          <div className="header-nav">
            <Link to="/new-post">
              <span className="nav-write">Write here</span>
            </Link>
            <label className="nav-search">
              <input type="text" placeholder="Search R&B..."/>
            </label>
            <Link to='/user'>
              <span className="nav-user">
                <img src={props.user.avatar} alt="avatar"/>
              </span>
            </Link>
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


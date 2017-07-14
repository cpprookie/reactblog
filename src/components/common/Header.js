import React from 'react'

const Header = props => (
  <div className={props.isFixed? "header-fixed" : "header"}>
    <div className="header-wrapper">
      <div className="header-content">
        <div className="header-logo">
          <a href="/">R&B</a>
        </div>
        <div className="header-nav">
          <a href="/post" className="nav-write">Write here</a>
          <label className="nav-search">
            <input type="text" placeholder="Search R&B..."/>
          </label>
          <a className="nav-user">
            <img src={props.user.avatar} alt="avatar"/>
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Header
import React, {Component} from 'react'
import {Link} from 'react-router-dom'

const UserNavItem = props => 
  <span className={props.itemClass}>
    <Link to={`${props.url}/${props.subPath}`}>{props.subPath}</Link></span>

class UserNav extends Component {
  constructor(props) {
    super(props)
  }

  render () {
    const itemPaths = ['posts', 'history', 'like', 'information']
    return (
      <div className="user-info-nav">
        {itemPaths.map(item => {
          let selected = ''
          if(`${this.props.url}/${item}`=== this.props.fullPath) {
            selected = ' selected'
          }
          console.log(item + '==>' + `${this.props.url}/${item}`)
          return <UserNavItem key={item} url={this.props.url} subPath={item} 
                   itemClass={`user-info-nav-item${selected}`}/>})}
      </div>
    )
  }
}

export default UserNav
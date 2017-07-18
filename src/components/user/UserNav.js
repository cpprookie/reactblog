import React, {Component} from 'react'

const UserNavItem = props => 
  <a href={`${props.url}/${props.subPath}`} 
     className={props.itemClass}>{props.subPath}</a>

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
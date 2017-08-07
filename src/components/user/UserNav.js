import React from 'react'
import {Link} from 'react-router-dom'

const UserNavItem = props => 
  <span className={props.itemClass}>
    <Link to={`${props.url}/${props.subPath}`}>{props.subPath}</Link></span>


const UserNav = props => {
  let itemPaths = []
  if (!props.isAuthor) {
    itemPaths = ['posts', 'history']
  } else {
    itemPaths = ['posts', 'history','information']
  }
  return (
    <div className="user-info-nav">
      {itemPaths.map(item => {
        let selected = ''
        if(`${props.url}/${item}`=== props.fullPath) {
          selected = ' selected'
        }
        return <UserNavItem key={item} url={props.url} subPath={item} 
                  itemClass={`user-info-nav-item${selected}`}/>})}
    </div>
  )
} 

export default UserNav
import React from 'react'
import {Link} from 'react-router-dom'
import Pagination from './Pagination'

const PostItem = props => (
  <li className="postItem">
    <div className="postItem-title">
      <Link to={`/post/${props.shortPost._id}`}>{props.shortPost.title}</Link>
    </div>
    <div className="postItem-info">
      <span className="postItem-info-author">
        <Link to={`/user/${props.shortPost.author._id}`}>
          {props.shortPost.author.userName}
        </Link>
      </span>
      <span className="postItem-info-date">Date: {props.shortPost.lastEditTime}</span>
      <span className="postItem-comments">comments({props.shortPost.comments})</span>
    </div>
  </li>
)


const PostList = props => (
  <div className={props.containerClass}>
    <ul className="post-list">
      {props.shortPosts.map(item =>(
        <PostItem key={item._id} shortPost={item} />
      ))}
    </ul>
    {props.totalPage > 1 ?<Pagination totalPages={props.totalPage} 
       switchPage={props.switchPage} /> : null}
  </div>
)

export default PostList
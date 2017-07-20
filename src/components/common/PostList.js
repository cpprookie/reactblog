import React from 'react'
import {Link} from 'react-router-dom'

const PostItem = props => (
  <li className="postItem">
    <h1 className="postItem-title">
      <Link to={`/post/${props.shortPost.postID}`}>{props.shortPost.title}</Link>
    </h1>
    <div className="postItem-info">
      <span className="postItem-info-auther">
        <Link to={`/user/${props.shortPost.authorID}`}>
          {props.shortPost.authorName}
        </Link>
      </span>
      <span className="postItem-info-date">Date: {props.shortPost.date}</span>
    </div>
    <div className="postItem-footer">
      <div className="postItem-footer-right">
        <span className="postItem-agree">agree({props.shortPost.like})</span>
        <span className="postItem-comments">comments({props.shortPost.comments})</span>
      </div>
    </div>
  </li>
)


const PostList = props => (
  <ul className={props.containerClass}>
    {props.shortPosts.map(item =>(
      <PostItem key={item.postID} shortPost={item} />
    ))}
  </ul>
)

export default PostList
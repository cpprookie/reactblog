import React from 'react'
import {Link} from 'react-router-dom'

const PostItem = props => (
  <li className="postItem">
    <div className="postItem-title">
      <Link to={`/post/${props.shortPost.postID}`}>{props.shortPost.title}</Link>
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
  <ul className="post-list">
    {props.shortPosts.map(item =>(
      <PostItem key={item._id} shortPost={item} />
    ))}
  </ul>
)

export default PostList
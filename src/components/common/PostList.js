import React from 'react'

const PostItem = props => (
  <li className="postItem">
    <h1 className="postItem-title">{props.shortPost.title}</h1>
    <div className="postItem-info">
      <span className="postItem-info-auther">Author: {props.shortPost.author}</span>
      <span className="postItem-info-date">Date: {props.shortPost.date}</span>
    </div>
    <div className="postItem-footer">
      <div className="postItem-footer-right">
        <span className="postItem-agree">agree({props.shortPost.agree})</span>
        <span className="postItem-comments">comments({props.shortPost.comments})</span>
      </div>
    </div>
  </li>
)


const PostList = props => (
  <ul className="postList">
    {props.shortPosts.map(item =>(
      <PostItem key={item.id} shortPost={item} />
    ))}
  </ul>
)

export default PostList
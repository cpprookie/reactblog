import React from 'react'
import {Link} from 'react-router-dom'
/**
 * 
 * @param item= {commentID, author:{userName, avatar}, content, publishTime} 
 */

const CommentList = props => (
  <div className="comment-list-wrapper">
    {props.comments.map(item=>(
      <div key={item.id} className="comment-item">
        <div className="comment-item-meta">
          <Link to={`/user/${item.author._id}`}>
            <img className="userLink-avatar" 
              height="24" width="24" src={item.author.avatar}  alt="user"/>
          </Link>
          <span className="userLink-userName">
            {item.author.userName}
          </span>
          <span className="comment-item-time">
            {item.publishTime}
          </span>
        </div>
        <div className="comment-item-content">{item.content}</div>
        {(props.userID === item.author._id ||　props.isAuthor)? 
           <div className="comment-item-delete">delete</div>: null}
      </div>)
    )}
  </div>
)

export default CommentList
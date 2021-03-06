import React from 'react'
import {Link} from 'react-router-dom'
/**
 * 
 * @param item= {_id, author:{userName, avatar}, content, publishTime} 
 */

const CommentList = props => (
  <div className="comment-list-wrapper">
    {props.comments.map(item=>(
      <div key={item._id} className="comment-item">
        <div className="comment-item-meta">
          {/* console.log(item) */}
          <Link to={`/user/${item.author[0]._id}`}>
            <img className="userLink-avatar" 
              height="24" width="24" src={item.author[0].avatar}  alt="user"/>
          </Link>
          <span className="userLink-userName">
            {item.author[0].userName}
          </span>
          <span className="comment-item-time">
            {item.timeago}
          </span>
        </div>
        <div className="comment-item-content">{item.content}</div>
        {(props.userID === item.author[0]._id ||　props.isAuthor)? 
           <div className="comment-item-delete" onClick={()=>
            {props.deleteComment(item._id)}}>delete</div>: null}
      </div>)
    )}
  </div>
)

export default CommentList
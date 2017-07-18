import React from 'react'

const CommentList = props => (
  <div className="comment-list-wrapper">
    {props.comments.map(item=>(
      <div key={item.id} className="comment-list-item">
        <div className="comment-list-item-meta">{item.author}</div>
        <div className="comment-list-item-content">{item.content}</div>
        <div className="comment-list-item-footer">delete</div>
      </div>)
    )}
  </div>
)

export default CommentList
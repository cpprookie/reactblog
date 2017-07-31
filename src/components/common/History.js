import React from 'react'
import {Link} from 'react-router-dom'

const History = props => (
  <div className="posts-history">
    <div className="history-content">
      <h3>You have watched</h3>
      <ul className="history-list">
        {props.history.map(item =>
          <li className="history-item" key={item._id}>
            <Link to={`/post/${item.post._id}`}>
              <span className="history-title">{item.post.title}</span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  </div>
) 

export default History
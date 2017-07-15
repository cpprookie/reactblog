import React from 'react'

const History = props => (
  <div className="posts-history">
    <div className="history-content">
      <h3>You have watched</h3>
      <ul className="history-list">
        {props.history.map(item =>
          <li className="history-item" key={item.id}>
            <span className="history-title">{item.title}</span>
            <span className="history-agree">{item.agree}</span>  
          </li>
        )}
      </ul>
    </div>
  </div>
)

export default History
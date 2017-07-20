import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import PostList from './common/PostList'
import History from './common/History'
import StatedHeader from '../containers/StatedHeader'
import UserNav from './user/UserNav'

const testData = [
  {"postID":0,"title":"Manchester Welcomes Mobike",authorID:"test01","authorName":"Author: Mobike UK","date":"Date: 29th June","like": 0, "comments": 1},
  {"postID":1,"title":"‘Mobike Japan’ in Fukuoka",authorID:"test02","authorName":"Author: Mobike Global","date":"Date: 22nd June","like": 0, "comments": 1},
  {"postID":2,"title":"Mobike Raises Over $600 Million in Series E Financing Led by Tencent",authorID:"test03","authorName":"Author: Mobike UK","date":"Date: 16th June", "like": 0, "comments": 1}
]

const historyData = [
  {"id":0,"title":"Manchester Welcomes Mobike", agree: 2},
  {"id":1,"title":"Mobike Japan in Fukuoka", agree: 3}
]

const User = props => (
  <div className="user">
    <StatedHeader isFixed={props.headerFix} />
    <div className="user-wrapper">
      <div className="user-basic">
        <img src="https://avatars7.githubusercontent.com/u/18083815?v=4&s=460" alt="user-avatar" className="user-avatar"/>
        <div className="user-name">
        </div>
        <div className="user-bio"></div>
      </div>
      <div className="user-info">
        <UserNav url={props.match.url} fullPath={props.location.pathname} />
        <div className="user-info-content">
          <Route path={`${props.match.url}/posts`} render={()=>
            <PostList containerClass="user-info-posts" shortPosts={testData} />} />
          <Route path={`${props.match.url}/history`} render={()=>
            <History history={historyData} />} />
          <Route path={`${props.match.url}/like`} component={PostList} />
          <Route path={`${props.match.url}/information`}  />
        </div>
      </div>
    </div>
  </div>
)

export default User
### Front end split from Back end  SPA

### keyword: react react-router redux


## UI style
----

### I get a lot of ideas from `github` `medium` `koa` `mobike`UI styles to make **R&B** look like mordern blog system. I'm really appreciated about that.


## ajax docs
----

### signup/signin/signout

```javascript

path: '/signup'
method: 'put'

request: {
  userName: String,
  password: String,
  avatar: `file`
}

response: {
  success: true,
  message: 'create user success!',
  user: {
    userID: createdUser._id,
    userName: createdUser.userName,
    avatar: createdUser.avatar
  }
}

// signin
method = 'post'

path = '/signin'

request: {
  userName: String,
  password: String
}

response: {
  success: true,
  message: 'signin success',
  user: {
    userName: user.userName,
    userID: user._id,
    avatar: user.avatar
  }
}

//signout 
path: `user/:userID/signout`
method: `post`

response: {
  success: true,
  message: 'signout success'
}
```

### post

```javascript
// get posts
method: 'get'

path: `/posts`

request_param : {page: Number}

response: {
  success: true,
  message: `get posts on page ${ctx.query.page}`,
  totalPage,
  postList: [
    {
      _id: 'ObjectId',
      author: {
        _id: 'ObjectId',
        userName: String,
        avatar: String
      }
      title: String,
      content: String,
      createTime: Date,
      lastEditTime: Date,
      comments: Number
    }
  ]
}

// get post
path: `/post`

method: 'get'

request_param: {userID: String}

response: {
  success: true,
  message: 'find post success',
  post: {
    _id: 'ObjectId',
      author: {
        _id: 'ObjectId',
        userName: String,
        avatar: String
      }
      title: String,
      content: String,
      createTime: Date,
      lastEditTime: Date,
      comments: Number
  }   // same as 
}

// put post 
path: '/user/:userID/post',
method: 'put',

response: {
  success: true,
  message: 'create post success'
}

// edit post 
path: `/user/:userID/post/:postID`
methos: 'post'

response: {
  success: true,
  message: "edit post success"
}

// delete post
path: `/user/:userID/post/:postID`
methos: 'delete'

response: {
  success: true,
  message: 'delete post success'
}
```

### comment 
```javascript

// get post comments
path: '/post/:id/comments'
method: 'get'
request_param: {page: Number}

response: {
   success: true,
   message: `get comments for post: ${id} success`,
   comments: {
     totalCommets: Number,
     totalPages: Number,
     currentPage: Number
     commentList: [
       {
         _id: String,
        author: {
          _id: String,
          userName: String,
          avatar: String
        },
        content: String,
        timeago: String
       }
     ],
   }
}

// put comment
path: '/post/:id/comment'
method: 'put'
request_param: {comment: {
  author: String, //userID
  content: String,
  timeago: String
}}

response: {
  success: true,
  message: 'create comment success'
}

// delete comment

path: '/post/:postID/comment/:commentID'
method: 'delete'
request_param: {author: String} //userID

response: {
  success: true,
  message: 'delete comment success'
}
```

### history
------

```javascript
method = 'get'
path = `/${userID}/history`
request_param: {
  all: Boolean
}

response: {
  history: [
     {
      _id: String,
      post: {
        _id: String,
        title: String
      },
      user: String,
      lastViewTime: Date
    }
  ]
}

```